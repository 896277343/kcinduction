import type { Metadata } from "next";
import { SolutionLanding } from "@/components/landing/solution-landing";
import { solutionPages } from "@/lib/solution-pages";
import { siteConfig } from "@/site.config";

const page = solutionPages["induction-forging-equipment"];
export const metadata: Metadata = { title: "Induction Forging Machine & Billet Heater", description: page.metaDescription, keywords: [page.primaryKeyword, "induction billet heater", "billet heating machine", "induction forging equipment"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <SolutionLanding page={page} />; }
