
import { T, TV } from "@/components/i18n/text";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/i18n/link";
import Script from "next/script";
import { ArrowRight, Check, Eye, Gauge, History, Settings2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "5th Generation Digital Induction Heating Power Supply",
  description: "KC fifth-generation digital induction heating power supplies are now in series production, with self-developed digital control and real-time power and energy tracking.",
  alternates: { canonical: `${siteConfig.site_domain}/fifth-generation-digital-induction-heating-power-supply` },
};

const monitored = [
  "Output power, voltage and current",
  "Operating frequency and matching status",
  "Energy consumption and heating time",
  "Cooling-water temperature, pressure and flow",
  "Alarm history and equipment status",
];

const changes = [
  [Gauge, "More stable control", "Dual-core digital processing, fuzzy PID and power/current closed-loop control respond quickly when the load changes."],
  [Settings2, "Easier process adjustment", "Power, time and operating parameters are visible and adjustable instead of hidden inside an analog power cabinet."],
  [Eye, "The process is visible", "Operators can follow real-time output, energy use, frequency, cooling conditions and alarm status from one interface."],
  [History, "Every cycle can be reviewed", "Recorded operating data helps compare batches, investigate faults and improve the energy used for each part."],
];

export default function FifthGenerationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "KC 5th Generation Digital Induction Heating Power Supply",
    brand: { "@type": "Brand", name: "KC Induction" },
    manufacturer: { "@type": "Organization", name: siteConfig.brand.legalName },
    description: metadata.description,
    url: `${siteConfig.site_domain}/fifth-generation-digital-induction-heating-power-supply`,
  };

  return (
    <main className="bg-[#07111b] text-white">
      <Script id="fifth-generation-schema" type="application/ld+json">{JSON.stringify(schema)}</Script>

      <section className="border-b border-white/10">
        <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-10">
          <div>
            <div className="inline-flex rounded-full border border-orange-400/35 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[.17em] text-orange-300"><T id="1768b952d34e2d2f" /></div>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl"><T id="6a42ba280c6debf4" /></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"><T id="63ba24c3a2753553" /></p>
            <div className="mt-8 space-y-3">
              {["Fully digital control developed by KC Induction", "Real-time power and energy tracking", "Adaptive matching for changing industrial loads"].map((item) => <div key={item} className="flex items-center gap-3 font-medium text-slate-200"><Check className="h-5 w-5 shrink-0 text-orange-400" />{<TV>{item}</TV>}</div>)}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="#monitoring" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 hover:bg-orange-400"><T id="b23e8edb664d369d" /> <ArrowRight className="h-5 w-5" /></Link><Link href="/contact?product=5th-generation%20digital%20heating%20system&source=%2Ffifth-generation-digital-induction-heating-power-supply" className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/20 px-7 font-semibold hover:bg-white/5"><T id="48de8a478f031222" /></Link></div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"><Image src="/images/kc/fifth-generation-system.webp" alt="KC fifth-generation digital induction heating power supply" fill priority className="object-cover" sizes="(min-width:1024px) 52vw,100vw" /></div>
            <div className="absolute bottom-5 left-5 rounded-lg border border-white/15 bg-slate-950/90 px-5 py-4 backdrop-blur"><div className="text-sm font-semibold text-orange-300"><T id="9a81d380d07ed413" /></div><div className="mt-1 text-xs text-slate-300"><T id="44da8d013fc90ccc" /></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0b1825]"><div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-4">{[["0.1–1000 kHz","frequency coverage"],["Up to 2000 kW","engineered power coverage"],["Real time","energy visibility"],["OEM / ODM","system configuration"]].map(([value,label]) => <div key={label} className="bg-[#0b1825] px-6 py-7"><div className="text-2xl font-semibold text-orange-300">{<TV>{value}</TV>}</div><div className="mt-1 text-sm text-slate-400">{<TV>{label}</TV>}</div></div>)}</div></section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl"><p className="section-kicker"><T id="fa9f33ebbe3572d1" /></p><h2 className="section-title mt-4"><T id="b1cc3fbed4565dc6" /></h2><p className="mt-6 text-lg leading-8 text-slate-600"><T id="888327a30bb9140c" /></p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">{changes.map(([Icon,title,copy]) => { const Component = Icon as typeof Gauge; return <article key={title as string} className="bg-white p-7 sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-orange-400"><Component className="h-6 w-6" /></div><h3 className="mt-6 text-2xl font-semibold">{title as string}</h3><p className="mt-3 leading-7 text-slate-600">{copy as string}</p></article>; })}</div>
        </div>
      </section>

      <section id="monitoring" className="bg-white py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10">
          <div><p className="section-kicker"><T id="a4ca3e9403fd56a3" /></p><h2 className="section-title mt-4"><T id="5753e2e25a964006" /></h2><p className="mt-6 text-lg leading-8 text-slate-600"><T id="0fae056bf90d6106" /></p><div className="mt-8 space-y-3">{monitored.map((item) => <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3.5 font-medium"><Check className="h-5 w-5 shrink-0 text-orange-600" />{<TV>{item}</TV>}</div>)}</div></div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-3 shadow-2xl"><Image src="/images/kc/energy-monitoring.webp" alt="Real-time power and energy monitoring interface for KC induction heating equipment" width={1024} height={796} className="h-auto w-full rounded-xl" /><div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-2 pt-5 text-white"><span className="font-semibold"><T id="61741ec086a558ca" /></span><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"><T id="e26b5ab821e7e04d" /></span></div></div>
        </div>
      </section>

      <section className="bg-[#091521] py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
          <div className="relative min-h-[540px] overflow-hidden rounded-2xl border border-white/10"><Image src="/images/kc/solutions/open-digital-power-supply.webp" alt="Inside a KC digital induction heating power supply" fill className="object-cover" sizes="(min-width:1024px) 52vw,100vw" /></div>
          <div><p className="section-kicker"><T id="cd8228335ec8a5e6" /></p><h2 className="section-title mt-4 text-white"><T id="85b8cfe82c8c36a4" /></h2><p className="mt-6 text-lg leading-8 text-slate-300"><T id="a9cd3981c20cc275" /></p><div className="mt-8 space-y-4">{["Digital hardware and control logic developed in-house", "Power components, cooling and wiring selected for the real duty cycle", "Built-in protection for electrical, load and cooling conditions", "OEM and ODM support for special machines and production lines"].map((item) => <div key={item} className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" /><span className="leading-7 text-slate-300">{<TV>{item}</TV>}</span></div>)}</div></div>
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.72fr] lg:items-center lg:px-10"><div><p className="section-kicker"><T id="785be1675c969c7f" /></p><h2 className="section-title mt-4"><T id="8c16844652607a67" /></h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600"><T id="48cd847d233d0f8e" /></p></div><div className="space-y-3"><Link href="/contact?product=5th-generation%20digital%20heating%20system&source=%2Ffifth-generation-digital-induction-heating-power-supply" className="flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400"><T id="faf6a8d7fdf05e53" /> <ArrowRight className="h-5 w-5" /></Link><Link href="/products" className="flex min-h-14 items-center justify-center rounded-md border border-slate-300 bg-white px-6 font-semibold hover:bg-slate-50"><T id="95c2c6d2c7665400" /></Link></div></div></section>
    </main>
  );
}
