import { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { getPublishedLocales, localizePath } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/contact",
    "/privacy-policy",
    "/products",
    "/why-us",
    "/medium-frequency-induction-power-supply",
    "/ultrasonic-frequency-induction-power-supply",
    "/high-frequency-induction-power-supply",
    "/ultra-high-frequency-induction-power-supply",
    "/fifth-generation-digital-induction-heating-power-supply",
    "/solutions",
    "/industrial-induction-heating-systems",
    "/custom-induction-heating-lines",
    "/induction-forging-equipment",
    "/induction-pipe-heating",
    "/induction-pipe-bending-machine",
    "/induction-hardening-machine",
    "/induction-brazing-system",
    "/induction-heating-system-comparison",
  ] as const;

  const staticLastModifiedMap: Partial<Record<(typeof staticPaths)[number], string>> = {
    "/": "2026-05-10",
    "/about": "2026-05-10",
    "/contact": "2026-05-10",
    "/products": "2026-05-10",
    "/why-us": "2026-11-03",
    "/medium-frequency-induction-power-supply": "2026-10-26",
    "/ultrasonic-frequency-induction-power-supply": "2026-10-26",
    "/high-frequency-induction-power-supply": "2026-10-26",
    "/ultra-high-frequency-induction-power-supply": "2026-10-26",
    "/fifth-generation-digital-induction-heating-power-supply": "2026-10-16",
    "/solutions": "2026-10-15",
    "/industrial-induction-heating-systems": "2026-10-15",
    "/custom-induction-heating-lines": "2026-10-15",
    "/induction-forging-equipment": "2026-10-15",
    "/induction-pipe-heating": "2026-10-15",
    "/induction-pipe-bending-machine": "2026-10-15",
    "/induction-hardening-machine": "2026-10-15",
    "/induction-brazing-system": "2026-10-15",
    "/induction-heating-system-comparison": "2026-10-15",
  };

  const staticUrls: MetadataRoute.Sitemap = getPublishedLocales().flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteConfig.site_domain}${localizePath(path, locale) === "/" ? "" : localizePath(path, locale)}`,
      lastModified: new Date(staticLastModifiedMap[path] ?? "2026-05-10"),
      changeFrequency: "monthly" as const,
      priority:
        path === "/"
          ? 1
          : path === "/products" || path === "/solutions"
            ? 0.9
            : path.startsWith("/products/") || path.includes("induction-")
              ? 0.8
              : 0.7,
    }))
  );

  return staticUrls;
}
