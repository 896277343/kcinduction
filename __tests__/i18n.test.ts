import { describe, expect, it } from "vitest";
import { isLocale, localizePath } from "@/lib/i18n/config";

describe("localized routes", () => {
  it("keeps English unprefixed and prefixes translated locales", () => {
    expect(localizePath("/products", "en")).toBe("/products");
    expect(localizePath("/products", "de")).toBe("/de/products");
    expect(localizePath("/ru/products#models", "ko")).toBe("/ko/products#models");
  });

  it("only accepts supported locale codes", () => {
    expect(isLocale("ru")).toBe(true);
    expect(isLocale("ar")).toBe(true);
    expect(isLocale("ko")).toBe(true);
    expect(isLocale("zh")).toBe(false);
  });
});
