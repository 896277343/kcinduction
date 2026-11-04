
import { T, TV } from "@/components/i18n/text";
import Image from "next/image";
import Link from "@/components/i18n/link";
import Script from "next/script";
import type { Metadata } from "next";
import { ArrowRight, Check, ChevronRight, CircuitBoard, Factory, Flame, Gauge, Layers3, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Industrial Induction Heating Equipment Manufacturer | Up to 2000 kW",
  description: "Engineered induction heating solutions for brazing, hardening, forging, melting and production-line integration. Frequency and power matched to your part and process.",
  alternates: { canonical: siteConfig.site_domain },
};

const applications = [
  { title: "Heat Treatment", eyebrow: "HARDEN · ANNEAL · TEMPER", copy: "Control case depth, hardness and repeatability for shafts, gears, bearings, rails and complex metal parts.", image: "/images/kc/home/heat-treatment.webp" },
  { title: "Brazing & Joining", eyebrow: "CLEAN · LOCALIZED · REPEATABLE", copy: "Deliver fast, precise heat to carbide tools, copper joints, HVAC assemblies and electrical components.", image: "/images/kc/home/brazing-joining.webp" },
  { title: "Forging & Forming", eyebrow: "THROUGH-HEAT · HIGH THROUGHPUT", copy: "Bring billets, bars and fasteners to forming temperature with uniform, controllable heating.", image: "/images/kc/home/forging-forming.webp" },
  { title: "Custom Process Heating", eyebrow: "MELT · PREHEAT · SHRINK-FIT", copy: "From melting and coating removal to wire, pipe and continuous production lines—if it needs heat, we can engineer it.", image: "/images/kc/home/custom-process-heating.webp" },
];

const frequencyBands = [
  { band: "MF", range: "0.1–10 kHz", depth: "Deep penetration", best: "Large parts, melting, forging, through-heating", color: "bg-sky-500" },
  { band: "UF", range: "10–50 kHz", depth: "Balanced depth", best: "General heat treatment, bars, shafts, pipes", color: "bg-cyan-400" },
  { band: "HF", range: "50–200 kHz", depth: "Shallow / localized", best: "Surface hardening, brazing, smaller parts", color: "bg-amber-400" },
  { band: "UHF", range: "200–1000 kHz", depth: "Very fine surface", best: "Precision parts, fine wire, micro-brazing", color: "bg-orange-500" },
];

const industries = ["Automotive & EV", "Aerospace", "Rail & Transportation", "Oil & Gas", "Steel & Foundry", "Tool & Hardware", "Electrical & Electronics", "HVAC & Refrigeration", "Renewable Energy", "Medical Devices"];

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#07111b] text-white">
      <Script id="organization-schema" type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: siteConfig.brand.legalName, url: siteConfig.site_domain, email: siteConfig.contact.email, telephone: siteConfig.contact.phone, description: siteConfig.site_description })}</Script>

      <section className="relative isolate min-h-[760px] border-b border-white/10">
        <Image src="/images/kc/home/fifth-generation-production-banner2.webp" alt="KC fifth-generation digital induction heating machines operating in production" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,.96)_0%,rgba(3,10,18,.83)_45%,rgba(3,10,18,.38)_76%,rgba(3,10,18,.25)_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-2 text-xs font-semibold tracking-[.18em] text-orange-300"><Sparkles className="h-4 w-4" /> <T id="31f845b35f9a495e" /></div>
            <h1 className="text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-[5.25rem]"><T id="90e8c9272a1b17ea" /><span className="block bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent"><T id="f206a5b0230f3f6b" /></span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"><T id="523bc8039e9a3f2a" /></p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 transition hover:bg-orange-400"><T id="c4886e132c451509" /> <ArrowRight className="h-5 w-5" /></Link>
              <Link href="#products" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-7 font-semibold text-white backdrop-blur transition hover:bg-white/10"><T id="c0b4eb539360b087" /> <ChevronRight className="h-5 w-5" /></Link>
            </div>
            <div className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4">
              {[["0.1–1000", "kHz frequency"], ["Up to 2000", "kW engineered"], ["25+", "years R&D"], ["100+", "complete system"]].map(([value, label]) => <div key={label} className="bg-slate-950/75 px-5 py-4 backdrop-blur"><div className="text-xl font-semibold text-white">{<TV>{value}</TV>}</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-400">{<TV>{label}</TV>}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="section-kicker"><T id="e25199b067c0bb49" /></p><h2 className="section-title mt-4"><T id="e7486eaaddf2b8ab" /></h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end"><T id="f16a08726774acf6" /></p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {applications.map((item, index) => <article key={item.title} className="group relative min-h-[390px] overflow-hidden rounded-2xl bg-slate-900"><Image src={item.image} alt={`${item.title} induction heating solution`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9"><div className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[.17em] text-orange-300"><span className="text-white/40">0{index + 1}</span>{<TV>{item.eyebrow}</TV>}</div><h3 className="text-3xl font-semibold tracking-tight">{<TV>{item.title}</TV>}</h3><p className="mt-3 max-w-lg leading-7 text-slate-300">{<TV>{item.copy}</TV>}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="why-induction" className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div><p className="section-kicker"><T id="3481d79fb1aa25f2" /></p><h2 className="section-title mt-4"><T id="2d55b2b0010bc700" /></h2></div>
            <div><p className="text-lg leading-8 text-slate-600"><T id="1d93c3d485277530" /></p><p className="mt-4 leading-7 text-slate-500"><T id="d32712de4ceb49c3" /></p></div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#f3f1ea] p-7 sm:p-9">
              <p className="text-xs font-bold tracking-[.18em] text-slate-500"><T id="db2ad74a06246f5f" /></p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight"><T id="3c5c4a03493b2210" /><br /><T id="b38abf082f5c72b3" /></h3>
              <div className="mt-8 space-y-4 text-slate-600">
                {["Energy is lost through hot air, furnace walls and surrounding tooling", "Open flames and hot surfaces increase the operating risk", "Long warm-up and cool-down periods slow process changes", "Results can vary with operator technique and changing conditions"].map((item) => <div key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" /><span className="leading-7">{<TV>{item}</TV>}</span></div>)}
              </div>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-[#fff7ed] p-7 sm:p-9">
              <p className="text-xs font-bold tracking-[.18em] text-orange-600"><T id="3de67674f700f55b" /></p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight"><T id="6ec1296e3aa2c517" /><br /><T id="cc9a74f4dc931bda" /></h3>
              <div className="mt-8 space-y-4 text-slate-700">
                {["Direct, localized heating reduces unnecessary energy demand", "No open flame creates a cleaner, safer work area", "Digital recipes deliver repeatable power, timing and temperature", "Fast response and precise control improve process consistency"].map((item) => <div key={item} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-orange-600" /><span className="leading-7">{<TV>{item}</TV>}</span></div>)}
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Zap, "Use less energy", "Heat the workpiece directly and only for the time the process requires."],
              [ShieldCheck, "Improve safety", "Remove open flames and reduce unnecessary hot zones around operators."],
              [Target, "Increase precision", "Control where heat goes, how quickly it rises and when the cycle stops."],
              [Layers3, "Repeat every cycle", "Store digital parameters and reproduce the same heating profile."],
            ].map(([Icon, title, copy]) => { const Component = Icon as typeof Zap; return <div key={title as string} className="rounded-xl border border-slate-200 p-6"><div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-orange-400"><Component className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{copy as string}</p></div>; })}
          </div>
        </div>
      </section>

      <section id="range" className="relative py-24">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_70%_20%,#f97316_0,transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="max-w-3xl"><p className="section-kicker"><T id="724cef2692f33805" /></p><h2 className="section-title mt-4 text-white"><T id="a6083ca95c368727" /></h2><p className="mt-6 text-lg leading-8 text-slate-400"><T id="3d95ca07c57a869e" /></p></div>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[.035]">{frequencyBands.map((item) => <div key={item.band} className="grid gap-5 border-b border-white/10 p-6 last:border-0 sm:grid-cols-[90px_180px_1fr_1.5fr] sm:items-center sm:p-8"><div className="flex items-center gap-3"><span className={`h-3 w-3 rounded-full ${item.color}`} /><span className="text-2xl font-bold">{<TV>{item.band}</TV>}</span></div><div className="font-mono text-orange-300">{<TV>{item.range}</TV>}</div><div className="text-slate-300">{<TV>{item.depth}</TV>}</div><div className="text-sm leading-6 text-slate-400">{<TV>{item.best}</TV>}</div></div>)}</div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-orange-400/25 bg-orange-400/10 p-6"><div><strong className="text-orange-300"><T id="070995880b71e6b0" /></strong><span className="ml-2 text-slate-300"><T id="3bc54cfb77f3de21" /></span></div><Link href="#quote" className="inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-orange-200"><T id="ab654bbc17f672db" /> <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section id="digital-control" className="bg-[#091521] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-[.18em] text-cyan-300"><CircuitBoard className="h-4 w-4" /> <T id="b5805922f0d92ecb" /></div>
              <h2 className="section-title mt-6 text-white"><T id="adb9c296407cf9db" /><br /><T id="a48135c01888cf40" /></h2>
              <p className="mt-6 text-lg leading-8 text-slate-300"><T id="c13fe5f9a1d46a8d" /></p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  ["Real-time power tracking", "Follow output power and energy use throughout every heating cycle."],
                  ["Live operating status", "View load conditions, frequency matching and system performance at a glance."],
                  ["Fast parameter adjustment", "Tune process settings through a clear digital interface as production needs change."],
                  ["Process data recording", "Review collected energy and operating data for optimization and repeatability."],
                ].map(([title, copy]) => <div key={title} className="rounded-xl border border-white/10 bg-white/[.04] p-5"><div className="flex items-center gap-3 font-semibold text-white"><Check className="h-4 w-4 shrink-0 text-cyan-300" />{<TV>{title}</TV>}</div><p className="mt-3 text-sm leading-6 text-slate-400">{<TV>{copy}</TV>}</p></div>)}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"><Image src="/images/kc/fifth-generation-system.webp" alt="KC Induction fifth-generation fully digital induction heating power supply" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div>
              <div className="relative -mt-16 ml-5 mr-5 overflow-hidden rounded-xl border border-white/15 bg-[#07111b] p-3 shadow-2xl sm:ml-20 sm:mr-[-20px]"><Image src="/images/kc/energy-monitoring.webp" alt="Induction heating energy monitoring and recording interface" width={1024} height={796} className="h-auto w-full rounded-lg" /><div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-4"><span className="text-sm font-semibold text-white"><T id="d2c4ec925c6dedac" /></span><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"><T id="dca9e6c707fad973" /></span></div></div>
            </div>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-4">
            {["Dual-core digital processor", "Fuzzy PID control", "Power & current dual closed-loop", "Adaptive frequency matching"].map((item) => <div key={item} className="flex min-h-24 items-center gap-3 bg-[#0b1825] px-6 text-sm font-semibold text-slate-200"><span className="h-2 w-2 shrink-0 rounded-full bg-orange-400" />{<TV>{item}</TV>}</div>)}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-orange-400/25 bg-orange-400/10 p-6"><div><strong className="text-orange-300"><T id="bee0d7abcfdf0a34" /></strong><span className="ml-2 text-slate-300"><T id="6a7f6e87b81945b9" /></span></div><Link href="/fifth-generation-digital-induction-heating-power-supply" className="inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-orange-200"><T id="f13c25a2dd38a604" /> <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f3f1ea] py-20 text-slate-950 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="section-kicker"><T id="735c96601dcad445" /></p>
              <h2 className="section-title mt-4"><T id="61baac1b5d90ad88" /></h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600"><T id="d8b52520ab93ec6a" /></p>
            </div>
            <Link href="/why-us" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-md bg-slate-950 px-6 font-semibold text-white transition hover:bg-slate-800 lg:self-auto"><T id="eb4cd0bd96d2e68b" /> <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <figure className="relative h-[420px] overflow-hidden rounded-2xl bg-slate-900 lg:col-span-5 lg:row-span-2 lg:h-auto">
              <Image src="/images/kc/home/factory-proof/open-cabinet.webp" alt="Open KC induction heating cabinet showing the internal power and control assemblies" fill className="object-cover object-center" sizes="(min-width:1024px) 42vw,100vw" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-5 pb-5 pt-16 text-sm font-semibold text-white"><T id="1194a60c774b59b0" /></figcaption>
            </figure>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              {[
                { image: "power-components.webp", alt: "KC induction heating cabinet power components and connections", label: "Power components" },
                { image: "electrical-layout.webp", alt: "KC induction heating cabinet electrical layout and wiring", label: "Electrical layout" },
                { image: "control-board.webp", alt: "KC-developed induction heating control board inside the cabinet", label: "KC control board" },
              ].map((detail, index) => <figure key={detail.image} className="relative h-[210px] overflow-hidden rounded-2xl bg-slate-900 sm:h-[240px] lg:h-[230px]"><Image src={`/images/kc/home/factory-proof/${detail.image}`} alt={detail.alt} fill className="object-cover object-center" sizes="(min-width:1024px) 19vw,(min-width:640px) 33vw,100vw" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-4 pb-4 pt-12 text-xs font-semibold text-white">0{index + 2} · {<TV>{detail.label}</TV>}</figcaption></figure>)}
            </div>
            <figure className="relative h-[280px] overflow-hidden rounded-2xl bg-slate-900 sm:h-[390px] lg:col-span-7 lg:h-[360px]">
              <Image src="/images/kc/home/factory-proof/finished-system.webp" alt="Finished KC fifth-generation induction heating cabinet on the factory floor" fill className="object-cover object-center" sizes="(min-width:1024px) 58vw,100vw" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-5 pb-5 pt-16 text-sm font-semibold text-white"><T id="58f2cd2dd7eb9cd3" /></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-10">
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl"><Image src="/images/kc/factory.jpg" alt="KC Induction manufacturing and engineering facility" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /><div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/25 shadow-2xl backdrop-blur-md"><div className="bg-slate-950/85 p-5 text-white"><div className="text-2xl font-semibold"><T id="fed74d8468c4bd63" /></div><div className="mt-1 text-xs text-slate-300"><T id="ad4ef568c26df456" /></div></div><div className="bg-orange-500/90 p-5 text-slate-950"><div className="text-2xl font-semibold"><T id="f59c006ecd514601" /></div><div className="mt-1 text-xs"><T id="6c79d0a5a310d301" /></div></div></div></div>
          <div><p className="section-kicker"><T id="f21fae3a046cbc8c" /></p><h2 className="section-title mt-4"><T id="df7560909f27c63d" /></h2><p className="mt-6 text-lg leading-8 text-slate-600"><T id="a1aadad5cc17693a" /></p>
            <div className="mt-9 grid gap-6 sm:grid-cols-2">{[[CircuitBoard, "5th-gen digital control", "Self-developed control, live status and energy tracking."], [Target, "Application engineering", "Frequency, power and coil matched to the workpiece."], [Layers3, "Custom induction coils", "Field geometry designed for even, repeatable heating."], [Factory, "Line integration", "Cooling, handling, robotics, conveyors and PLC control."], [ShieldCheck, "Built-in protection", "Hardware and software safeguards for demanding production."], [Gauge, "Process feedback", "Temperature and energy data for tighter process control."]].map(([Icon, title, copy]) => { const Component = Icon as typeof Zap; return <div key={title as string} className="flex gap-4"><div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600"><Component className="h-5 w-5" /></div><div><h3 className="font-semibold">{title as string}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{copy as string}</p></div></div>; })}</div>
          </div>
        </div>
      </section>

      <section id="industries" className="border-y border-white/10 bg-[#0b1825] py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="section-kicker"><T id="649495a5b1ea1f24" /></p><h2 className="section-title mt-4 text-white"><T id="06b4866b8149ba50" /></h2><p className="mt-6 leading-7 text-slate-400"><T id="b9310c9338a24cce" /></p></div><div className="grid gap-3 sm:grid-cols-2">{industries.map((industry, index) => <div key={industry} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[.035] px-5 py-4"><span className="font-medium text-slate-200">{<TV>{industry}</TV>}</span><span className="font-mono text-xs text-slate-600">{String(index + 1).padStart(2, "0")}</span></div>)}</div></div></div></section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="text-center"><p className="section-kicker"><T id="5333c9e99612b2e6" /></p><h2 className="section-title mx-auto mt-4 max-w-3xl"><T id="beb112bf52e4c67d" /></h2></div><div className="mt-14 grid gap-4 md:grid-cols-4">{[["01", "Share the part", "Drawing, material, dimensions, temperature and cycle target."], ["02", "Process review", "We assess energy depth, power demand, coil access and handling."], ["03", "Solution proposal", "Receive a matched system concept and technical quotation."], ["04", "Test & deliver", "Sample validation, manufacturing, training and support."]].map(([num, title, copy]) => <div key={num} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm"><div className="font-mono text-sm text-orange-600">{<TV>{num}</TV>}</div><h3 className="mt-8 text-xl font-semibold">{<TV>{title}</TV>}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{<TV>{copy}</TV>}</p></div>)}</div></div></section>

      <section id="quote" className="relative py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(249,115,22,.18),transparent_32%)]" /><div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.85fr] lg:items-center lg:px-10"><div><div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-slate-950"><Flame className="h-7 w-7" /></div><h2 className="section-title mt-7 max-w-3xl text-white"><T id="edf860cdf1847e82" /></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400"><T id="dabf2356af5e4d30" /></p><div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">{["Part material and dimensions", "Target temperature / heat depth", "Required cycle time", "Drawing, photo or sample"].map((item) => <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-orange-400" />{<TV>{item}</TV>}</div>)}</div></div><div className="rounded-2xl border border-white/10 bg-white/[.055] p-7 shadow-2xl backdrop-blur sm:p-9"><p className="text-sm font-semibold tracking-wider text-orange-300"><T id="72c2cf68e903af16" /></p><h3 className="mt-3 text-2xl font-semibold"><T id="e5e09a778387b945" /></h3><p className="mt-3 leading-7 text-slate-400"><T id="a4d4eb9ee31bcf51" /></p><div className="mt-7 space-y-3"><a href={`mailto:${siteConfig.contact.email}?subject=Induction heating solution inquiry`} className="flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400"><T id="343332c3b9638328" /> <ArrowRight className="h-5 w-5" /></a><Link href="/contact" className="flex min-h-14 items-center justify-center rounded-md border border-white/15 px-6 font-semibold text-white hover:bg-white/5"><T id="850bcb46b06ca2d5" /></Link></div><div className="mt-7 border-t border-white/10 pt-6 text-sm text-slate-400"><span className="text-slate-500"><T id="dbd2fd893f97dd4c" /></span> {<TV>{siteConfig.contact.phone}</TV>}<br /><span className="text-slate-500"><T id="17507dcf845793fa" /></span> {<TV>{siteConfig.contact.email}</TV>}</div></div></div></section>
    </div>
  );
}
