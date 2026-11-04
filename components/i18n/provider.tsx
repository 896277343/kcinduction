"use client";

import { createContext, useContext } from "react";
import { localizePath, type Locale } from "@/lib/i18n/config";
import { messages, type MessageKey } from "@/lib/i18n/messages";
import sourceCatalog from "@/messages/source.json";

const sourceKeyByText = new Map(Object.entries(sourceCatalog).map(([key, source]) => [source, key]));
type I18nValue = { locale: Locale; availableLocales: Locale[]; catalog: Record<string, string>; t: (key: MessageKey) => string; href: (path: string) => string; translateValue: (value: React.ReactNode) => React.ReactNode };
const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ locale, availableLocales, catalog, children }: { locale: Locale; availableLocales: Locale[]; catalog: Record<string, string>; children: React.ReactNode }) {
  const value: I18nValue = {
    locale, availableLocales, catalog,
    t: (key) => messages[locale][key] ?? messages.en[key] ?? key,
    href: (path) => localizePath(path, locale),
    translateValue: (input) => {
      if (typeof input !== "string") return input;
      const key = sourceKeyByText.get(input);
      return key ? catalog[key] ?? input : input;
    },
  };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}
