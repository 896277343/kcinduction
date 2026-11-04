
import { T, TV } from "@/components/i18n/text";
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
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/35 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[.16em] text-orange-300 backdrop-blur"><Zap className="h-4 w-4" />{<TV>{page.eyebrow}</TV>}</div>
            <h1 className="mt-7 text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-[5rem]">{<TV>{page.title}</TV>}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{<TV>{page.lead}</TV>}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href={contactHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 hover:bg-orange-400"><T id="48de8a478f031222" /> <ArrowRight className="h-5 w-5" /></Link><Link href="/products" className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/20 bg-white/5 px-7 font-semibold backdrop-blur hover:bg-white/10"><T id="5272eca07b1a7c25" /></Link></div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0b1825]">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-3">
          {page.outcomes.map((item) => <div key={item.value} className="bg-[#0b1825] px-6 py-7 sm:px-8"><div className="text-2xl font-semibold text-orange-300">{<TV>{item.value}</TV>}</div><div className="mt-1 text-sm text-slate-400">{<TV>{item.label}</TV>}</div></div>)}
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="section-kicker"><T id="16f1df19300102cb" /></p><h2 className="section-title mt-4">{<TV>{page.fitTitle}</TV>}</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">{<TV>{page.fitCopy}</TV>}</p></div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">{page.applications.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"><div className="font-mono text-xs text-orange-600">0{index + 1}</div><h3 className="mt-6 text-2xl font-semibold">{<TV>{item.title}</TV>}</h3><p className="mt-3 leading-7 text-slate-600">{<TV>{item.copy}</TV>}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-slate-100"><Image src={page.processImage} alt={page.processAlt} fill className="object-cover" sizes="(min-width:1024px) 50vw,100vw" /><div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-slate-950/85 p-5 text-white backdrop-blur"><div className="text-sm font-semibold text-orange-300"><T id="0bcb6658e19ceb63" /></div><div className="mt-1 text-sm text-slate-300"><T id="5c0b2a54a30a4fd4" /></div></div></div>
          <div><p className="section-kicker"><T id="d44365dbae8a90d2" /></p><h2 className="section-title mt-4">{<TV>{page.processTitle}</TV>}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{<TV>{page.processCopy}</TV>}</p><div className="mt-9 grid gap-3">{page.engineering.map((item) => <div key={item.label} className="grid gap-1 rounded-xl border border-slate-200 p-5 sm:grid-cols-[120px_1fr]"><div className="text-xs font-bold uppercase tracking-wider text-orange-600">{<TV>{item.label}</TV>}</div><div className="text-sm leading-6 text-slate-700">{<TV>{item.value}</TV>}</div></div>)}</div></div>
        </div>
      </section>

      <section className="bg-[#091521] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div><div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-[.16em] text-cyan-300"><CircuitBoard className="h-4 w-4" /><T id="5be62f7ce7bae8db" /></div><h2 className="section-title mt-6 text-white"><T id="fc1f651af014a496" /></h2><p className="mt-6 text-lg leading-8 text-slate-300"><T id="0dec16ed2110a79e" /></p><div className="mt-8 grid gap-3 sm:grid-cols-2">{[[Gauge,"Power & energy tracking"],[Target,"Digital recipe control"],[ShieldCheck,"Fault protection"],[Factory,"OEM / ODM integration"]].map(([Icon,label]) => { const C = Icon as typeof Gauge; return <div key={label as string} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] p-4 text-sm font-semibold"><C className="h-5 w-5 text-orange-300" />{label as string}</div>; })}</div></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-3 shadow-2xl"><Image src="/images/kc/energy-monitoring.webp" alt="KC induction heating power and energy monitoring interface" width={1024} height={796} className="h-auto w-full rounded-xl" /><div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-2 pt-5"><span className="font-semibold"><T id="4480ebec2c947524" /></span><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"><T id="c5636e7a258df141" /></span></div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]"><div><p className="section-kicker"><T id="cb01bc55d1806ae8" /></p><h2 className="section-title mt-4"><T id="2aa023a6c26ff88d" /></h2><p className="mt-6 leading-7 text-slate-600"><T id="4ce8b5b9cfefa4db" /></p></div><div className="grid gap-3 sm:grid-cols-2">{page.deliverables.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600"><Check className="h-4 w-4" /></span><span className="font-medium leading-6">{<TV>{item}</TV>}</span></div>)}</div></div></div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-5xl px-5 sm:px-8"><div className="text-center"><p className="section-kicker"><T id="4c98a8ea82b9c77f" /></p><h2 className="section-title mx-auto mt-4"><T id="f9063d34d6e4b451" /></h2></div><div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">{page.questions.map((item) => <details key={item.question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold marker:content-none">{<TV>{item.question}</TV>}<span className="text-2xl font-light text-orange-600 transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 leading-7 text-slate-600">{<TV>{item.answer}</TV>}</p></details>)}</div></div>
      </section>

      <section id="project" className="relative overflow-hidden py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(249,115,22,.2),transparent_34%)]" /><div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.85fr] lg:items-center lg:px-10"><div><p className="section-kicker"><T id="6b3c2157871ad783" /></p><h2 className="section-title mt-4 max-w-3xl text-white"><T id="d9867e8419fde35f" /></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400"><T id="d8b83ed967eb63d2" /></p></div><div className="rounded-2xl border border-white/10 bg-white/[.055] p-7 shadow-2xl backdrop-blur sm:p-9"><div className="text-sm font-semibold tracking-wider text-orange-300"><T id="1140aaa227f4c830" /></div><div className="mt-6 space-y-3"><Link href={contactHref} className="flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400"><T id="faf6a8d7fdf05e53" /> <ArrowRight className="h-5 w-5" /></Link><Link href="/products" className="flex min-h-14 items-center justify-center rounded-md border border-white/15 px-6 font-semibold hover:bg-white/5"><T id="9d541bded4014607" /></Link></div><div className="mt-7 border-t border-white/10 pt-6 text-sm leading-7 text-slate-400"><span className="text-slate-500"><T id="dbd2fd893f97dd4c" /></span> {<TV>{siteConfig.contact.phone}</TV>}<br /><span className="text-slate-500"><T id="17507dcf845793fa" /></span> {<TV>{siteConfig.contact.email}</TV>}</div></div></div></section>
    </main>
  );
}
