import type { Metadata } from "next";
import { PowerSupplyLanding } from "@/components/landing/power-supply-landing";
import { powerSupplyPages } from "@/lib/power-supply-pages";
import { siteConfig } from "@/site.config";

const page = powerSupplyPages["ultrasonic-frequency-induction-power-supply"];
export const metadata: Metadata = { title: "10–50 kHz Induction Heating Power Supply | Digital IGBT", description: "Digital 10–50 kHz induction heating power supplies for shaft hardening, bar and pipe heating, annealing and tempering. Compare 30–300 kW catalog models.", keywords: ["induction heating power supply", "10 kHz induction heater", "30 kHz induction power supply", "IGBT induction power supply", "heat treatment power supply"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <PowerSupplyLanding page={page} />; }
