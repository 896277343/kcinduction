import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { ArrowRight, Box, Check, CircuitBoard, Gauge, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Digital Induction Heating Power Supplies | 0.1–1000 kHz",
  description: "Explore KC Induction digital power supplies by frequency, power and cabinet size—from portable low-power units to single-, double- and three-door industrial systems.",
  keywords: ["induction heating power supply", "portable induction heater", "medium frequency induction heater", "high frequency induction heater", "digital induction heating machine"],
  alternates: { canonical: `${siteConfig.site_domain}/products` },
};

const frequencyProducts = [
  { band: "MF", range: "0.1–10 kHz", power: "30–1000+ kW", title: "Medium Frequency", copy: "Deep penetration for large sections, through-heating, forging, melting and heavy heat-treatment processes.", image: "/images/kc/products/mf-power-supply.webp", accent: "from-sky-500 to-cyan-300" },
  { band: "UF", range: "10–50 kHz", power: "30–1000 kW", title: "Ultrasonic Frequency", copy: "Balanced heating depth and response for shafts, bars, pipes and general industrial heat treatment.", image: "/images/kc/products/uf-power-supply.webp", accent: "from-cyan-400 to-teal-300" },
  { band: "HF", range: "50–200 kHz", power: "20–500 kW", title: "High Frequency", copy: "Fast localized heating for surface hardening, brazing, welding and small-to-medium components.", image: "/images/kc/products/hf-power-supply.webp", accent: "from-amber-400 to-orange-300" },
  { band: "UHF", range: "200–1000 kHz", power: "20–200 kW", title: "Ultra-high Frequency", copy: "Fine, shallow energy control for precision parts, fine wire, micro-brazing and sensitive local heating.", image: "/images/kc/products/uhf-power-supply.webp", accent: "from-orange-500 to-red-400" },
];

const cabinetLevels = [
  { label: "Portable", power: "Low-power / point-of-use", doors: "Compact enclosure", use: "Service work, brazing, preheating and flexible workstation use", image: "/images/kc/products/portable-power-supply.webp" },
  { label: "Single-door", power: "Typically 30–120 kW", doors: "One cabinet bay", use: "Standard standalone cells and medium-duty production", image: "/images/kc/products/single-door-lineup.webp" },
  { label: "Double-door", power: "Typically 150–300 kW", doors: "Two cabinet bays", use: "Higher-output heat treatment, forging and line integration", image: "/images/kc/products/cabinet-lineup.webp" },
  { label: "Three-door", power: "Typically 400–1000+ kW", doors: "Multi-bay platform", use: "Heavy-duty continuous lines, large parts and high-throughput processes", image: "/images/kc/products/factory-testing.webp" },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#07111b] text-white">
      <Script id="products-schema" type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", name: "KC Digital Induction Heating Power Supplies", url: `${siteConfig.site_domain}/products`, description: "Digital induction heating power supplies across medium, ultrasonic, high and ultra-high frequency ranges." })}</Script>

      <section className="relative isolate overflow-hidden border-b border-white/10 py-24 sm:py-32">
        <Image src="/images/kc/products/production-floor.webp" alt="KC Induction digital power supply production floor" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,18,.96)_0%,rgba(3,10,18,.83)_45%,rgba(3,10,18,.38)_76%,rgba(3,10,18,.25)_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/35 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[.18em] text-orange-300"><Sparkles className="h-4 w-4" /> ONE DIGITAL PLATFORM · EVERY FREQUENCY · EVERY SCALE</div>
            <h1 className="mt-7 text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-[5.2rem]">The right power supply starts with the heating task.</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Choose by frequency, power and physical scale—from a portable unit beside the workpiece to a three-door industrial power system integrated into a continuous production line.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="#frequency" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 hover:bg-orange-400">Explore the range <ArrowRight className="h-5 w-5" /></Link><Link href="/#quote" className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/20 bg-white/5 px-7 font-semibold backdrop-blur hover:bg-white/10">Ask us to size your system</Link></div>
          </div>
        </div>
      </section>

      <section id="frequency" className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="section-kicker">SELECT BY FREQUENCY</p><h2 className="section-title mt-4">Frequency shapes where the heat goes.</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">Lower frequency drives energy deeper into larger workpieces. Higher frequency concentrates heat closer to the surface. KC covers the full spectrum, including multi-frequency configurations when one process needs more than one energy profile.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">{frequencyProducts.map((product) => <article key={product.band} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="grid sm:grid-cols-[1.05fr_.95fr]"><div className="p-7 sm:p-8"><div className={`inline-flex rounded-full bg-gradient-to-r ${product.accent} px-3 py-1 text-xs font-bold text-slate-950`}>{product.band} · {product.range}</div><h3 className="mt-5 text-2xl font-semibold">{product.title}</h3><div className="mt-2 font-mono text-sm text-orange-600">{product.power}</div><p className="mt-5 text-sm leading-6 text-slate-600">{product.copy}</p></div><div className="relative min-h-[250px] bg-slate-100"><Image src={product.image} alt={`${product.title} digital induction heating power supply`} fill className="object-contain p-4" sizes="(min-width:768px) 25vw,100vw" /></div></div></article>)}</div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="section-kicker">AVAILABLE FORM FACTORS</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">From portable units to production-line power.</h2></div><p className="max-w-2xl text-sm leading-6 text-slate-400">The enclosure scales with power and project configuration. We select the physical format after matching the electrical system to the workpiece and process.</p></div>
          <div className="mt-9 grid overflow-hidden rounded-xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">{cabinetLevels.map((item, index) => <article key={item.label} className="border-b border-white/10 bg-white/[.035] p-6 last:border-0 sm:border-r lg:border-b-0"><div className="flex items-center justify-between"><span className="font-mono text-xs text-orange-300">0{index + 1}</span><span className="text-xs text-slate-500">{item.doors}</span></div><h3 className="mt-5 text-xl font-semibold">{item.label}</h3><p className="mt-2 text-sm font-semibold text-orange-300">{item.power}</p><p className="mt-3 text-xs leading-5 text-slate-500">{item.use}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end"><div><p className="section-kicker">TECHNICAL ADVANTAGES</p><h2 className="section-title mt-4">Designed as a digital power platform.</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">The brochure's four core advantages define how every KC power supply is engineered: digital intelligence, precise control, active protection and environmental sealing.</p></div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-slate-950 p-7 text-white sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-slate-950"><CircuitBoard className="h-6 w-6" /></div><p className="mt-7 font-mono text-xs tracking-[.16em] text-orange-300">01 · DIGITAL INTELLIGENT CONTROL</p><h3 className="mt-3 text-3xl font-semibold">DSP control replaces analog drift.</h3><p className="mt-5 leading-7 text-slate-300">All control, calculation, parameter processing and frequency tracking are handled digitally. The system keeps the IGBT operating in the intended soft-switching state, reducing switching loss, voltage overshoot, current overshoot and localized temperature rise.</p><div className="mt-6 flex flex-wrap gap-2">{["DSP processor", "Soft switching", "Digital parameter processing", "Frequency tracking"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 text-xs text-slate-300">{item}</span>)}</div></article>

            <article className="rounded-2xl border border-slate-200 bg-[#f3f1ea] p-7 sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600"><Gauge className="h-6 w-6" /></div><p className="mt-7 font-mono text-xs tracking-[.16em] text-orange-600">02 · ULTRA-HIGH PRECISION CONTROL</p><h3 className="mt-3 text-3xl font-semibold">Stable output across changing loads.</h3><p className="mt-5 leading-7 text-slate-600">High-speed digital algorithms calculate power and frequency in real time. Combined with load-matching tests, the controller tracks without loss of lock or drift and keeps the equipment operating within its optimum power-factor range.</p><div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white p-4"><div className="text-2xl font-semibold text-orange-600">0.1%</div><div className="mt-1 text-xs text-slate-500">brochure control accuracy</div></div><div className="rounded-xl bg-white p-4"><div className="text-2xl font-semibold text-orange-600">Wide</div><div className="mt-1 text-xs text-slate-500">load-matching range</div></div></div></article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600"><ShieldCheck className="h-6 w-6" /></div><p className="mt-7 font-mono text-xs tracking-[.16em] text-orange-600">03 · INTELLIGENT PROTECTION</p><h3 className="mt-3 text-3xl font-semibold">Detect, display and help locate faults.</h3><p className="mt-5 leading-7 text-slate-600">Protection circuits monitor unstable cooling-water pressure, excessive temperature, phase loss, overvoltage, overcurrent, frequency limits and IGBT conditions. When an abnormal condition appears, the system stops output and provides fault information to help operators identify the source.</p><ul className="mt-6 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">{["Cooling-water pressure", "Over-temperature", "Phase-loss protection", "Overvoltage / overcurrent", "Frequency-limit alarms", "IGBT fault monitoring"].map((item) => <li key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-600" />{item}</li>)}</ul></article>

            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="relative h-64"><Image src="/images/kc/products/open-cabinet-assembly.webp" alt="KC sealed induction heating power supply cabinet interior" fill className="object-cover" sizes="(min-width:768px) 50vw,100vw" /></div><div className="p-7 sm:p-9"><div className="flex items-center gap-3"><Box className="h-6 w-6 text-orange-600" /><p className="font-mono text-xs tracking-[.16em] text-orange-600">04 · SEALED PROTECTION</p></div><h3 className="mt-4 text-3xl font-semibold">IP54-level cabinet protection.</h3><p className="mt-4 leading-7 text-slate-600">Sealing strips and formed cabinet edges help prevent dust, water vapor, soot and oil mist from entering. Keeping the internal environment clean supports stable electronic performance in demanding production areas.</p></div></article>
          </div>

          <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-4">{[["DSP", "digital control"], ["0.1%", "control accuracy"], ["Optical fiber", "signal transmission"], ["IP54", "sealed protection"]].map(([value, label]) => <div key={value} className="bg-white p-6 text-center"><div className="text-xl font-semibold text-slate-950">{value}</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{label}</div></div>)}</div>
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div><p className="section-kicker">DEVELOPED ONE GENERATION AT A TIME</p><h2 className="section-title mt-4">Independent R&amp;D you can see.</h2></div>
            <div><p className="text-lg leading-8 text-slate-600">Our digital platform was not purchased as a finished solution. The control boards, power architecture and software have been refined through successive generations of real industrial equipment.</p><p className="mt-4 leading-7 text-slate-500">We can open the cabinet and show customers how it is built. Good quality should be visible—not hidden behind a closed door.</p></div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="relative aspect-[4/3] bg-slate-100"><Image src="/images/kc/products/first-generation-mainboard-left-90.webp" alt="First-generation KC induction heating treatment machine mainboard" fill className="object-contain" sizes="(min-width:1024px) 33vw,100vw" /></div><div className="p-7"><div className="font-mono text-xs tracking-[.16em] text-slate-400">GENERATION 01</div><h3 className="mt-3 text-2xl font-semibold">The first mainboard</h3><p className="mt-3 text-sm leading-6 text-slate-600">The starting point of our independently developed induction-heating control platform: practical, application-led electronics built from the fundamentals.</p></div></article>

            <article className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm"><div className="relative aspect-[4/3]"><Image src="/images/kc/products/fourth-generation-dsp-mainboard.webp" alt="Fourth-generation KC DSP induction heating treatment machine mainboard" fill className="object-cover" sizes="(min-width:1024px) 33vw,100vw" /></div><div className="p-7"><div className="font-mono text-xs tracking-[.16em] text-orange-600">GENERATION 04 · DSP</div><h3 className="mt-3 text-2xl font-semibold">Digital control matures</h3><p className="mt-3 text-sm leading-6 text-slate-600">DSP processing brought faster calculation, more precise power and frequency control, wider load matching and more capable protection logic.</p></div></article>

            <article className="overflow-hidden rounded-2xl bg-slate-950 text-white shadow-sm"><div className="relative aspect-[4/3]"><Image src="/images/kc/energy-monitoring.webp" alt="Fifth-generation KC digital induction heating energy monitoring software" fill className="object-cover" sizes="(min-width:1024px) 33vw,100vw" /></div><div className="p-7"><div className="font-mono text-xs tracking-[.16em] text-orange-300">GENERATION 05 · CONNECTED</div><h3 className="mt-3 text-2xl font-semibold">Hardware meets software</h3><p className="mt-3 text-sm leading-6 text-slate-300">The latest platform adds visible operating status, power and energy tracking, process data and easier adjustment for modern production management.</p></div></article>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
            <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-2xl bg-slate-950 p-3"><div className="relative min-h-[360px] overflow-hidden rounded-xl"><Image src="/images/kc/products/control-cabinet-interior.webp" alt="KC digital induction power supply control cabinet interior" fill className="object-cover" sizes="30vw" /></div><div className="relative min-h-[360px] overflow-hidden rounded-xl"><Image src="/images/kc/products/power-electronics-interior.webp" alt="KC induction heating power electronics interior" fill className="object-cover" sizes="30vw" /></div></div>
            <div className="rounded-2xl bg-orange-500 p-8 sm:p-10"><p className="text-xs font-bold tracking-[.18em] text-slate-900/65">THE KC DEVELOPMENT MODEL</p><h3 className="mt-5 text-3xl font-semibold leading-tight">Strong technology needs a strong supply chain.</h3><p className="mt-5 leading-7 text-slate-900/80">We combine independently developed controls with carefully selected power components and disciplined in-house assembly. Hardware and software are engineered together, then validated as a complete heating system.</p><div className="mt-8 space-y-3">{["Self-developed control boards", "Self-developed operating software", "Selected industrial-grade components", "In-house cabinet assembly and wiring", "Complete-system testing before delivery"].map((item) => <div key={item} className="flex items-center gap-3 font-medium"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-orange-300"><Check className="h-3.5 w-3.5" /></span>{item}</div>)}</div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1825] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="section-kicker">FIFTH-GENERATION DIGITAL PLATFORM</p><h2 className="section-title mt-4 text-white">The intelligence is built into every cabinet.</h2><p className="mt-6 leading-7 text-slate-400">Across enclosure sizes, the same design philosophy carries through: stable digital control, visible process data, wide load matching and fast protection.</p><Link href="/fifth-generation-digital-induction-heating-power-supply" className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-orange-200">Read about the fifth generation <ArrowRight className="h-5 w-5" /></Link></div>
            <div className="grid gap-4 sm:grid-cols-2">{[
              ["DSP digital control", "High-speed digital calculation replaces drift-prone analog regulation."],
              ["0.1% control precision", "Fine power and frequency control supports consistent process results."],
              ["Fast start & load matching", "Adaptive frequency response helps the system match changing workpieces and loads."],
              ["Power & energy monitoring", "Track output, operating status and process energy through the digital interface."],
              ["Fault diagnosis", "The system identifies abnormal conditions and helps operators locate the cause."],
              ["Repeatable recipes", "Store and recall process settings for consistent production cycles."],
            ].map(([title, copy], index) => <div key={title} className="rounded-xl border border-white/10 bg-white/[.04] p-6"><div className="font-mono text-xs text-orange-300">0{index + 1}</div><h3 className="mt-5 font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center"><p className="section-kicker">FACTORY-BUILT, FACTORY-TESTED</p><h2 className="section-title mx-auto mt-4 max-w-4xl">From cabinet wiring to full-power system checks.</h2></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2"><figure className="relative min-h-[420px] overflow-hidden rounded-2xl"><Image src="/images/kc/products/internal-assembly.webp" alt="KC Induction internal power supply assembly" fill className="object-cover" sizes="50vw" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-7 pt-24 text-white"><span className="font-semibold">Internal assembly and wiring</span></figcaption></figure><figure className="relative min-h-[420px] overflow-hidden rounded-2xl"><Image src="/images/kc/products/control-inspection.webp" alt="KC Induction power supply control inspection" fill className="object-cover" sizes="50vw" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-7 pt-24 text-white"><span className="font-semibold">Control and functional inspection</span></figcaption></figure></div>
        </div>
      </section>

      <section className="py-24"><div className="mx-auto max-w-5xl px-5 text-center sm:px-8"><Gauge className="mx-auto h-12 w-12 text-orange-400" /><h2 className="section-title mt-7 text-white">Do not choose the cabinet first.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">Send the material, part dimensions, heating zone, target temperature or case depth, cycle time and available power supply. We will size the frequency, power, resonant circuit, transformer, cooling and enclosure together.</p><div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-300">{["Part drawing", "Material", "Heating depth", "Target temperature", "Cycle time", "Line voltage"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2"><Check className="h-4 w-4 text-orange-400" />{item}</span>)}</div><Link href="/#quote" className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-8 font-semibold text-slate-950 hover:bg-orange-400">Get a matched configuration <ArrowRight className="h-5 w-5" /></Link></div></section>
    </div>
  );
}
