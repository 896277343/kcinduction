import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, CircuitBoard, Code2, Factory, Gauge, Handshake, Settings2, ShieldCheck, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose KC Induction | Digital Induction Heating Manufacturer",
  description: "Meet the manufacturer behind KC Induction: self-developed digital power supplies and software, in-house engineering, OEM and ODM capability, manufacturing and global application support.",
};

const capabilities = [
  { icon: CircuitBoard, title: "Power electronics R&D", copy: "Our engineering team develops the digital induction power platform, control architecture and application-specific power configurations." },
  { icon: Code2, title: "Our own control software", copy: "The operating interface, control logic, monitoring functions and process tools are developed around our own equipment—not added as a third-party afterthought." },
  { icon: Wrench, title: "In-house manufacturing", copy: "Cabinet assembly, system integration, inspection and application testing stay connected to the people who designed the equipment." },
  { icon: Settings2, title: "OEM & ODM engineering", copy: "We support branding, electrical configuration, mechanical layout, interfaces, automation and process-specific system development." },
];

const partners = [
  { name: "BYD", image: "/images/kc/why-us/partners/byd.webp" },
  { name: "CATL", image: "/images/kc/why-us/partners/catl.webp" },
  { name: "EVE Energy", image: "/images/kc/why-us/partners/eve.webp" },
  { name: "Zoomlion", image: "/images/kc/why-us/partners/zoomlion.webp" },
  { name: "CRRC", image: "/images/kc/why-us/partners/crrc.webp" },
  { name: "CNPC", image: "/images/kc/why-us/partners/cnpc.webp" },
  { name: "AECC", image: "/images/kc/why-us/partners/aecc.webp" },
  { name: "Ansteel", image: "/images/kc/why-us/partners/ansteel.webp" },
  { name: "AVIC", image: "/images/kc/why-us/partners/avvc.webp" },
  { name: "Juhua Group", image: "/images/kc/why-us/partners/juhua.webp" },
  { name: "SINOTRUK", image: "/images/kc/why-us/partners/sinotruck.webp" },
  { name: "Chinese Academy of Sciences", image: "/images/kc/why-us/partners/zhongke.webp" },
];

export default function WhyUsPage() {
  return (
    <div className="bg-[#07111b] text-white">
      <section className="relative overflow-hidden border-b border-white/10 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_75%_35%,#f97316_0,transparent_30%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[.18em] text-orange-300"><Factory className="h-4 w-4" /> MANUFACTURER · DEVELOPER · APPLICATION PARTNER</div>
            <h1 className="mt-7 text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">We build the technology behind the heat.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">KC Induction is not a trading company assembling other brands. Since 2001, our team has developed and manufactured digital induction heating power supplies, software and complete application systems in-house.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/#quote" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 hover:bg-orange-400">Discuss your project <ArrowRight className="h-5 w-5" /></Link><Link href="/#products" className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/20 px-7 font-semibold hover:bg-white/5">View product platform</Link></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[['2001', 'Founded'], ['100+', 'Patents & software copyrights'], ['0.1–1000', 'kHz product range'], ['OEM / ODM', 'Custom engineering']].map(([value, label]) => <div key={label} className="rounded-xl border border-white/10 bg-white/[.045] p-6 backdrop-blur"><div className="text-3xl font-semibold text-orange-300">{value}</div><div className="mt-2 text-sm text-slate-400">{label}</div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1ea] py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="section-kicker">ONE TEAM, FULL RESPONSIBILITY</p><h2 className="section-title mt-4">Designed here. Built here. Supported here.</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">When hardware, software and application engineering come from one manufacturer, changes move faster and responsibility stays clear. Our engineers can work from the heating result backward to the electronics, controls, coil and mechanical system.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">{capabilities.map(({ icon: Icon, title, copy }, index) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"><div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-orange-400"><Icon className="h-6 w-6" /></div><span className="font-mono text-xs text-slate-400">0{index + 1}</span></div><h3 className="mt-7 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl"><p className="section-kicker">LOOK INSIDE THE EQUIPMENT</p><h2 className="section-title mt-4 text-white">Engineering quality you can inspect.</h2><p className="mt-6 text-lg leading-8 text-slate-400">The inside of a power supply tells you how it was engineered. We focus on clear system architecture, robust component selection, controlled assembly and maintainable layouts.</p></div>
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <figure className="group relative min-h-[520px] overflow-hidden rounded-2xl border border-white/10"><Image src="/images/kc/why-us/power-supply-inside.webp" alt="Inside a KC medium-frequency induction heating power supply" fill className="object-cover transition duration-700 group-hover:scale-[1.02]" sizes="(min-width:1024px) 60vw,100vw" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-8 pt-24"><p className="text-xl font-semibold">Built from the inside out</p><p className="mt-2 text-sm text-slate-300">Power electronics, cooling paths, control hardware and protection systems integrated as one platform.</p></figcaption></figure>
            <div className="grid gap-5">
              <figure className="group relative min-h-[250px] overflow-hidden rounded-2xl border border-white/10"><Image src="/images/kc/why-us/internal-design.webp" alt="Internal design of KC induction heating treatment equipment" fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 40vw,100vw" /></figure>
              <figure className="group relative min-h-[250px] overflow-hidden rounded-2xl border border-white/10"><Image src="/images/kc/why-us/assembly-detail.webp" alt="KC induction heating power supply assembly detail" fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(min-width:1024px) 40vw,100vw" /></figure>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">{[[ShieldCheck, "Protection designed in", "Fault diagnosis and online protection are part of the control platform."], [Gauge, "Visible operating data", "Operators can see system status, power and process information."], [Check, "Factory inspection", "Assembly and functional checks are completed before delivery."]].map(([Icon, title, copy]) => { const Component = Icon as typeof Check; return <div key={title as string} className="flex gap-4 rounded-xl border border-white/10 bg-white/[.035] p-6"><Component className="mt-1 h-5 w-5 shrink-0 text-orange-400" /><div><h3 className="font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy as string}</p></div></div>; })}</div>
        </div>
      </section>

      <section className="bg-white py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10">
          <div><p className="section-kicker">OEM &amp; ODM</p><h2 className="section-title mt-4">Your market. Our engineering platform.</h2><p className="mt-6 text-lg leading-8 text-slate-600">We support partners who need more than a standard catalogue machine. Start with an existing digital power platform or develop a system around your brand, market requirements and target process.</p><div className="mt-8 space-y-3">{["Branding, cabinet appearance and documentation", "Power, frequency and electrical configuration", "Control interface, software functions and communication", "Cooling, coil, tooling and mechanical integration", "Sample testing and application validation"].map((item) => <div key={item} className="flex items-center gap-3"><Check className="h-5 w-5 text-orange-600" /><span>{item}</span></div>)}</div></div>
          <div className="rounded-2xl bg-slate-950 p-8 text-white sm:p-10"><Handshake className="h-10 w-10 text-orange-400" /><h3 className="mt-8 text-3xl font-semibold">A development partner, not only a supplier.</h3><p className="mt-5 leading-7 text-slate-300">Tell us what your customer, process or product must achieve. Our electrical, software and application teams can evaluate the complete system together.</p><Link href="/#quote" className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-300 hover:text-orange-200">Start an OEM / ODM discussion <ArrowRight className="h-5 w-5" /></Link></div>
        </div>
      </section>

      <section className="bg-[#0b1825] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center"><p className="section-kicker">SELECTED CUSTOMERS &amp; ORGANIZATIONS</p><h2 className="section-title mx-auto mt-4 max-w-4xl text-white">Trusted across automotive, energy, heavy industry and research.</h2><p className="mx-auto mt-6 max-w-3xl leading-7 text-slate-400">Our public company references include major manufacturers, industrial groups and research organizations. Selected names include BYD, CATL, EVE Energy, SANY, Zoomlion, CRRC and CNPC.</p></div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{partners.map((partner) => <div key={partner.name} className="flex min-h-32 items-center justify-center rounded-xl border border-white/10 bg-white p-5"><Image src={partner.image} alt={`${partner.name} logo`} width={360} height={150} className="h-auto max-h-20 w-full object-contain" /></div>)}</div>
          <p className="mt-6 text-center text-xs leading-5 text-slate-500">Customer and organization names identify publicly referenced or company-provided relationships; trademarks belong to their respective owners.</p>
        </div>
      </section>

      <section className="py-24"><div className="mx-auto max-w-5xl px-5 text-center sm:px-8"><Factory className="mx-auto h-12 w-12 text-orange-400" /><h2 className="section-title mt-7 text-white">Bring us the heating challenge.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">We will bring the power electronics, software, application engineering and manufacturing together around it.</p><Link href="/#quote" className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-orange-500 px-8 font-semibold text-slate-950 hover:bg-orange-400">Talk to KC Induction <ArrowRight className="h-5 w-5" /></Link></div></section>
    </div>
  );
}
