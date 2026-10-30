import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { legacyRedirects } from "@/lib/legacy-redirects";

describe("legacy WordPress redirects", () => {
  it("has unique sources and valid local destinations", () => {
    expect(new Set(legacyRedirects.map(({ source }) => source)).size).toBe(legacyRedirects.length);
    for (const redirect of legacyRedirects) {
      expect(redirect.permanent).toBe(true);
      expect(redirect.destination.startsWith("/")).toBe(true);
      expect(existsSync(join(process.cwd(), "app", redirect.destination, "page.tsx"))).toBe(true);
    }
  });

  it("maps the old fifth-generation URL and Google Ads landing paths", () => {
    const bySource = new Map(legacyRedirects.map(({ source, destination }) => [source, destination]));
    expect(bySource.get("/5th-generation-digital-induction-heating-power-supply"))
      .toBe("/fifth-generation-digital-induction-heating-power-supply");
    expect(bySource.get("/medium-frequency")).toBe("/medium-frequency-induction-power-supply");
    expect(bySource.get("/induction-heat-treatment-system")).toBe("/solutions");
    expect(bySource.get("/product/automatic-induction-forging-equipment"))
      .toBe("/induction-forging-equipment");
  });
});
