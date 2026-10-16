import type { Metadata } from "next";
import { SolutionLanding } from "@/components/landing/solution-landing";
import { solutionPages } from "@/lib/solution-pages";
import { siteConfig } from "@/site.config";

const page = solutionPages["induction-heating-system-comparison"];
export const metadata: Metadata = { title: "Compare Industrial Induction Heating Equipment", description: page.metaDescription, keywords: [page.primaryKeyword, "compare induction heating equipment", "induction heating supplier", "induction power supply manufacturer"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <SolutionLanding page={page} />; }
