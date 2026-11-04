
import { T, TV } from "@/components/i18n/text";
import Image from "next/image";
import Link from "@/components/i18n/link";
import Script from "next/script";
import type { Metadata } from "next";
import { ArrowRight, Box, Check, CircuitBoard, Gauge, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Digital Induction Heating Power Supplies | 0.1–1000 kHz",
  description: "Explore KC Induction digital power supplies from 0.1 to 1000 kHz, with standard catalog models and engineered industrial systems up to 2000 kW.",
  keywords: ["induction heating power supply", "portable induction heater", "medium frequency induction heater", "high frequency induction heater", "digital induction heating machine"],
  alternates: { canonical: `${siteConfig.site_domain}/products` },
};

const frequencyProducts = [
  { band: "MF", range: "0.1–10 kHz", power: "To 2000 kW engineered", title: "Medium Frequency", copy: "Deep penetration for large sections, through-heating, forging, melting and heavy heat-treatment processes.", image: "/images/kc/products/mf-power-supply.webp", accent: "from-sky-500 to-cyan-300", href: "/medium-frequency-induction-power-supply" },
  { band: "UF", range: "10–50 kHz", power: "30–300 kW catalog", title: "Ultrasonic Frequency", copy: "Balanced heating depth and response for shafts, bars, pipes and general industrial heat treatment.", image: "/images/kc/products/uf-power-supply.webp", accent: "from-cyan-400 to-teal-300", href: "/ultrasonic-frequency-induction-power-supply" },
  { band: "HF", range: "50–200 kHz", power: "30–200 kW catalog", title: "High Frequency", copy: "Fast localized heating for surface hardening, brazing, welding and small-to-medium components.", image: "/images/kc/products/hf-power-supply.webp", accent: "from-amber-400 to-orange-300", href: "/high-frequency-induction-power-supply" },
  { band: "UHF", range: "200–1000 kHz", power: "30–60 kW published models", title: "Ultra-high Frequency", copy: "Fine, shallow energy control for precision parts, fine wire, micro-brazing and sensitive local heating.", image: "/images/kc/products/uhf-power-supply.webp", accent: "from-orange-500 to-red-400", href: "/ultra-high-frequency-induction-power-supply" },
];

const cabinetLevels = [
  { label: "Portable", power: "Low-power / point-of-use", doors: "Compact enclosure", use: "Service work, brazing, preheating and flexible workstation use", image: "/images/kc/products/portable-power-supply.webp" },
  { label: "Single-door", power: "Typically 30–120 kW", doors: "One cabinet bay", use: "Standard standalone cells and medium-duty production", image: "/images/kc/products/single-door-lineup.webp" },
  { label: "Double-door", power: "Typically 150–300 kW", doors: "Two cabinet bays", use: "Higher-output heat treatment, forging and line integration", image: "/images/kc/products/cabinet-lineup.webp" },
  { label: "Three-door", power: "Typically 400–1500 kW; custom to 2000 kW", doors: "Multi-bay platform", use: "Heavy-duty continuous lines, large parts and high-throughput processes", image: "/images/kc/products/factory-testing.webp" },
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
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/35 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[.18em] text-orange-300"><Sparkles className="h-4 w-4" /> <T id="199958b01c150ffb" /></div>
            <h1 className="mt-7 text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-[5.2rem]"><T id="1fde4dc611d9ca21" /></h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl"><T id="5b6997a72062af30" /></p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="#frequency" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 hover:bg-orange-400"><T id="86ad1edb396e2ac8" /> <ArrowRight className="h-5 w-5" /></Link><Link href="/contact?product=Digital%20induction%20heating%20power%20supply&source=%2Fproducts" className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/20 bg-white/5 px-7 font-semibold backdrop-blur hover:bg-white/10"><T id="dc48c5b03bb2e605" /></Link></div>
          </div>
        </div>
      </section>

      <section id="frequency" className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="section-kicker"><T id="49db875a120dc727" /></p><h2 className="section-title mt-4"><T id="cec2cd5856f53f44" /></h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end"><T id="f59f984093e49f1c" /></p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">{frequencyProducts.map((product) => <Link key={product.band} href={product.href} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><article><div className="grid sm:grid-cols-[1.05fr_.95fr]"><div className="p-7 sm:p-8"><div className={`inline-flex rounded-full bg-gradient-to-r ${product.accent} px-3 py-1 text-xs font-bold text-slate-950`}>{<TV>{product.band}</TV>} · {<TV>{product.range}</TV>}</div><h3 className="mt-5 text-2xl font-semibold">{<TV>{product.title}</TV>}</h3><div className="mt-2 font-mono text-sm text-orange-600">{<TV>{product.power}</TV>}</div><p className="mt-5 text-sm leading-6 text-slate-600">{<TV>{product.copy}</TV>}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-700"><T id="90232531038075b4" /> <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></div><div className="relative min-h-[250px] bg-slate-100"><Image src={product.image} alt={`${product.title} digital induction heating power supply`} fill className="object-contain p-4" sizes="(min-width:768px) 25vw,100vw" /></div></div></article></Link>)}</div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="section-kicker"><T id="256d41202a818a15" /></p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white"><T id="bff16800be5daf82" /></h2></div><p className="max-w-2xl text-sm leading-6 text-slate-400"><T id="211c829d8e61286c" /></p></div>
          <div className="mt-9 grid overflow-hidden rounded-xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">{cabinetLevels.map((item, index) => <article key={item.label} className="border-b border-white/10 bg-white/[.035] p-6 last:border-0 sm:border-r lg:border-b-0"><div className="flex items-center justify-between"><span className="font-mono text-xs text-orange-300">0{index + 1}</span><span className="text-xs text-slate-500">{<TV>{item.doors}</TV>}</span></div><h3 className="mt-5 text-xl font-semibold">{<TV>{item.label}</TV>}</h3><p className="mt-2 text-sm font-semibold text-orange-300">{<TV>{item.power}</TV>}</p><p className="mt-3 text-xs leading-5 text-slate-500">{<TV>{item.use}</TV>}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end"><div><p className="section-kicker"><T id="29c17be75b546e32" /></p><h2 className="section-title mt-4"><T id="52ecbd4547b6a2d0" /></h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end"><T id="32ae92a3895ece37" /></p></div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-slate-950 p-7 text-white sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-slate-950"><CircuitBoard className="h-6 w-6" /></div><p className="mt-7 font-mono text-xs tracking-[.16em] text-orange-300"><T id="ad0f5b2b454ac4f8" /></p><h3 className="mt-3 text-3xl font-semibold"><T id="e26a8c8dcb5bb8f5" /></h3><p className="mt-5 leading-7 text-slate-300"><T id="942f501c868de1dd" /></p><div className="mt-6 flex flex-wrap gap-2">{["DSP processor", "Soft switching", "Digital parameter processing", "Frequency tracking"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 text-xs text-slate-300">{<TV>{item}</TV>}</span>)}</div></article>

            <article className="rounded-2xl border border-slate-200 bg-[#f3f1ea] p-7 sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600"><Gauge className="h-6 w-6" /></div><p className="mt-7 font-mono text-xs tracking-[.16em] text-orange-600"><T id="fe157c5cb0bbd8a0" /></p><h3 className="mt-3 text-3xl font-semibold"><T id="65019257fbe41916" /></h3><p className="mt-5 leading-7 text-slate-600"><T id="6693d2b39e5bbc38" /></p><div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white p-4"><div className="text-2xl font-semibold text-orange-600">0.1%</div><div className="mt-1 text-xs text-slate-500"><T id="cfc737e8c768250b" /></div></div><div className="rounded-xl bg-white p-4"><div className="text-2xl font-semibold text-orange-600"><T id="147170e793c6e58f" /></div><div className="mt-1 text-xs text-slate-500"><T id="8cbcf181be0708a1" /></div></div></div></article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600"><ShieldCheck className="h-6 w-6" /></div><p className="mt-7 font-mono text-xs tracking-[.16em] text-orange-600"><T id="68a24b09938cdd8f" /></p><h3 className="mt-3 text-3xl font-semibold"><T id="bec757a095873ea4" /></h3><p className="mt-5 leading-7 text-slate-600"><T id="6f2cb1cdf48c08a7" /></p><ul className="mt-6 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">{["Cooling-water pressure", "Over-temperature", "Phase-loss protection", "Overvoltage / overcurrent", "Frequency-limit alarms", "IGBT fault monitoring"].map((item) => <li key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-orange-600" />{<TV>{item}</TV>}</li>)}</ul></article>

            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="relative h-64"><Image src="/images/kc/products/open-cabinet-assembly.webp" alt="KC sealed induction heating power supply cabinet interior" fill className="object-cover" sizes="(min-width:768px) 50vw,100vw" /></div><div className="p-7 sm:p-9"><div className="flex items-center gap-3"><Box className="h-6 w-6 text-orange-600" /><p className="font-mono text-xs tracking-[.16em] text-orange-600"><T id="20acbea68f1337cf" /></p></div><h3 className="mt-4 text-3xl font-semibold"><T id="63445e5ee1adc6b0" /></h3><p className="mt-4 leading-7 text-slate-600"><T id="05c7515875e69976" /></p></div></article>
          </div>

          <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-4">{[["DSP", "digital control"], ["0.1%", "control accuracy"], ["Optical fiber", "signal transmission"], ["IP54", "sealed protection"]].map(([value, label]) => <div key={value} className="bg-white p-6 text-center"><div className="text-xl font-semibold text-slate-950">{<TV>{value}</TV>}</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{<TV>{label}</TV>}</div></div>)}</div>
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div><p className="section-kicker"><T id="9d6f9a12ebc6c904" /></p><h2 className="section-title mt-4"><T id="e60ab8a3fc03407e" /></h2></div>
            <div><p className="text-lg leading-8 text-slate-600"><T id="a2302796c69235b9" /></p><p className="mt-4 leading-7 text-slate-500"><T id="1ab6b99164fc4a77" /></p></div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="relative aspect-[4/3] bg-slate-100"><Image src="/images/kc/products/first-generation-mainboard-corrected.webp" alt="First-generation KC induction heating treatment machine mainboard" fill className="object-contain" sizes="(min-width:1024px) 33vw,100vw" /></div><div className="p-7"><div className="font-mono text-xs tracking-[.16em] text-slate-400"><T id="cc2c6929e45d3bc9" /></div><h3 className="mt-3 text-2xl font-semibold"><T id="ebcfca7f4ca0e33c" /></h3><p className="mt-3 text-sm leading-6 text-slate-600"><T id="46f8ddcad8bfce82" /></p></div></article>

            <article className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm"><div className="relative aspect-[4/3]"><Image src="/images/kc/products/fourth-generation-dsp-mainboard.webp" alt="Fourth-generation KC DSP induction heating treatment machine mainboard" fill className="object-cover" sizes="(min-width:1024px) 33vw,100vw" /></div><div className="p-7"><div className="font-mono text-xs tracking-[.16em] text-orange-600"><T id="5697bee511321741" /></div><h3 className="mt-3 text-2xl font-semibold"><T id="a7dd496c7db4ca39" /></h3><p className="mt-3 text-sm leading-6 text-slate-600"><T id="a3bd0ce0b44ed9ab" /></p></div></article>

            <article className="overflow-hidden rounded-2xl bg-slate-950 text-white shadow-sm"><div className="relative aspect-[4/3]"><Image src="/images/kc/energy-monitoring.webp" alt="Fifth-generation KC digital induction heating energy monitoring software" fill className="object-cover" sizes="(min-width:1024px) 33vw,100vw" /></div><div className="p-7"><div className="font-mono text-xs tracking-[.16em] text-orange-300"><T id="7f6618c121a3f712" /></div><h3 className="mt-3 text-2xl font-semibold"><T id="0f40e8fa6c67e4a6" /></h3><p className="mt-3 text-sm leading-6 text-slate-300"><T id="863f995db8c747e9" /></p></div></article>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
            <div className="grid grid-cols-2 gap-3 overflow-hidden rounded-2xl bg-slate-950 p-3"><div className="relative min-h-[360px] overflow-hidden rounded-xl"><Image src="/images/kc/products/control-cabinet-interior.webp" alt="KC digital induction power supply control cabinet interior" fill className="object-cover" sizes="30vw" /></div><div className="relative min-h-[360px] overflow-hidden rounded-xl"><Image src="/images/kc/products/power-electronics-interior.webp" alt="KC induction heating power electronics interior" fill className="object-cover" sizes="30vw" /></div></div>
            <div className="rounded-2xl bg-orange-500 p-8 sm:p-10"><p className="text-xs font-bold tracking-[.18em] text-slate-900/65"><T id="9743be6bf7b378f8" /></p><h3 className="mt-5 text-3xl font-semibold leading-tight"><T id="12eeb998e08f06ae" /></h3><p className="mt-5 leading-7 text-slate-900/80"><T id="b2c627b6937e7e80" /></p><div className="mt-8 space-y-3">{["Self-developed control boards", "Self-developed operating software", "Selected industrial-grade components", "In-house cabinet assembly and wiring", "Complete-system testing before delivery"].map((item) => <div key={item} className="flex items-center gap-3 font-medium"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-orange-300"><Check className="h-3.5 w-3.5" /></span>{<TV>{item}</TV>}</div>)}</div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1825] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="section-kicker"><T id="0d2d28bb695d87db" /></p><h2 className="section-title mt-4 text-white"><T id="38aa3cd2a0a4a00d" /></h2><p className="mt-6 leading-7 text-slate-400"><T id="4b3809f65af7f062" /></p><Link href="/fifth-generation-digital-induction-heating-power-supply" className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-orange-200"><T id="fd09415dbb147d2d" /> <ArrowRight className="h-5 w-5" /></Link></div>
            <div className="grid gap-4 sm:grid-cols-2">{[
              ["DSP digital control", "High-speed digital calculation replaces drift-prone analog regulation."],
              ["0.1% control precision", "Fine power and frequency control supports consistent process results."],
              ["Fast start & load matching", "Adaptive frequency response helps the system match changing workpieces and loads."],
              ["Power & energy monitoring", "Track output, operating status and process energy through the digital interface."],
              ["Fault diagnosis", "The system identifies abnormal conditions and helps operators locate the cause."],
              ["Repeatable recipes", "Store and recall process settings for consistent production cycles."],
            ].map(([title, copy], index) => <div key={title} className="rounded-xl border border-white/10 bg-white/[.04] p-6"><div className="font-mono text-xs text-orange-300">0{index + 1}</div><h3 className="mt-5 font-semibold text-white">{<TV>{title}</TV>}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{<TV>{copy}</TV>}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center"><p className="section-kicker"><T id="1a6a371b8e7c88a3" /></p><h2 className="section-title mx-auto mt-4 max-w-4xl"><T id="1043c11aa0985fd2" /></h2></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2"><figure className="relative min-h-[420px] overflow-hidden rounded-2xl"><Image src="/images/kc/products/internal-assembly.webp" alt="KC Induction internal power supply assembly" fill className="object-cover" sizes="50vw" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-7 pt-24 text-white"><span className="font-semibold"><T id="f20416bd505aa01f" /></span></figcaption></figure><figure className="relative min-h-[420px] overflow-hidden rounded-2xl"><Image src="/images/kc/products/control-inspection.webp" alt="KC Induction power supply control inspection" fill className="object-cover" sizes="50vw" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 to-transparent p-7 pt-24 text-white"><span className="font-semibold"><T id="a1bff68aa8398e43" /></span></figcaption></figure></div>
        </div>
      </section>

      <section className="py-24"><div className="mx-auto max-w-5xl px-5 text-center sm:px-8"><Gauge className="mx-auto h-12 w-12 text-orange-400" /><h2 className="section-title mt-7 text-white"><T id="b7e6724fe53a7ad3" /></h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400"><T id="cc25f0c89ed38daf" /></p><div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-300">{["Part drawing", "Material", "Heating depth", "Target temperature", "Cycle time", "Line voltage"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2"><Check className="h-4 w-4 text-orange-400" />{<TV>{item}</TV>}</span>)}</div><Link href="/contact?product=Digital%20induction%20heating%20power%20supply&source=%2Fproducts" className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-8 font-semibold text-slate-950 hover:bg-orange-400"><T id="fa6020acf377cb23" /> <ArrowRight className="h-5 w-5" /></Link></div></section>
    </div>
  );
}
