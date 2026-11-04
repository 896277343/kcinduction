export const locales = ["en", "ar", "ru", "es", "de", "ko"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPublishedLocales(): Locale[] {
  const configured = (process.env.PUBLISHED_LOCALES || defaultLocale)
    .split(",")
    .map((value) => value.trim())
    .filter(isLocale);
  return configured.length ? Array.from(new Set(configured)) : [defaultLocale];
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  ru: "Русский",
  es: "Español",
  de: "Deutsch",
  ko: "한국어",
};

export function localizePath(pathname: string, locale: Locale): string {
  const [pathWithQuery, hash = ""] = pathname.split("#", 2);
  const [path = "/", query = ""] = pathWithQuery.split("?", 2);
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const parts = normalized.split("/");
  if (parts[1] && isLocale(parts[1])) parts.splice(1, 1);
  const cleanPath = parts.join("/") || "/";
  const localized = locale === defaultLocale ? cleanPath : `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
  return `${localized}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}
