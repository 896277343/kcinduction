import fs from "node:fs";
import path from "node:path";

const catalog = JSON.parse(fs.readFileSync(path.join(process.cwd(), "messages", "source.json"), "utf8"));
const strings = [...new Set(Object.values(catalog).filter((value) => typeof value === "string" && value.trim()))];
const supportedLocales = ["ar", "ru", "es", "de", "ko"];
const requestedLocales = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
const locales = requestedLocales.length ? requestedLocales : supportedLocales;
const dryRun = process.argv.includes("--dry-run");

if (locales.some((locale) => !supportedLocales.includes(locale))) {
  console.error(`Supported locales: ${supportedLocales.join(", ")}`);
  process.exit(1);
}

console.log(`${strings.length} unique source strings; ${locales.length} locales; ${Math.ceil(strings.length / 50) * locales.length} batches.`);
if (dryRun) process.exit(0);

const apiBase = (process.env.TRANSPOSH_API_URL || process.env.WORDPRESS_URL || "").replace(/\/$/, "");
const secret = process.env.TRANSPOSH_HEADLESS_SECRET || "";
if (!apiBase || secret.length < 24) {
  console.error("TRANSPOSH_API_URL and TRANSPOSH_HEADLESS_SECRET must be configured.");
  process.exit(1);
}

for (const locale of locales) {
  let translated = 0;
  for (let offset = 0; offset < strings.length; offset += 50) {
    const batch = strings.slice(offset, offset + 50);
    try {
      const response = await fetch(`${apiBase}/wp-json/transposh/v1/translate`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Transposh-Key": secret },
        body: JSON.stringify({ source_language: "en", language: locale, format: "text", strings: batch }),
        signal: AbortSignal.timeout(120_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      if (!Array.isArray(payload.results) || !Array.isArray(payload.translated_mask) ||
          payload.results.length !== batch.length || payload.translated_mask.length !== batch.length) {
        throw new Error("Unexpected translation response");
      }
      const count = payload.translated_mask.filter(Boolean).length;
      translated += count;
      if (count !== batch.length) {
        throw new Error(`${batch.length - count} strings were not translated`);
      }
    } catch (error) {
      console.error(`${locale} batch ${Math.floor(offset / 50) + 1}: ${error instanceof Error ? error.message : error}`);
      console.error("Stopped after the first failed batch. Earlier translations remain stored; re-run to retry.");
      process.exit(1);
    }
    console.log(`${locale}: ${Math.min(offset + 50, strings.length)}/${strings.length} checked, ${translated} translated`);
  }
}
console.log("All translations confirmed and stored in WordPress.");
