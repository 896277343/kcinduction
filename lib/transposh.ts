import "server-only";

import { defaultLocale, type Locale } from "@/lib/i18n/config";

const apiBase = (process.env.TRANSPOSH_API_URL || process.env.WORDPRESS_URL || "").replace(/\/$/, "");
const apiSecret = process.env.TRANSPOSH_HEADLESS_SECRET || "";

type TranslationResponse = { results?: string[]; translated_mask?: boolean[] };

export async function translateStrings(strings: string[], locale: Locale): Promise<string[]> {
  if (locale === defaultLocale || strings.length === 0) return strings;
  if (!apiBase || apiSecret.length < 24) {
    console.warn("Transposh Headless API is not configured; returning source content");
    return strings;
  }
  const nonEmpty = strings.map((value, index) => ({ value, index })).filter(({ value }) => value.trim());
  if (!nonEmpty.length) return strings;
  try {
    const response = await fetch(`${apiBase}/wp-json/transposh/v1/translate`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Transposh-Key": apiSecret },
      body: JSON.stringify({ source_language: defaultLocale, language: locale, format: "text", strings: nonEmpty.map(({ value }) => value) }),
      cache: "force-cache",
      next: { revalidate: 86400, tags: [`transposh-${locale}`] },
      signal: AbortSignal.timeout(65000),
    });
    if (!response.ok) return strings;
    const payload = (await response.json()) as TranslationResponse;
    if (!Array.isArray(payload.results) || payload.results.length !== nonEmpty.length) return strings;
    const results = [...strings];
    nonEmpty.forEach(({ index }, resultIndex) => { results[index] = payload.results![resultIndex] || strings[index]; });
    return results;
  } catch (error) {
    console.warn(`Transposh translation request failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    return strings;
  }
}

export async function translateCatalog(catalog: Record<string, string>, locale: Locale) {
  if (locale === defaultLocale) return catalog;
  const entries = Object.entries(catalog);
  const translated: Record<string, string> = {};
  for (let offset = 0; offset < entries.length; offset += 50) {
    const batch = entries.slice(offset, offset + 50);
    const results = await translateStrings(batch.map(([, value]) => value), locale);
    batch.forEach(([key, source], index) => { translated[key] = results[index] || source; });
  }
  return translated;
}
