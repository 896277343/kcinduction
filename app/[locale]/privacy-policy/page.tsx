
import { T, TV } from "@/components/i18n/text";
import type { Metadata } from "next";
import Link from "@/components/i18n/link";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How KC Induction handles information submitted through this website's project inquiry form.",
  alternates: { canonical: `${siteConfig.site_domain}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f3f1ea] text-slate-900">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="section-kicker"><T id="9b6dce14f65d9ffe" /></p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"><T id="506ff394621596dd" /></h1>
        <p className="mt-6 leading-7 text-slate-600"><T id="21ad3a20740acb3d" /> {<TV>{siteConfig.brand.legalName}</TV>}.</p>

        <div className="mt-12 space-y-10 leading-7 text-slate-700">
          <section><h2 className="text-2xl font-semibold text-slate-950"><T id="423cae029d01fba2" /></h2><p className="mt-3"><T id="a071d0849ffcb93f" /></p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950"><T id="dc8a88f8ccf2f485" /></h2><p className="mt-3"><T id="5cc5f0682b4b0a95" /></p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950"><T id="8034ff200113403b" /></h2><p className="mt-3"><T id="a7fa7bba61c1fe48" /></p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950"><T id="1c7cc7287ca8090e" /></h2><p className="mt-3"><T id="6c74a0f144fba6ae" /></p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950"><T id="a18dfad56f8b1c49" /></h2><p className="mt-3"><T id="7dd40d5a0a7e0fa9" /> <a className="font-semibold text-orange-700 underline" href={`mailto:${siteConfig.contact.email}`}>{<TV>{siteConfig.contact.email}</TV>}</a><T id="91f07271b3abf877" /></p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950"><T id="22e2bada8f1c65cd" /></h2><p className="mt-3"><T id="756898a0cb68cf1e" /></p></section>
        </div>

        <Link href="/contact" className="mt-12 inline-flex min-h-12 items-center rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400"><T id="89be4d58a9cc498a" /></Link>
      </div>
    </main>
  );
}
