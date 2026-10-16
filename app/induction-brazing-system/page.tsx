import type { Metadata } from "next";
import { SolutionLanding } from "@/components/landing/solution-landing";
import { solutionPages } from "@/lib/solution-pages";
import { siteConfig } from "@/site.config";

const page = solutionPages["induction-brazing-system"];
export const metadata: Metadata = { title: "Induction Brazing Machine & Automated Systems", description: page.metaDescription, keywords: [page.primaryKeyword, "induction brazing equipment", "automatic induction brazing machine", "copper tube brazing machine"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <SolutionLanding page={page} />; }
