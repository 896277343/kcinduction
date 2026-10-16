import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
            <div className="inline-flex rounded-full border border-orange-400/35 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[.17em] text-orange-300">NOW IN SERIES PRODUCTION</div>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl">5th-generation digital induction heating power supply.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">A self-developed control platform that lets users see the heating state, track power and energy, adjust the process and review what happened in every production cycle.</p>
            <div className="mt-8 space-y-3">
              {["Fully digital control developed by KC Induction", "Real-time power and energy tracking", "Adaptive matching for changing industrial loads"].map((item) => <div key={item} className="flex items-center gap-3 font-medium text-slate-200"><Check className="h-5 w-5 shrink-0 text-orange-400" />{item}</div>)}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="#monitoring" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 hover:bg-orange-400">See the monitoring system <ArrowRight className="h-5 w-5" /></Link><Link href="/#quote" className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/20 px-7 font-semibold hover:bg-white/5">Discuss your application</Link></div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"><Image src="/images/kc/fifth-generation-system.webp" alt="KC fifth-generation digital induction heating power supply" fill priority className="object-cover" sizes="(min-width:1024px) 52vw,100vw" /></div>
            <div className="absolute bottom-5 left-5 rounded-lg border border-white/15 bg-slate-950/90 px-5 py-4 backdrop-blur"><div className="text-sm font-semibold text-orange-300">KC 5TH GENERATION</div><div className="mt-1 text-xs text-slate-300">Developed · manufactured · tested in-house</div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0b1825]"><div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-4">{[["0.1–1000 kHz","frequency coverage"],["20–1000 kW","power coverage"],["Real time","energy visibility"],["OEM / ODM","system configuration"]].map(([value,label]) => <div key={label} className="bg-[#0b1825] px-6 py-7"><div className="text-2xl font-semibold text-orange-300">{value}</div><div className="mt-1 text-sm text-slate-400">{label}</div></div>)}</div></section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl"><p className="section-kicker">WHAT THE FIFTH GENERATION CHANGES</p><h2 className="section-title mt-4">Digital control you can use on the factory floor.</h2><p className="mt-6 text-lg leading-8 text-slate-600">The improvement is not only a faster control board. Hardware, control software, matching, protection and data recording work together as one production system.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">{changes.map(([Icon,title,copy]) => { const Component = Icon as typeof Gauge; return <article key={title as string} className="bg-white p-7 sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-orange-400"><Component className="h-6 w-6" /></div><h3 className="mt-6 text-2xl font-semibold">{title as string}</h3><p className="mt-3 leading-7 text-slate-600">{copy as string}</p></article>; })}</div>
        </div>
      </section>

      <section id="monitoring" className="bg-white py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10">
          <div><p className="section-kicker">POWER &amp; ENERGY TRACKING</p><h2 className="section-title mt-4">Know what the machine is doing—while it is heating.</h2><p className="mt-6 text-lg leading-8 text-slate-600">The monitoring system gives operators a live view of the induction process and keeps useful production records. This makes adjustment, repeatability and fault finding more practical.</p><div className="mt-8 space-y-3">{monitored.map((item) => <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3.5 font-medium"><Check className="h-5 w-5 shrink-0 text-orange-600" />{item}</div>)}</div></div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-3 shadow-2xl"><Image src="/images/kc/energy-monitoring.webp" alt="Real-time power and energy monitoring interface for KC induction heating equipment" width={1024} height={796} className="h-auto w-full rounded-xl" /><div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-2 pt-5 text-white"><span className="font-semibold">Live operating and energy data</span><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">VISIBLE · ADJUSTABLE · TRACEABLE</span></div></div>
        </div>
      </section>

      <section className="bg-[#091521] py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
          <div className="relative min-h-[540px] overflow-hidden rounded-2xl border border-white/10"><Image src="/images/kc/solutions/open-digital-power-supply.webp" alt="Inside a KC digital induction heating power supply" fill className="object-cover" sizes="(min-width:1024px) 52vw,100vw" /></div>
          <div><p className="section-kicker">SELF-DEVELOPED · SELF-MANUFACTURED</p><h2 className="section-title mt-4 text-white">Good quality should be visible.</h2><p className="mt-6 text-lg leading-8 text-slate-300">We develop the control software and digital hardware ourselves, then combine them with selected power components, cooling and protection. Customers can inspect the internal build—not just the cabinet exterior.</p><div className="mt-8 space-y-4">{["Digital hardware and control logic developed in-house", "Power components, cooling and wiring selected for the real duty cycle", "Built-in protection for electrical, load and cooling conditions", "OEM and ODM support for special machines and production lines"].map((item) => <div key={item} className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" /><span className="leading-7 text-slate-300">{item}</span></div>)}</div></div>
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.72fr] lg:items-center lg:px-10"><div><p className="section-kicker">CONFIGURE IT FOR YOUR PROCESS</p><h2 className="section-title mt-4">Start with the workpiece—not a model number.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Send the material, dimensions, target temperature, heating depth, cycle time and production rate. We will match the frequency, power, coil, cooling, monitoring and automation to the job.</p></div><div className="space-y-3"><a href={`mailto:${siteConfig.contact.email}?subject=5th generation induction heating project`} className="flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400">Send project requirements <ArrowRight className="h-5 w-5" /></a><Link href="/products" className="flex min-h-14 items-center justify-center rounded-md border border-slate-300 bg-white px-6 font-semibold hover:bg-slate-50">View product range</Link></div></div></section>
    </main>
  );
}
