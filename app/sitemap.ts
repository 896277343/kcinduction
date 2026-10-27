import { MetadataRoute } from "next";
import { getAllPages, getAllPostsForSitemap } from "@/lib/wordpress";
import { siteConfig } from "@/site.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, pages] = await Promise.all([
    getAllPostsForSitemap(),
    getAllPages(),
  ]);

  const staticPaths = [
    "/",
    "/about",
    "/contact",
    "/products",
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
    "/posts",
  ] as const;

  const staticLastModifiedMap: Partial<Record<(typeof staticPaths)[number], string>> = {
    "/": "2026-05-10",
    "/about": "2026-05-10",
    "/contact": "2026-05-10",
    "/products": "2026-05-10",
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
    "/posts": "2026-05-10",
  };

  const staticUrls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.site_domain}${path === "/" ? "" : path}`,
    lastModified: new Date(staticLastModifiedMap[path] ?? "2026-05-10"),
    changeFrequency:
      path === "/"
        ? "monthly"
        : path.startsWith("/posts")
          ? "weekly"
          : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/products" || path === "/solutions"
          ? 0.9
          : path.startsWith("/products/") || path.includes("induction-")
            ? 0.8
            : 0.7,
  }));

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.site_domain}/posts/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const pageUrls: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${siteConfig.site_domain}/pages/${page.slug}`,
    lastModified: new Date(page.modified || page.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticUrls, ...postUrls, ...pageUrls];
}
