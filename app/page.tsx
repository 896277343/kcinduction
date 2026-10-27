import Image from "next/image";
import Link from "next/link";
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
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-2 text-xs font-semibold tracking-[.18em] text-orange-300"><Sparkles className="h-4 w-4" /> 5TH-GENERATION · FULLY DIGITAL · IN-HOUSE R&amp;D</div>
            <h1 className="text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-[5.25rem]">Heat exactly where<span className="block bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent">your process needs it.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Our self-developed, fully digital induction heating power supplies combine precise process control with real-time power and energy tracking—from precision brazing to engineered 2000 kW production systems.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 transition hover:bg-orange-400">Discuss your heating project <ArrowRight className="h-5 w-5" /></Link>
              <Link href="#products" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-7 font-semibold text-white backdrop-blur transition hover:bg-white/10">Explore our products <ChevronRight className="h-5 w-5" /></Link>
            </div>
            <div className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4">
              {[["0.1–1000", "kHz frequency"], ["Up to 2000", "kW engineered"], ["25+", "years R&D"], ["100+", "complete system"]].map(([value, label]) => <div key={label} className="bg-slate-950/75 px-5 py-4 backdrop-blur"><div className="text-xl font-semibold text-white">{value}</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-400">{label}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="section-kicker">OUR PRODUCT PLATFORM</p><h2 className="section-title mt-4">Digital power supplies for every heating task.</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">Our products span medium, ultrasonic, high and ultra-high frequency digital induction power supplies. We match each unit with the right coil, cooling, controls and automation for the result you need.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {applications.map((item, index) => <article key={item.title} className="group relative min-h-[390px] overflow-hidden rounded-2xl bg-slate-900"><Image src={item.image} alt={`${item.title} induction heating solution`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9"><div className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[.17em] text-orange-300"><span className="text-white/40">0{index + 1}</span>{item.eyebrow}</div><h3 className="text-3xl font-semibold tracking-tight">{item.title}</h3><p className="mt-3 max-w-lg leading-7 text-slate-300">{item.copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="why-induction" className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div><p className="section-kicker">A BETTER WAY TO APPLY HEAT</p><h2 className="section-title mt-4">Replace indirect heat with controlled energy.</h2></div>
            <div><p className="text-lg leading-8 text-slate-600">Traditional flames and furnaces heat the surrounding air, fixtures and large areas around the part. Induction creates heat directly inside conductive material through an alternating magnetic field—without an open flame or direct contact.</p><p className="mt-4 leading-7 text-slate-500">The result is a faster, cleaner and more controllable process that is easier to repeat and integrate into modern production.</p></div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#f3f1ea] p-7 sm:p-9">
              <p className="text-xs font-bold tracking-[.18em] text-slate-500">TRADITIONAL HEATING</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">Heat the environment,<br />then heat the part.</h3>
              <div className="mt-8 space-y-4 text-slate-600">
                {["Energy is lost through hot air, furnace walls and surrounding tooling", "Open flames and hot surfaces increase the operating risk", "Long warm-up and cool-down periods slow process changes", "Results can vary with operator technique and changing conditions"].map((item) => <div key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" /><span className="leading-7">{item}</span></div>)}
              </div>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-[#fff7ed] p-7 sm:p-9">
              <p className="text-xs font-bold tracking-[.18em] text-orange-600">KC DIGITAL INDUCTION</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">Put controlled energy<br />where it creates value.</h3>
              <div className="mt-8 space-y-4 text-slate-700">
                {["Direct, localized heating reduces unnecessary energy demand", "No open flame creates a cleaner, safer work area", "Digital recipes deliver repeatable power, timing and temperature", "Fast response and precise control improve process consistency"].map((item) => <div key={item} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-orange-600" /><span className="leading-7">{item}</span></div>)}
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
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="max-w-3xl"><p className="section-kicker">THE RIGHT ENERGY PROFILE</p><h2 className="section-title mt-4 text-white">Frequency controls depth. Power controls pace.</h2><p className="mt-6 text-lg leading-8 text-slate-400">Your answer may be one band—or a multi-frequency system that changes energy delivery across the cycle.</p></div>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[.035]">{frequencyBands.map((item) => <div key={item.band} className="grid gap-5 border-b border-white/10 p-6 last:border-0 sm:grid-cols-[90px_180px_1fr_1.5fr] sm:items-center sm:p-8"><div className="flex items-center gap-3"><span className={`h-3 w-3 rounded-full ${item.color}`} /><span className="text-2xl font-bold">{item.band}</span></div><div className="font-mono text-orange-300">{item.range}</div><div className="text-slate-300">{item.depth}</div><div className="text-sm leading-6 text-slate-400">{item.best}</div></div>)}</div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-orange-400/25 bg-orange-400/10 p-6"><div><strong className="text-orange-300">Not sure which band fits?</strong><span className="ml-2 text-slate-300">Send the part drawing, material and target cycle time. Our engineers will recommend a starting point.</span></div><Link href="#quote" className="inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-orange-200">Ask an engineer <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section id="digital-control" className="bg-[#091521] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-[.18em] text-cyan-300"><CircuitBoard className="h-4 w-4" /> 5TH-GENERATION DIGITAL CONTROL</div>
              <h2 className="section-title mt-6 text-white">See the energy.<br />Control the process.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">KC Induction focuses exclusively on digital induction heating power supplies. Our fifth-generation platform makes the heating process visible, adjustable and traceable—so operators can understand what the system is doing instead of working blind.</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  ["Real-time power tracking", "Follow output power and energy use throughout every heating cycle."],
                  ["Live operating status", "View load conditions, frequency matching and system performance at a glance."],
                  ["Fast parameter adjustment", "Tune process settings through a clear digital interface as production needs change."],
                  ["Process data recording", "Review collected energy and operating data for optimization and repeatability."],
                ].map(([title, copy]) => <div key={title} className="rounded-xl border border-white/10 bg-white/[.04] p-5"><div className="flex items-center gap-3 font-semibold text-white"><Check className="h-4 w-4 shrink-0 text-cyan-300" />{title}</div><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p></div>)}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"><Image src="/images/kc/fifth-generation-system.webp" alt="KC Induction fifth-generation fully digital induction heating power supply" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div>
              <div className="relative -mt-16 ml-5 mr-5 overflow-hidden rounded-xl border border-white/15 bg-[#07111b] p-3 shadow-2xl sm:ml-20 sm:mr-[-20px]"><Image src="/images/kc/energy-monitoring.webp" alt="Induction heating energy monitoring and recording interface" width={1024} height={796} className="h-auto w-full rounded-lg" /><div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-1 pt-4"><span className="text-sm font-semibold text-white">Power &amp; energy monitoring interface</span><span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">LIVE PROCESS VISIBILITY</span></div></div>
            </div>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-4">
            {["Dual-core digital processor", "Fuzzy PID control", "Power & current dual closed-loop", "Adaptive frequency matching"].map((item) => <div key={item} className="flex min-h-24 items-center gap-3 bg-[#0b1825] px-6 text-sm font-semibold text-slate-200"><span className="h-2 w-2 shrink-0 rounded-full bg-orange-400" />{item}</div>)}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-orange-400/25 bg-orange-400/10 p-6"><div><strong className="text-orange-300">Developed by KC Induction.</strong><span className="ml-2 text-slate-300">Digital hardware, control logic and application engineering built around real industrial heating conditions.</span></div><Link href="/fifth-generation-digital-induction-heating-power-supply" className="inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-orange-200">Explore the 5th generation <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-10">
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl"><Image src="/images/kc/factory.jpg" alt="KC Induction manufacturing and engineering facility" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /><div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/25 shadow-2xl backdrop-blur-md"><div className="bg-slate-950/85 p-5 text-white"><div className="text-2xl font-semibold">Complete line</div><div className="mt-1 text-xs text-slate-300">Power · coil · cooling · automation</div></div><div className="bg-orange-500/90 p-5 text-slate-950"><div className="text-2xl font-semibold">Factory direct</div><div className="mt-1 text-xs">Engineering through commissioning</div></div></div></div>
          <div><p className="section-kicker">ENGINEERED AS A SYSTEM</p><h2 className="section-title mt-4">More than a power supply.</h2><p className="mt-6 text-lg leading-8 text-slate-600">A reliable heating process depends on how every component works together. We develop the full package around your production reality.</p>
            <div className="mt-9 grid gap-6 sm:grid-cols-2">{[[CircuitBoard, "5th-gen digital control", "Self-developed control, live status and energy tracking."], [Target, "Application engineering", "Frequency, power and coil matched to the workpiece."], [Layers3, "Custom induction coils", "Field geometry designed for even, repeatable heating."], [Factory, "Line integration", "Cooling, handling, robotics, conveyors and PLC control."], [ShieldCheck, "Built-in protection", "Hardware and software safeguards for demanding production."], [Gauge, "Process feedback", "Temperature and energy data for tighter process control."]].map(([Icon, title, copy]) => { const Component = Icon as typeof Zap; return <div key={title as string} className="flex gap-4"><div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600"><Component className="h-5 w-5" /></div><div><h3 className="font-semibold">{title as string}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{copy as string}</p></div></div>; })}</div>
          </div>
        </div>
      </section>

      <section id="industries" className="border-y border-white/10 bg-[#0b1825] py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="section-kicker">BUILT AROUND YOUR INDUSTRY</p><h2 className="section-title mt-4 text-white">Where metal moves, connects or performs—heat matters.</h2><p className="mt-6 leading-7 text-slate-400">Different industries use different language. The engineering questions remain the same: what material, what geometry, what temperature, what depth, and how fast?</p></div><div className="grid gap-3 sm:grid-cols-2">{industries.map((industry, index) => <div key={industry} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[.035] px-5 py-4"><span className="font-medium text-slate-200">{industry}</span><span className="font-mono text-xs text-slate-600">{String(index + 1).padStart(2, "0")}</span></div>)}</div></div></div></section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="text-center"><p className="section-kicker">FROM QUESTION TO PRODUCTION</p><h2 className="section-title mx-auto mt-4 max-w-3xl">A practical path to the right heating process.</h2></div><div className="mt-14 grid gap-4 md:grid-cols-4">{[["01", "Share the part", "Drawing, material, dimensions, temperature and cycle target."], ["02", "Process review", "We assess energy depth, power demand, coil access and handling."], ["03", "Solution proposal", "Receive a matched system concept and technical quotation."], ["04", "Test & deliver", "Sample validation, manufacturing, training and support."]].map(([num, title, copy]) => <div key={num} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm"><div className="font-mono text-sm text-orange-600">{num}</div><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p></div>)}</div></div></section>

      <section id="quote" className="relative py-24"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(249,115,22,.18),transparent_32%)]" /><div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.85fr] lg:items-center lg:px-10"><div><div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-slate-950"><Flame className="h-7 w-7" /></div><h2 className="section-title mt-7 max-w-3xl text-white">Tell us what you need to heat.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Even if you do not know the frequency or power, our application engineers can start with your part and production goal.</p><div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">{["Part material and dimensions", "Target temperature / heat depth", "Required cycle time", "Drawing, photo or sample"].map((item) => <div key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-orange-400" />{item}</div>)}</div></div><div className="rounded-2xl border border-white/10 bg-white/[.055] p-7 shadow-2xl backdrop-blur sm:p-9"><p className="text-sm font-semibold tracking-wider text-orange-300">GET AN ENGINEERING RECOMMENDATION</p><h3 className="mt-3 text-2xl font-semibold">Start the conversation</h3><p className="mt-3 leading-7 text-slate-400">Send your project details by email or speak with our team directly.</p><div className="mt-7 space-y-3"><a href={`mailto:${siteConfig.contact.email}?subject=Induction heating solution inquiry`} className="flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400">Email project details <ArrowRight className="h-5 w-5" /></a><Link href="/contact" className="flex min-h-14 items-center justify-center rounded-md border border-white/15 px-6 font-semibold text-white hover:bg-white/5">Open detailed inquiry form</Link></div><div className="mt-7 border-t border-white/10 pt-6 text-sm text-slate-400"><span className="text-slate-500">Direct:</span> {siteConfig.contact.phone}<br /><span className="text-slate-500">Email:</span> {siteConfig.contact.email}</div></div></div></section>
    </div>
  );
}
