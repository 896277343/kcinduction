
import { T, TV } from "@/components/i18n/text";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/i18n/link";
import { ArrowRight } from "lucide-react";
import { solutionPages } from "@/lib/solution-pages";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = { title: "Induction Heating Solutions", description: "Explore KC induction heating machines and application-specific systems for forging, pipe heating, bending, hardening, brazing and automated production.", alternates: { canonical: `${siteConfig.site_domain}/solutions` } };

const cards = Object.values(solutionPages).filter((page) => page.slug !== "induction-heating-system-comparison");

export default function SolutionsPage() {
  return <main className="bg-[#07111b] text-white"><section className="border-b border-white/10 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><p className="section-kicker"><T id="b8e3cdc2b6eb8d10" /></p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-7xl"><T id="4487f743e6bad5ae" /></h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300"><T id="21e86fdb1a4b9032" /></p></div></section><section className="bg-[#f3f1ea] py-24 text-slate-950"><div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:px-10">{cards.map((page) => <Link key={page.slug} href={`/${page.slug}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="relative h-72 overflow-hidden bg-slate-100"><Image src={page.heroImage} alt={page.heroAlt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:768px) 50vw,100vw" /></div><div className="p-7"><div className="text-xs font-bold tracking-[.14em] text-orange-600">{<TV>{page.eyebrow}</TV>}</div><h2 className="mt-4 text-2xl font-semibold">{<TV>{page.primaryKeyword}</TV>}</h2><p className="mt-3 line-clamp-2 leading-7 text-slate-600">{<TV>{page.lead}</TV>}</p><span className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600"><T id="c9d0dfbda390ffb2" /> <ArrowRight className="h-4 w-4" /></span></div></Link>)}</div></section></main>;
}
