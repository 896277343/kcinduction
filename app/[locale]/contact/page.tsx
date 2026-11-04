
import { T, TV } from "@/components/i18n/text";
import type { Metadata } from "next";
import Link from "@/components/i18n/link";
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

    <section className="border-b border-white/10 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><p className="section-kicker"><T id="5cbdbc0c63717223" /></p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.045em] sm:text-7xl"><T id="edf860cdf1847e82" /></h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300"><T id="00100f2e879e12d7" /></p></div></section>

    <section id="inquiry" className="bg-[#f3f1ea] py-24 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:px-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <p className="section-kicker"><T id="1ec5b69f2cfae8ce" /></p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"><T id="0b3dd49a214a3047" /></h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600"><T id="618fde66e211848f" /></p>

          <form method="POST" action="/api/inquiry" className="mt-9 space-y-6" suppressHydrationWarning>
            <input type="hidden" name="from_company" value={siteConfig.brand.legalName} />
            <input type="hidden" name="referer" value={`${siteConfig.site_domain}${inquirySource.startsWith("/") ? inquirySource : "/contact"}`} />
            <input type="hidden" name="landing_page" value={inquirySource} />
            <input type="hidden" name="success_path" value="/inquiry/success" />
            <input type="hidden" name="failure_path" value="/inquiry/success" />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700"><T id="2c6b2e253c01fb2e" /> <span className="font-normal text-slate-500"><T id="0059798b7f7023e4" /></span><input type="text" name="name" minLength={2} maxLength={30} autoComplete="name" className={fieldClass} placeholder="Your name" /></label>
              <label className="text-sm font-semibold text-slate-700"><T id="e9afc27f82949931" /> <span className="text-orange-600">*</span><input type="email" name="email" required autoComplete="email" className={fieldClass} placeholder="name@company.com" /></label>
              <label className="text-sm font-semibold text-slate-700"><T id="de4743c879734dc3" /><input type="text" name="company" autoComplete="organization" className={fieldClass} placeholder="Company name" /></label>
              <label className="text-sm font-semibold text-slate-700"><T id="632c099e9eda2513" /><input type="text" name="country" autoComplete="country-name" className={fieldClass} placeholder="Country or region" /></label>
            </div>

            <label className="block text-sm font-semibold text-slate-700"><T id="2e2c97ab4237fe1b" /><input type="tel" name="phone" autoComplete="tel" className={fieldClass} placeholder="Include country code" /></label>

            <label className="block text-sm font-semibold text-slate-700"><T id="e4ab0763840f227a" /> <span className="text-orange-600">*</span><select name="product_name" required defaultValue={selectedProduct} className={`${fieldClass} appearance-none pr-10`}><option value="" disabled><T id="5df0c81657e2414a" /></option>{productCategories.map((category) => <option key={category} value={category}>{<TV>{category}</TV>}</option>)}</select></label>

            <label className="block text-sm font-semibold text-slate-700"><T id="5f770a8de37b95ee" /> <span className="text-orange-600">*</span><textarea name="content" required minLength={5} maxLength={2000} rows={7} defaultValue={message} className={`${fieldClass} min-h-44 py-3 leading-7`} placeholder="Material, part dimensions, heating area, target temperature, cycle time and production rate..." /><span className="mt-2 block text-xs font-normal text-slate-500"><T id="718fa96a87f8db36" /></span></label>

            <label className="flex items-start gap-3 text-sm leading-6 text-slate-600"><input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-orange-500" /><span><T id="40588ced1909c14f" /> <Link href="/privacy-policy" className="font-semibold text-orange-700 underline"><T id="506ff394621596dd" /></Link>.</span></label>

            <button type="submit" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-7 font-semibold text-slate-950 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"><MessageSquare className="h-5 w-5" /><T id="ce3f4a7855491d91" /></button>
          </form>
        </div>

        <aside className="h-fit rounded-2xl bg-slate-950 p-7 text-white shadow-xl sm:p-9 lg:sticky lg:top-24">
          <h2 className="text-2xl font-semibold"><T id="6bbcbca8dd38ffb3" /></h2>
          <div className="mt-7 space-y-3">{["Material and grade", "Part dimensions or drawing", "Area that must be heated", "Starting and target temperature", "Required cycle time", "Hourly production target", "Available electrical supply", "Photos, samples or line layout"].map((item) => <div key={item} className="flex items-center gap-3"><Check className="h-5 w-5 shrink-0 text-orange-400" /><span className="text-sm text-slate-300">{<TV>{item}</TV>}</span></div>)}</div>
          <div className="mt-9 border-t border-white/10 pt-8"><h3 className="font-semibold"><T id="1b2a41ca67c64664" /></h3><div className="mt-6 space-y-5"><a href={`mailto:${siteConfig.contact.email}`} className="flex gap-4"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><span><span className="block text-xs uppercase tracking-wider text-slate-500"><T id="969ccbd3cf6300ec" /></span><span className="mt-1 block font-medium">{<TV>{siteConfig.contact.email}</TV>}</span></span></a><a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="flex gap-4"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><span><span className="block text-xs uppercase tracking-wider text-slate-500"><T id="0d92f6db520306d9" /></span><span className="mt-1 block font-medium">{<TV>{siteConfig.contact.phone}</TV>}</span></span></a><div className="flex gap-4"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><span><span className="block text-xs uppercase tracking-wider text-slate-500"><T id="c4b97afe643da8e9" /></span><span className="mt-1 block leading-6 text-slate-300">{<TV>{siteConfig.contact.address}</TV>}</span></span></div><div className="flex gap-4"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" /><span><span className="block text-xs uppercase tracking-wider text-slate-500"><T id="b9c635214e54995c" /></span><span className="mt-1 block text-slate-300">{<TV>{siteConfig.contact.hoursLong}</TV>}</span></span></div></div></div>
        </aside>
      </div>
    </section>

    <section className="py-20"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-10"><div><h2 className="text-3xl font-semibold"><T id="1450dbbb55605388" /></h2><p className="mt-3 text-slate-400"><T id="8342f92ddc1ca98a" /></p></div><div className="flex flex-col gap-3 sm:flex-row"><Link href="/products" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 font-semibold hover:bg-white/5"><T id="aca0179d9d86635a" /></Link><Link href="/fifth-generation-digital-induction-heating-power-supply" className="inline-flex min-h-12 items-center justify-center rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400"><T id="0137468cb6407a65" /></Link></div></div></section>
  </main>;
}
