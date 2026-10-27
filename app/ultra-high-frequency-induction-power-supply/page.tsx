import type { Metadata } from "next";
import { PowerSupplyLanding } from "@/components/landing/power-supply-landing";
import { powerSupplyPages } from "@/lib/power-supply-pages";
import { siteConfig } from "@/site.config";

const page = powerSupplyPages["ultra-high-frequency-induction-power-supply"];
export const metadata: Metadata = { title: "Ultra High Frequency Induction Power Supply | 200–1000 kHz", description: "Solid-state 200–1000 kHz induction power supplies for precision hardening, fine wire, small parts and micro brazing. Standard models to 300–400 kHz.", keywords: ["ultra high frequency induction power supply", "solid state induction power supply", "high frequency induction generator", "micro brazing power supply", "precision induction heating"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <PowerSupplyLanding page={page} />; }
