
import { T, TV } from "@/components/i18n/text";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Activity, ArrowRight, BarChart3, Check, Factory, Gauge, Leaf, ShieldCheck, SlidersHorizontal, Sparkles, Waves, Zap } from "lucide-react";
import type { PowerSupplyPage } from "@/lib/power-supply-pages";
import { powerSupplyPageList } from "@/lib/power-supply-pages";
import { siteConfig } from "@/site.config";

export function PowerSupplyLanding({ page }: { page: PowerSupplyPage }) {
  const contactHref = `/contact?product=${encodeURIComponent("Digital induction heating power supply")}&source=${encodeURIComponent(`/${page.slug}`)}`;
  return <main className="bg-[#07111b] text-white">
    <Script id={`${page.band.toLowerCase()}-power-supply-schema`} type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Product", name: page.name, brand: { "@type": "Brand", name: "KC Induction" }, manufacturer: { "@type": "Organization", name: siteConfig.brand.legalName }, description: `${page.range} digital induction heating power supplies for ${page.applications.toLowerCase()}.`, url: `${siteConfig.site_domain}/${page.slug}` })}</Script>

    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#07111b] py-14 sm:py-18">
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,rgba(249,115,22,.08),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-9 px-5 sm:px-8 md:grid-cols-[1.08fr_.92fr] md:items-center lg:gap-12 lg:px-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[.16em] text-orange-300"><Sparkles className="h-4 w-4" /><T id="a63f6e9239772669" /> {<TV>{page.band}</TV>} · {<TV>{page.range}</TV>}</div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-.04em] text-white sm:text-5xl lg:text-[4rem]">{<TV>{page.name}</TV>}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 lg:text-lg lg:leading-8">{<TV>{page.intro}</TV>}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="#models" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-orange-500 px-7 font-semibold text-slate-950 shadow-[0_12px_32px_rgba(249,115,22,.22)] hover:bg-orange-400"><T id="394d81a72c8bd542" /> <ArrowRight className="h-5 w-5" /></Link><Link href={contactHref} className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/15 bg-white/[.04] px-7 font-semibold text-white hover:bg-white/[.09]"><T id="5d38c9426739fefe" /></Link></div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">{["In-house R&D", "OEM / ODM", "Power & energy tracking"].map((item) => <span key={item} className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-orange-400" />{<TV>{item}</TV>}</span>)}</div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px] md:mx-0 md:justify-self-end lg:max-w-[520px]">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-orange-400/20 via-transparent to-cyan-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4"><div><div className="text-xs font-bold tracking-[.14em] text-orange-600"><T id="cd477bd8bb2ded17" /></div><div className="mt-1 text-sm font-medium text-slate-500">{<TV>{page.band}</TV>} · {<TV>{page.range}</TV>}</div></div><div className="flex items-center gap-3"><div className="hidden text-right sm:block"><div className="text-sm font-semibold text-slate-950"><T id="bcb6dccc1c193b8a" /></div><div className="text-[11px] text-slate-500"><T id="cb096604b1b2028b" /></div></div><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-orange-400"><Zap className="h-5 w-5" /></div></div></div>
            <div className="relative h-[280px] bg-[radial-gradient(circle_at_50%_45%,#ffffff_0%,#f8fafc_52%,#e2e8f0_100%)] sm:h-[320px] lg:h-[360px]"><Image src={page.image} alt={`${page.name} manufactured by KC Induction`} fill priority className="object-contain p-4 sm:p-6" sizes="(min-width:768px) 40vw,100vw" /></div>
            <div className="grid grid-cols-2 border-t border-slate-200 bg-white text-slate-950"><div className="border-r border-slate-200 p-5"><div className="text-xl font-semibold">{<TV>{page.range}</TV>}</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-500"><T id="a8d4c87816828290" /></div></div><div className="p-5"><div className="text-xl font-semibold">{<TV>{page.depth}</TV>}</div><div className="mt-1 text-xs uppercase tracking-wider text-slate-500"><T id="dabcf9296a23c0b0" /></div></div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-white/10 bg-[#0b1825] py-6"><div className="mx-auto grid max-w-7xl gap-3 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">{[[Waves,page.range,"Frequency band"],[Activity,page.depth,"Heating profile"],[Gauge,page.powerRange,"Available power"],[Factory,"Power · coil · control · cooling","KC supply scope"]].map(([Icon,value,label],index) => { const StatIcon = Icon as typeof Waves; return <div key={label as string} className="flex min-h-28 items-start gap-4 rounded-xl border border-white/10 bg-white/[.035] p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-400/10 text-orange-300"><StatIcon className="h-5 w-5" /></div><div><div className="text-[11px] font-bold tracking-[.14em] text-slate-500">0{index + 1} · {label as string}</div><div className="mt-2 text-base font-semibold leading-6 text-white">{value as string}</div></div></div>; })}</div></section>

    <section className="bg-[#f3f1ea] py-24 text-slate-950"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end"><div><p className="section-kicker"><T id="31645a22c17f4958" /></p><h2 className="section-title mt-4"><T id="233d0f81e4f0fa65" /></h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end"><T id="ca15ebc05a3c5c13" /> {page.applications.toLowerCase()}<T id="749b55d84b812f88" /></p></div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[
          [ShieldCheck,"01","High operating reliability","Digital frequency tracking, industrial protection and disciplined cabinet design support continuous production and reduce avoidable downtime."],
          [SlidersHorizontal,"02","Heating is easier to control","Set power, current, temperature or recipe parameters from the touchscreen. The system responds quickly when the load or production condition changes."],
          [Leaf,"03","Clean, flame-free heating","Heat is generated directly in the workpiece without an open flame. This reduces combustion fumes and keeps heat concentrated at the required area."],
          [Gauge,"04","High heating efficiency","Direct electromagnetic heating shortens warm-up time and limits unnecessary heating of surrounding fixtures, air and machine structures."],
          [Zap,"05","Lower energy use per part","Fast start, localized heating and repeatable cycle control help reduce standby losses, overheating and wasted process energy."],
          [BarChart3,"06","Fifth-generation energy monitoring","Track real-time power, accumulated energy, operating status and cycle data. Operators can review consumption, compare recipes and adjust the process with visible evidence."],
        ].map(([Icon,number,title,copy],index) => { const BenefitIcon = Icon as typeof ShieldCheck; return <article key={title as string} className={`group relative overflow-hidden rounded-2xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${index === 5 ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white"}`}><div className={`absolute right-5 top-4 font-mono text-xs ${index === 5 ? "text-orange-300" : "text-slate-400"}`}>{number as string}</div><div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${index === 5 ? "bg-orange-500 text-slate-950" : "bg-orange-50 text-orange-600 ring-1 ring-orange-100"}`}><BenefitIcon className="h-6 w-6" /></div><h3 className="mt-7 text-xl font-semibold tracking-tight">{title as string}</h3><p className={`mt-3 text-sm leading-6 ${index === 5 ? "text-slate-300" : "text-slate-600"}`}>{copy as string}</p>{index === 5 && <Link href="/fifth-generation-digital-induction-heating-power-supply" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200"><T id="783c6b40781d7d0e" /> <ArrowRight className="h-4 w-4" /></Link>}</article>; })}
      </div>
    </div></section>

    <section id="models" className="bg-white py-24 text-slate-950"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end"><div><p className="section-kicker"><T id="bb7527c42a99227d" /></p><h2 className="section-title mt-4"><T id="4b53612a242f804a" /> {<TV>{page.range}</TV>}.</h2></div><p className="text-sm leading-6 text-slate-600">{<TV>{page.selectionNote}</TV>}</p></div><div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200"><table className="min-w-[980px] w-full border-collapse text-left text-sm"><thead className="bg-slate-950 text-white"><tr>{["Model","Output power","Inverter frequency","Cabinet","Input","Input current","Dimensions"].map((head) => <th key={head} className="px-5 py-4 font-semibold">{<TV>{head}</TV>}</th>)}</tr></thead><tbody>{page.models.map((model,index) => <tr key={model.model} className={index % 2 ? "bg-slate-50" : "bg-white"}><td className="border-t border-slate-200 px-5 py-4 font-semibold text-orange-700">{<TV>{model.model}</TV>}</td><td className="border-t border-slate-200 px-5 py-4">{<TV>{model.power}</TV>}</td><td className="border-t border-slate-200 px-5 py-4">{<TV>{model.frequency}</TV>}</td><td className="border-t border-slate-200 px-5 py-4">{<TV>{model.cabinet}</TV>}</td><td className="border-t border-slate-200 px-5 py-4">{<TV>{model.input}</TV>}</td><td className="border-t border-slate-200 px-5 py-4">{<TV>{model.current}</TV>}</td><td className="border-t border-slate-200 px-5 py-4">{<TV>{model.size}</TV>}</td></tr>)}</tbody></table></div><p className="mt-5 text-xs leading-5 text-slate-500"><T id="bacdfccada9da7cd" /></p></div></section>

    <section className="py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><p className="section-kicker"><T id="fb7b74262e0252e3" /></p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{powerSupplyPageList.map((item) => <Link key={item.slug} href={`/${item.slug}`} className={`rounded-xl border p-6 transition ${item.slug === page.slug ? "border-orange-400 bg-orange-400/10" : "border-white/10 bg-white/[.04] hover:bg-white/[.08]"}`}><div className="text-sm font-bold text-orange-300">{<TV>{item.band}</TV>} · {<TV>{item.range}</TV>}</div><div className="mt-3 font-semibold">{item.name.replace(" Induction Power Supply","")}</div><div className="mt-2 text-xs leading-5 text-slate-400">{<TV>{item.depth}</TV>}</div></Link>)}</div></div></section>

    <section className="bg-orange-500 py-20 text-slate-950"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-10"><div><h2 className="text-4xl font-semibold tracking-tight"><T id="a88a7048dce5dcbf" /></h2><p className="mt-4 max-w-3xl leading-7 text-slate-900/75"><T id="a7d351fd90c63f68" /></p></div><Link href={contactHref} className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-md bg-slate-950 px-7 font-semibold text-white hover:bg-slate-800"><T id="5d38c9426739fefe" /> <ArrowRight className="h-5 w-5" /></Link></div></section>
  </main>;
}
