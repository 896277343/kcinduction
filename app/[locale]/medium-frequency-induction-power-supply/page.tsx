import type { Metadata } from "next";
import { PowerSupplyLanding } from "@/components/landing/power-supply-landing";
import { powerSupplyPages } from "@/lib/power-supply-pages";
import { siteConfig } from "@/site.config";

const page = powerSupplyPages["medium-frequency-induction-power-supply"];
export const metadata: Metadata = { title: "Medium Frequency Induction Heating Power Supply | MF IGBT", description: "0.1–10 kHz medium frequency induction heating power supplies for billet heating, forging, melting and through heating. Compare 300–1500 kW catalog models.", keywords: ["medium frequency induction power supply", "medium frequency inverter power supply", "IGBT induction heating power supply", "induction heating generator", "induction forging power supply"], alternates: { canonical: `${siteConfig.site_domain}/${page.slug}` } };
export default function Page() { return <PowerSupplyLanding page={page} />; }
