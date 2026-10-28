import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Check, Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Contact KC Induction | Discuss Your Heating Project",
  description: "Contact KC Induction with your material, part dimensions, target temperature and cycle time for an application-specific induction heating recommendation.",
  alternates: { canonical: `${siteConfig.site_domain}/contact` },
};

const productCategories = [
  "Not sure — recommend a solution",
  "Digital induction heating power supply",
  "5th-generation digital heating system",
  "Induction hardening & heat treatment",
  "Induction brazing & joining",
  "Induction forging & forming",
  "Induction melting",
  "Pipe heating, preheating & PWHT",
  "Custom automated heating line",
  "OEM / ODM project",
  "Service, spare parts or technical support",
];

const fieldClass = "mt-2 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

export default async function ContactPage({ searchParams }: { searchParams?: Promise<{ message?: string; product?: string; source?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const message = resolvedSearchParams?.message ?? "";
  const requestedProduct = resolvedSearchParams?.product ?? "";
  const selectedProduct = productCategories.includes(requestedProduct) ? requestedProduct : "";
  const inquirySource = (resolvedSearchParams?.source ?? "/contact").slice(0, 160);

  return <main className="bg-[#07111b] text-white">
    <Script id="contact-schema" type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "ContactPage", name: `Contact ${siteConfig.brand.legalName}`, url: `${siteConfig.site_domain}/contact`, mainEntity: { "@type": "Organization", name: siteConfig.brand.legalName, email: siteConfig.contact.email, telephone: siteConfig.contact.phone, address: siteConfig.contact.address } })}</Script>

    <section className="border-b border-white/10 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><p className="section-kicker">APPLICATION ENGINEERING STARTS HERE</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-7xl">Tell us what you need to heat.</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">You do not need to know the frequency or power. Start with the workpiece, target result and production requirement; our team can recommend the electrical and mechanical starting point.</p></div></section>

    <section id="inquiry" className="bg-[#f3f1ea] py-24 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:px-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <p className="section-kicker">SEND YOUR REQUIREMENTS</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Get an engineering recommendation.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Complete the form below. Your inquiry will be sent directly to our project team.</p>

          <form method="POST" action="/api/inquiry" className="mt-9 space-y-6" suppressHydrationWarning>
            <input type="hidden" name="from_company" value={siteConfig.brand.legalName} />
            <input type="hidden" name="referer" value={`${siteConfig.site_domain}${inquirySource.startsWith("/") ? inquirySource : "/contact"}`} />
            <input type="hidden" name="landing_page" value={inquirySource} />
            <input type="hidden" name="success_path" value="/inquiry/success" />
            <input type="hidden" name="failure_path" value="/inquiry/success" />
            <input type="hidden" name="product_slug" value="induction-heating-solution" />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">Your name <span className="font-normal text-slate-500">(optional)</span><input type="text" name="name" autoComplete="name" className={fieldClass} placeholder="Your name" /></label>
              <label className="text-sm font-semibold text-slate-700">Business email <span className="text-orange-600">*</span><input type="email" name="email" required autoComplete="email" className={fieldClass} placeholder="name@company.com" /></label>
              <label className="text-sm font-semibold text-slate-700">Company<input type="text" name="company" autoComplete="organization" className={fieldClass} placeholder="Company name" /></label>
              <label className="text-sm font-semibold text-slate-700">Country / region<input type="text" name="country" autoComplete="country-name" className={fieldClass} placeholder="Country or region" /></label>
            </div>

            <label className="block text-sm font-semibold text-slate-700">Phone / WhatsApp<input type="tel" name="phone" autoComplete="tel" className={fieldClass} placeholder="Include country code" /></label>

            <label className="block text-sm font-semibold text-slate-700">Product or solution <span className="text-orange-600">*</span><select name="product_name" required defaultValue={selectedProduct} className={`${fieldClass} appearance-none pr-10`}><option value="" disabled>Select a product category</option>{productCategories.map((category) => <option key={category} value={category}>{category}</option>)}</select></label>

            <label className="block text-sm font-semibold text-slate-700">Project details <span className="text-orange-600">*</span><textarea name="content" required rows={7} defaultValue={message} className={`${fieldClass} min-h-44 py-3 leading-7`} placeholder="Material, part dimensions, heating area, target temperature, cycle time and production rate..." /></label>

            <label className="flex items-start gap-3 text-sm leading-6 text-slate-600"><input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-orange-500" /><span>I agree that KC Induction may use these details to respond to my inquiry.</span></label>

            <button type="submit" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"><MessageSquare className="h-5 w-5" />Send inquiry</button>
          </form>
        </div>

        <aside className="h-fit rounded-2xl bg-slate-950 p-7 text-white shadow-xl sm:p-9 lg:sticky lg:top-24">
          <h2 className="text-2xl font-semibold">What helps us respond faster?</h2>
          <div className="mt-7 space-y-3">{["Material and grade", "Part dimensions or drawing", "Area that must be heated", "Starting and target temperature", "Required cycle time", "Hourly production target", "Available electrical supply", "Photos, samples or line layout"].map((item) => <div key={item} className="flex items-center gap-3"><Check className="h-5 w-5 shrink-0 text-orange-400" /><span className="text-sm text-slate-300">{item}</span></div>)}</div>
          <div className="mt-9 border-t border-white/10 pt-8"><h3 className="font-semibold">KC Induction</h3><div className="mt-6 space-y-5"><a href={`mailto:${siteConfig.contact.email}`} className="flex gap-4"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><span><span className="block text-xs uppercase tracking-wider text-slate-500">Email</span><span className="mt-1 block font-medium">{siteConfig.contact.email}</span></span></a><a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="flex gap-4"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><span><span className="block text-xs uppercase tracking-wider text-slate-500">Phone / WeChat</span><span className="mt-1 block font-medium">{siteConfig.contact.phone}</span></span></a><div className="flex gap-4"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><span><span className="block text-xs uppercase tracking-wider text-slate-500">Factory</span><span className="mt-1 block leading-6 text-slate-300">{siteConfig.contact.address}</span></span></div><div className="flex gap-4"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><span><span className="block text-xs uppercase tracking-wider text-slate-500">Working hours</span><span className="mt-1 block text-slate-300">{siteConfig.contact.hoursLong}</span></span></div></div></div>
        </aside>
      </div>
    </section>

    <section className="py-20"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-10"><div><h2 className="text-3xl font-semibold">Review the platform before contacting us.</h2><p className="mt-3 text-slate-400">Explore frequency, power, cabinet formats and fifth-generation process monitoring.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Link href="/products" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 font-semibold hover:bg-white/5">Digital power supplies</Link><Link href="/fifth-generation-digital-induction-heating-power-supply" className="inline-flex min-h-12 items-center justify-center rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400">5th-generation system</Link></div></div></section>
  </main>;
}
