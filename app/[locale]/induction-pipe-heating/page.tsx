import type { Metadata } from "next";
import { SolutionLanding } from "@/components/landing/solution-landing";
import { solutionPages } from "@/lib/solution-pages";
import { siteConfig } from "@/site.config";

const page = solutionPages["induction-pipe-heating"];
export const metadata: Metadata = { title: "Induction Pipe Heating & Weld Preheating", description: page.metaDescription, keywords: [page.primaryKeyword, "induction weld preheating", "induction PWHT equipment", "pipe preheating equipment"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <SolutionLanding page={page} />; }
