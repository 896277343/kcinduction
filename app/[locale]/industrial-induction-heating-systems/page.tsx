import type { Metadata } from "next";
import { SolutionLanding } from "@/components/landing/solution-landing";
import { solutionPages } from "@/lib/solution-pages";
import { siteConfig } from "@/site.config";

const page = solutionPages["industrial-induction-heating-systems"];
export const metadata: Metadata = { title: page.primaryKeyword, description: page.metaDescription, keywords: [page.primaryKeyword, "induction heating equipment", "high power induction heating system"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <SolutionLanding page={page} />; }
