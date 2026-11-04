import type { Metadata } from "next";
import { SolutionLanding } from "@/components/landing/solution-landing";
import { solutionPages } from "@/lib/solution-pages";
import { siteConfig } from "@/site.config";

const page = solutionPages["induction-pipe-bending-machine"];
export const metadata: Metadata = { title: page.primaryKeyword, description: page.metaDescription, keywords: [page.primaryKeyword, "induction pipe bending equipment", "medium frequency pipe bender"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <SolutionLanding page={page} />; }
