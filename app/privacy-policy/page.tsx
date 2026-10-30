import type { Metadata } from "next";
import Link from "next/link";
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
        <p className="section-kicker">KC INDUCTION</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-6 leading-7 text-slate-600">This notice describes the contact and project-inquiry information handled through this website by {siteConfig.brand.legalName}.</p>

        <div className="mt-12 space-y-10 leading-7 text-slate-700">
          <section><h2 className="text-2xl font-semibold text-slate-950">Information you send us</h2><p className="mt-3">When you submit an inquiry, we receive the details you provide, such as your email address, optional name, company, country, phone number, product category, and project requirements. Technical information supplied by your browser, including its user agent and network address, may also be processed to deliver the request and help detect misuse.</p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950">How we use it</h2><p className="mt-3">We use inquiry information to review your heating requirement, respond to you, prepare a technical recommendation or quotation, and maintain the related business correspondence. Please do not include sensitive personal information in project descriptions.</p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950">Inquiry processing</h2><p className="mt-3">The form sends your submission through our website to our inquiry management system at inquiry.sf6sf6.com. Our team uses that system to receive and manage project requests. The information you submit may therefore be processed by the infrastructure that operates that system.</p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950">Live chat</h2><p className="mt-3">This website uses Tawk.to to offer live chat. If you use the chat widget, the messages you send and technical connection information needed to operate the chat are processed through Tawk.to. You can contact us by email instead if you prefer not to use the widget.</p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950">Your questions and requests</h2><p className="mt-3">For questions about an inquiry you submitted, or to request access to, correction of, or deletion of your inquiry information, contact <a className="font-semibold text-orange-700 underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>. We will review your request in light of applicable requirements and the records we hold.</p></section>
          <section><h2 className="text-2xl font-semibold text-slate-950">Updates</h2><p className="mt-3">We may update this notice when our website or inquiry process changes. The current version will be available at this address.</p></section>
        </div>

        <Link href="/contact" className="mt-12 inline-flex min-h-12 items-center rounded-md bg-orange-500 px-6 font-semibold text-slate-950 hover:bg-orange-400">Contact KC Induction</Link>
      </div>
    </main>
  );
}
