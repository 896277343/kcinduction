import type { Metadata } from "next";
import { PowerSupplyLanding } from "@/components/landing/power-supply-landing";
import { powerSupplyPages } from "@/lib/power-supply-pages";
import { siteConfig } from "@/site.config";

const page = powerSupplyPages["high-frequency-induction-power-supply"];
export const metadata: Metadata = { title: "High Frequency Induction Heating Power Supply | 50–200 kHz", description: "30–200 kW high frequency induction heating power supplies for surface hardening, induction brazing and localized heating. Compare IGBT power supply models.", keywords: ["high frequency induction power supply", "high frequency induction heating power supply", "IGBT induction heating power supply", "induction brazing power supply", "induction hardening power supply"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <PowerSupplyLanding page={page} />; }
