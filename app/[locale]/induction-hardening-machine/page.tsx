import type { Metadata } from "next";
import { SolutionLanding } from "@/components/landing/solution-landing";
import { solutionPages } from "@/lib/solution-pages";
import { siteConfig } from "@/site.config";

const page = solutionPages["induction-hardening-machine"];
export const metadata: Metadata = { title: page.primaryKeyword, description: page.metaDescription, keywords: [page.primaryKeyword, "induction quenching machine", "CNC induction hardening machine", "induction heat treatment equipment"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <SolutionLanding page={page} />; }
