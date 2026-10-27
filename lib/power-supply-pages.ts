export type PowerSupplyModel = {
  model: string;
  power: string;
  frequency: string;
  cabinet: string;
  input: string;
  current: string;
  size: string;
};

export type PowerSupplyPage = {
  slug: string;
  band: "MF" | "UF" | "HF" | "UHF";
  name: string;
  range: string;
  depth: string;
  applications: string;
  powerRange: string;
  image: string;
  intro: string;
  selectionNote: string;
  models: PowerSupplyModel[];
};

const common = {
  input: "380 V ±10%, 50/60 Hz",
};

export const powerSupplyPages: Record<string, PowerSupplyPage> = {
  "medium-frequency-induction-power-supply": {
    slug: "medium-frequency-induction-power-supply",
    band: "MF",
    name: "Medium Frequency Induction Heating Power Supply",
    range: "0.1–10 kHz",
    depth: "Deep penetration",
    applications: "Billet heating, forging, melting, large parts and through heating",
    powerRange: "300–1500 kW standard catalog range; engineered systems up to 2000 kW",
    image: "/images/kc/products/mf-power-supply.webp",
    intro: "Industrial 0.1–10 kHz IGBT induction power supplies for billet heating, forging, melting and through heating. Choose from catalog systems up to 1500 kW or a custom engineered system up to 2000 kW.",
    selectionNote: "Compare MF induction power supply models by rated power, operating frequency, input current and cabinet size. Final selection depends on billet or workpiece size, material, target temperature, cycle time and duty cycle.",
    models: [
      { model: "XZG-300SBK", power: "≤300 kW", frequency: "0.1–20 kHz", cabinet: "Double-door", input: "380 V ±10%, 50 Hz", current: "≤660 A", size: "1400 × 900 × 1950 mm" },
      { model: "XZG-400SBK", power: "≤400 kW", frequency: "0.1–20 kHz", cabinet: "Double-door", input: "380 V ±10%, 50 Hz", current: "≤880 A", size: "1400 × 900 × 1950 mm" },
      { model: "XZG-500SBK", power: "≤500 kW", frequency: "0.1–20 kHz", cabinet: "Three-door", input: "380 V ±10%, 50 Hz", current: "≤1100 A", size: "2400 × 1000 × 1950 mm" },
      { model: "XZG-600SBK", power: "≤600 kW", frequency: "0.1–20 kHz", cabinet: "Three-door", input: "380 V ±10%, 50 Hz", current: "≤1300 A", size: "2400 × 1000 × 1950 mm" },
      { model: "XZG-800SBK", power: "≤800 kW", frequency: "0.1–20 kHz", cabinet: "Three-door", input: "380 V ±10%, 50 Hz", current: "≤1760 A", size: "2400 × 1000 × 1950 mm" },
      { model: "XZG-1000SBK", power: "≤1000 kW", frequency: "0.1–10 kHz", cabinet: "Three-door", input: "500 V ±10%, 50 Hz", current: "≤2200 A", size: "2400 × 1000 × 2200 mm" },
      { model: "XZG-1500SBK", power: "≤1500 kW", frequency: "0.1–10 kHz", cabinet: "Three-door", input: "500 V ±10%, 50 Hz", current: "≤3200 A", size: "2400 × 1000 × 2200 mm" },
    ],
  },
  "ultrasonic-frequency-induction-power-supply": {
    slug: "ultrasonic-frequency-induction-power-supply",
    band: "UF",
    name: "10–50 kHz Induction Heating Power Supply",
    range: "10–50 kHz",
    depth: "Balanced heating depth",
    applications: "Shaft hardening, bar and pipe heating, annealing and tempering",
    powerRange: "30–300 kW standard precision range; higher-power configurations by application",
    image: "/images/kc/products/uf-power-supply.webp",
    intro: "Digital 10–50 kHz induction heating power supplies for shaft hardening, bar and pipe heating, annealing and tempering. This range combines practical heat depth with fast response for general industrial heat treatment.",
    selectionNote: "Compare 10–50 kHz induction power supply models by power, frequency range, input current and enclosure. We confirm the operating frequency from part diameter, material, required heat depth and production rate.",
    models: [
      { model: "XZG-30SCZ", power: "≤30 kW", frequency: "1–50 kHz", cabinet: "Box-type", input: common.input, current: "≤65 A", size: "628 × 350 × 568 mm" },
      { model: "XZG-40SCZ", power: "≤40 kW", frequency: "1–50 kHz", cabinet: "Box-type", input: common.input, current: "≤100 A", size: "628 × 350 × 568 mm" },
      { model: "XZG-80SCZ", power: "≤80 kW", frequency: "1–50 kHz", cabinet: "Single-door", input: common.input, current: "≤170 A", size: "800 × 600 × 1750 mm" },
      { model: "XZG-100SCZ", power: "≤100 kW", frequency: "1–50 kHz", cabinet: "Single-door", input: common.input, current: "≤220 A", size: "800 × 600 × 1750 mm" },
      { model: "XZG-120SCZ", power: "≤120 kW", frequency: "1–50 kHz", cabinet: "Single-door", input: common.input, current: "≤250 A", size: "800 × 600 × 1750 mm" },
      { model: "XZG-160SCZ", power: "≤160 kW", frequency: "1–50 kHz", cabinet: "Double-door", input: common.input, current: "≤350 A", size: "1200 × 800 × 1750 mm" },
      { model: "XZG-200SCZ", power: "≤200 kW", frequency: "1–50 kHz", cabinet: "Double-door", input: common.input, current: "≤440 A", size: "1200 × 800 × 1750 mm" },
      { model: "XZG-250SCZ", power: "≤250 kW", frequency: "1–50 kHz", cabinet: "Double-door", input: common.input, current: "≤550 A", size: "1400 × 900 × 1950 mm" },
      { model: "XZG-300SCZ", power: "≤300 kW", frequency: "1–50 kHz", cabinet: "Double-door", input: common.input, current: "≤660 A", size: "1400 × 900 × 1950 mm" },
    ],
  },
  "high-frequency-induction-power-supply": {
    slug: "high-frequency-induction-power-supply",
    band: "HF",
    name: "High Frequency Induction Heating Power Supply",
    range: "50–200 kHz",
    depth: "Shallow and localized heating",
    applications: "Surface hardening, induction brazing and localized heating",
    powerRange: "30–200 kW standard catalog range",
    image: "/images/kc/products/hf-power-supply.webp",
    intro: "Industrial 50–200 kHz IGBT induction power supplies for surface hardening, induction brazing and localized heating. Standard models cover 30–200 kW with digital power and frequency control.",
    selectionNote: "Compare HF induction power supply models by rated power and available frequency. Higher-power models have a narrower published frequency range, so the required operating point must be confirmed before quotation.",
    models: [
      { model: "XZC-30SCZ", power: "≤30 kW", frequency: "50–400 kHz", cabinet: "Box-type", input: common.input, current: "≤65 A", size: "628 × 350 × 568 mm" },
      { model: "XZC-40SCZ", power: "≤40 kW", frequency: "50–400 kHz", cabinet: "Box-type", input: common.input, current: "≤100 A", size: "628 × 350 × 568 mm" },
      { model: "XZC-60SCZ", power: "≤60 kW", frequency: "50–300 kHz", cabinet: "Single-door", input: common.input, current: "≤130 A", size: "800 × 600 × 1750 mm" },
      { model: "XZC-80SCZ", power: "≤80 kW", frequency: "50–200 kHz", cabinet: "Single-door", input: common.input, current: "≤170 A", size: "800 × 600 × 1750 mm" },
      { model: "XZC-100SCZ", power: "≤100 kW", frequency: "50–200 kHz", cabinet: "Single-door", input: common.input, current: "≤220 A", size: "800 × 600 × 1750 mm" },
      { model: "XZC-120SCZ", power: "≤120 kW", frequency: "50–200 kHz", cabinet: "Double-door", input: common.input, current: "≤250 A", size: "1200 × 800 × 1750 mm" },
      { model: "XZC-150SCZ", power: "≤150 kW", frequency: "50–200 kHz", cabinet: "Double-door", input: common.input, current: "≤300 A", size: "1200 × 800 × 1750 mm" },
      { model: "XZC-200SCZ", power: "≤200 kW", frequency: "50–200 kHz", cabinet: "Double-door", input: common.input, current: "≤440 A", size: "1200 × 800 × 1750 mm" },
    ],
  },
  "ultra-high-frequency-induction-power-supply": {
    slug: "ultra-high-frequency-induction-power-supply",
    band: "UHF",
    name: "Ultra High Frequency Induction Heating Power Supply",
    range: "200–1000 kHz",
    depth: "Very fine surface heating",
    applications: "Precision hardening, fine wire, small parts and micro brazing",
    powerRange: "30–60 kW catalog models to 300–400 kHz; 400–1000 kHz engineered to order",
    image: "/images/kc/products/uhf-power-supply.webp",
    intro: "200–1000 kHz solid-state induction power supplies for precision hardening, fine wire, small parts and micro brazing. Published catalog models reach 300–400 kHz; higher-frequency projects are configured after application testing.",
    selectionNote: "The catalog lists standard UHF-capable models to 300–400 kHz. Applications above 400 kHz require workpiece, coil and load-matching tests before we confirm the power supply configuration.",
    models: [
      { model: "XZC-30SCZ", power: "≤30 kW", frequency: "50–400 kHz", cabinet: "Box-type", input: common.input, current: "≤65 A", size: "628 × 350 × 568 mm" },
      { model: "XZC-40SCZ", power: "≤40 kW", frequency: "50–400 kHz", cabinet: "Box-type", input: common.input, current: "≤100 A", size: "628 × 350 × 568 mm" },
      { model: "XZC-60SCZ", power: "≤60 kW", frequency: "50–300 kHz", cabinet: "Single-door", input: common.input, current: "≤130 A", size: "800 × 600 × 1750 mm" },
    ],
  },
};

export const powerSupplyPageList = Object.values(powerSupplyPages);
