import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Check, CircuitBoard, Factory, Gauge, ShieldCheck, Target, Zap } from "lucide-react";
import type { SolutionPage } from "@/lib/solution-pages";
import { siteConfig } from "@/site.config";

export function SolutionLanding({ page }: { page: SolutionPage }) {
  const contactProductBySlug: Record<string, string> = {
    "industrial-induction-heating-systems": "Not sure — recommend a solution",
    "custom-induction-heating-lines": "Custom automated heating line",
    "induction-forging-equipment": "Induction forging & forming",
    "induction-pipe-heating": "Pipe heating, preheating & PWHT",
    "induction-pipe-bending-machine": "Pipe heating, preheating & PWHT",
    "induction-hardening-machine": "Induction hardening & heat treatment",
    "induction-brazing-system": "Induction brazing & joining",
    "induction-heating-system-comparison": "Not sure — recommend a solution",
  };
  const contactHref = `/contact?product=${encodeURIComponent(contactProductBySlug[page.slug] ?? "Not sure — recommend a solution")}&source=${encodeURIComponent(`/${page.slug}`)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.primaryKeyword,
    description: page.metaDescription,
    provider: { "@type": "Organization", name: siteConfig.brand.legalName, url: siteConfig.site_domain },
    areaServed: "Worldwide",
    url: `${siteConfig.site_domain}/${page.slug}`,
  };

  return (
    <main className="bg-[#07111b] text-white">
      <Script id={`${page.slug}-schema`} type="application/ld+json">{JSON.stringify(schema)}</Script>

      <section className="relative isolate min-h-[680px] overflow-hidden border-b border-white/10">
        <Image src={page.heroImage} alt={page.heroAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,.98)_0%,rgba(3,10,18,.88)_48%,rgba(3,10,18,.28)_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/35 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[.16em] text-orange-300 backdrop-blur"><Zap className="h-4 w-4" />{page.eyebrow}</div>
            <h1 className="mt-7 text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-[5rem]">{page.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{page.lead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href={contactHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 hover:bg-orange-400">Discuss your application <ArrowRight className="h-5 w-5" /></Link><Link href="/products" className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/20 bg-white/5 px-7 font-semibold backdrop-blur hover:bg-white/10">Explore digital power supplies</Link></div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0b1825]">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-3">
          {page.outcomes.map((item) => <div key={item.value} className="bg-[#0b1825] px-6 py-7 sm:px-8"><div className="text-2xl font-semibold text-orange-300">{item.value}</div><div className="mt-1 text-sm text-slate-400">{item.label}</div></div>)}
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="section-kicker">APPLICATION FIT</p><h2 className="section-title mt-4">{page.fitTitle}</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">{page.fitCopy}</p></div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">{page.applications.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"><div className="font-mono text-xs text-orange-600">0{index + 1}</div><h3 className="mt-6 text-2xl font-semibold">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.copy}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-slate-100"><Image src={page.processImage} alt={page.processAlt} fill className="object-cover" sizes="(min-width:1024px) 50vw,100vw" /><div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-slate-950/85 p-5 text-white backdrop-blur"><div className="text-sm font-semibold text-orange-300">VISIBLE ENGINEERING</div><div className="mt-1 text-sm text-slate-300">Hardware, software and application design developed as one heating platform.</div></div></div>
          <div><p className="section-kicker">PROCESS ENGINEERING</p><h2 className="section-title mt-4">{page.processTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{page.processCopy}</p><div className="mt-9 grid gap-3">{page.engineering.map((item) => <div key={item.label} className="grid gap-1 rounded-xl border border-slate-200 p-5 sm:grid-cols-[120px_1fr]"><div className="text-xs font-bold uppercase tracking-wider text-orange-600">{item.label}</div><div className="text-sm leading-6 text-slate-700">{item.value}</div></div>)}</div></div>
        </div>
      </section>

      <section className="bg-[#091521] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div><div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-[.16em] text-cyan-300"><CircuitBoard className="h-4 w-4" />5TH-GENERATION DIGITAL PLATFORM</div><h2 className="section-title mt-6 text-white">The power supply is part of the process intelligence.</h2><p className="mt-6 text-lg leading-8 text-slate-300">KC develops digital induction power supplies and control software in-house. Operators can see status, adjust the process and follow power and energy use instead of treating the cabinet as a black box.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{[[Gauge,"Power & energy tracking"],[Target,"Digital recipe control"],[ShieldCheck,"Fault protection"],[Factory,"OEM / ODM integration"]].map(([Icon,label]) => { const C = Icon as typeof Gauge; return <div key={label as string} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] p-4 text-sm font-semibold"><C className="h-5 w-5 text-orange-300" />{label as string}</div>; })}</div></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-3 shadow-2xl"><Image src="/images/kc/energy-monitoring.webp" alt="KC induction heating power and energy monitoring interface" width={1024} height={796} className="h-auto w-full rounded-xl" /><div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-2 pt-5"><span className="font-semibold">Process visibility built into the system</span><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">KC DIGITAL CONTROL</span></div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]"><div><p className="section-kicker">PROJECT SCOPE</p><h2 className="section-title mt-4">What KC can deliver.</h2><p className="mt-6 leading-7 text-slate-600">The final scope is configured around your process. Start with a power-and-coil package or ask us to engineer the complete heating station.</p></div><div className="grid gap-3 sm:grid-cols-2">{page.deliverables.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600"><Check className="h-4 w-4" /></span><span className="font-medium leading-6">{item}</span></div>)}</div></div></div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-5xl px-5 sm:px-8"><div className="text-center"><p className="section-kicker">TECHNICAL QUESTIONS</p><h2 className="section-title mx-auto mt-4">Before we recommend a system.</h2></div><div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">{page.questions.map((item) => <details key={item.question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold marker:content-none">{item.question}<span className="text-2xl font-light text-orange-600 transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 leading-7 text-slate-600">{item.answer}</p></details>)}</div></div>
      </section>

      <section id="project" className="relative overflow-hidden py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(249,115,22,.2),transparent_34%)]" /><div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.85fr] lg:items-center lg:px-10"><div><p className="section-kicker">START WITH THE WORKPIECE</p><h2 className="section-title mt-4 max-w-3xl text-white">Tell us what needs to be heated—and what must happen next.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Send the part drawing, material, target temperature, heated area and cycle time. Our engineers will recommend a practical starting point for power, frequency and coil design.</p></div><div className="rounded-2xl border border-white/10 bg-white/[.055] p-7 shadow-2xl backdrop-blur sm:p-9"><div className="text-sm font-semibold tracking-wider text-orange-300">REQUEST A TECHNICAL REVIEW</div><div className="mt-6 space-y-3"><Link href={contactHref} className="flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400">Send project requirements <ArrowRight className="h-5 w-5" /></Link><Link href="/products" className="flex min-h-14 items-center justify-center rounded-md border border-white/15 px-6 font-semibold hover:bg-white/5">Review power-supply range</Link></div><div className="mt-7 border-t border-white/10 pt-6 text-sm leading-7 text-slate-400"><span className="text-slate-500">Direct:</span> {siteConfig.contact.phone}<br /><span className="text-slate-500">Email:</span> {siteConfig.contact.email}</div></div></div></section>
    </main>
  );
}
