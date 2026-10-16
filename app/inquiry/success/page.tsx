import Link from "next/link";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";

type SuccessPageProps = {
  searchParams?: Promise<{
    product?: string | string[];
    product_slug?: string | string[];
    status?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: `Inquiry Status | ${siteConfig.site_name}`,
  description:
    "View the status of your induction heating solution inquiry.",
  alternates: {
    canonical: `${siteConfig.site_domain}/inquiry/success`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default async function InquirySuccessPage({
  searchParams,
}: SuccessPageProps) {
  const resolvedSearchParams = await searchParams;
  const product = Array.isArray(resolvedSearchParams?.product)
    ? resolvedSearchParams?.product[0]
    : resolvedSearchParams?.product;
  const productSlug = Array.isArray(resolvedSearchParams?.product_slug)
    ? resolvedSearchParams?.product_slug[0]
    : resolvedSearchParams?.product_slug;
  const status = Array.isArray(resolvedSearchParams?.status)
    ? resolvedSearchParams?.status[0]
    : resolvedSearchParams?.status;
  const isSuccess = status !== "error";

  return (
    <div className="min-h-screen bg-[#07111b] py-24 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#0b1825] p-8 shadow-2xl sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Inquiry {isSuccess ? "Received" : "Needs Attention"}
          </p>
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {isSuccess ? "Thank you for your inquiry" : "We could not send your inquiry"}
          </h1>
          <p className="mb-8 text-base leading-7 text-slate-300 sm:text-lg">
            {isSuccess
              ? product
                ? `Your request for ${product} has been submitted successfully. Our team will review it and get back to you soon.`
                : "Your request has been submitted successfully. Our team will review it and get back to you soon."
              : product
                ? `We could not submit your request for ${product} just now. Please go back and try again, or contact us directly by email or phone.`
                : "We could not submit your request just now. Please go back and try again, or contact us directly by email or phone."}
          </p>

          <div className="grid gap-4 rounded-xl border border-white/10 bg-white/[.04] p-5 text-sm text-slate-300 sm:grid-cols-2">
            <div>
              <p className="mb-1 font-semibold text-white">Email</p>
              <p>{siteConfig.contact.email}</p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-white">Phone</p>
              <p>{siteConfig.contact.phone}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {productSlug ? (
              <Button asChild className="bg-orange-500 text-slate-950 hover:bg-orange-400">
                <Link href={`/products/${productSlug}`}>Back to {product ?? "Product"}</Link>
              </Button>
            ) : (
              <Button asChild className="bg-orange-500 text-slate-950 hover:bg-orange-400">
                <Link href="/products">Back to Products</Link>
              </Button>
            )}
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/products">Continue Browsing</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">Open Contact Page</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
