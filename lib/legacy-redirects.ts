// Paths published by the former WordPress site at www.kc-induction.com.
// Keep destinations topical: a generic homepage redirect would be misleading
// to visitors arriving from an old ad, search result, or saved product link.
const legacyPaths: Record<string, string> = {
  "/5th-generation-digital-induction-heating-power-supply": "/fifth-generation-digital-induction-heating-power-supply",
  "/medium-frequency": "/medium-frequency-induction-power-supply",
  "/medium-frequency-induction-heating-machine": "/medium-frequency-induction-power-supply",
  "/induction-heat-treatment-system": "/solutions",
  "/application": "/solutions",
  "/application/induction-joining": "/induction-brazing-system",
  "/application/induction-welding": "/induction-brazing-system",
  "/application/induction-melting": "/medium-frequency-induction-power-supply",
  "/application/induction-forming": "/induction-forging-equipment",
  "/application/induction-heat-treatment": "/induction-hardening-machine",
  "/application/wind-and-power-induction-modulation-heat-treatment-for-bolts": "/induction-hardening-machine",
  "/application/induction-forming/induction-heating-production-line-for-hot-coiled-springs-red-coiled-springs": "/induction-forging-equipment",
  "/application/introduction-to-medium-frequency-pipe-bending": "/induction-pipe-bending-machine",
  "/induction-forging-system": "/induction-forging-equipment",
  "/quenching-and-tempering-system": "/induction-hardening-machine",
  "/our-honor": "/why-us",
  "/services": "/solutions",
  "/single-product": "/products",
  "/products/dual-frequency-induction-heating-machine": "/products",
  "/shop": "/products",
  "/video": "/solutions",
  "/uncategorized/real-time-energy-monitoring-in-induction-heating-why-it-is-necessary-and-how-it-helps": "/fifth-generation-digital-induction-heating-power-supply",
  "/uncategorized/whole-gears-induction-hardening-machine": "/induction-hardening-machine",
  "/uncategorized/slewing-bearing-raceway-and-gear-induction-hardening-equipment": "/induction-hardening-machine",
  "/product/multi-frequency-induction-heating-generator-for-gear-hardening": "/induction-hardening-machine",
  "/product/induction-pipe-bending-machine": "/induction-pipe-bending-machine",
  "/product/inner-hole-induction-hardening-machine": "/induction-hardening-machine",
  "/product/induction-forging-machine": "/induction-forging-equipment",
  "/product/induction-hardening-machine": "/induction-hardening-machine",
  "/product/pipe-induction-brazing-machine": "/induction-brazing-system",
  "/product/automatic-induction-forging-equipment": "/induction-forging-equipment",
  "/product/induction-brazing-hvac-refrigerant-distributor": "/induction-brazing-system",
  "/product/circular-tubesteel-tubedrill-pipe-quenching-and-tempering-heat-treatment-production-line": "/induction-pipe-heating",
  "/product/heat-treatment-processing-center": "/induction-hardening-machine",
  "/product/aluminum-pipe-induction-welding": "/induction-brazing-system",
  "/product/copper-pipe-induction-brazing-system": "/induction-brazing-system",
  "/product/drill-stem-quenching-and-tempering-system": "/induction-pipe-heating",
  "/product/induction-heat-treatment-of-track-chain-link": "/induction-hardening-machine",
  "/product/steel-wire-induction-heating-production-line": "/custom-induction-heating-lines",
  "/product/camshaft-induction-hardening-machine": "/induction-hardening-machine",
  "/product/slewing-bearing-induction-quenching-machine": "/induction-hardening-machine",
  "/product/automatic-concrete-pump-pipe-induction-quenching-system": "/induction-pipe-heating",
  "/product/wind-turbine-bolt-induction-quenching-and-tempering-system": "/induction-hardening-machine",
  "/product/engine-valve-stem-induction-quenching-system": "/induction-hardening-machine",
  "/product/roll-induction-quenching-system": "/induction-hardening-machine",
  "/product/induction-heating-ball-head-quenching-machine": "/induction-hardening-machine",
  "/product/outer-race-induction-hardening-machine": "/induction-hardening-machine",
  "/product/ball-stud-induction-hardening-machine": "/induction-hardening-machine",
  "/product/quenching-the-inner-wall-of-concrete-pump-pipe": "/induction-pipe-heating",
  "/product/30kw-all-in-one-induction-brazing-machine": "/induction-brazing-system",
};

const modelGroups: Record<string, string[]> = {
  "/medium-frequency-induction-power-supply": [
    "km30-30kw", "km80-80kw", "km160-160kw", "km300-300kw",
    "km500-500kw", "km1000-1000kw", "km2000-2000kw", "km60-60kw",
  ],
  "/ultrasonic-frequency-induction-power-supply": [
    "kus160-160kw", "kus30-30kw", "kus500-500kw", "kus300-300kw", "kus80-80kw",
  ],
  "/high-frequency-induction-power-supply": [
    "kh80-80kw", "kh160-160kw", "kh300-300kw", "kh500-500kw", "kh60-60kw", "kh30-30kw",
  ],
  "/ultra-high-frequency-induction-power-supply": [
    "kuh160-160kw", "kuh200-200kw", "kuh100-100kw", "kuh80-80kw",
    "kuh60-60kw", "kuh30-30kw", "kuh20-20kw",
  ],
};

for (const [destination, models] of Object.entries(modelGroups)) {
  for (const model of models) {
    const band = destination === "/medium-frequency-induction-power-supply" ? "medium"
      : destination === "/ultrasonic-frequency-induction-power-supply" ? "ultrasonic"
      : destination === "/high-frequency-induction-power-supply" ? "high"
      : "ultra-high";
    legacyPaths[`/product/${model}-${band}-frequency-induction-heating-machine`] = destination;
  }
}

export const legacyRedirects = [
  ...Object.entries(legacyPaths).map(([source, destination]) => ({ source, destination, permanent: true })),
  { source: "/video/induction-joining-video/:slug", destination: "/induction-brazing-system", permanent: true },
  { source: "/video/induction-heat-treatment-video/:slug", destination: "/induction-hardening-machine", permanent: true },
  { source: "/video/induction-forming-video/:slug", destination: "/induction-forging-equipment", permanent: true },
  { source: "/video/induction-melting-video/:slug", destination: "/medium-frequency-induction-power-supply", permanent: true },
  { source: "/video/:slug", destination: "/solutions", permanent: true },
  { source: "/uncategorized-de/:slug", destination: "/fifth-generation-digital-induction-heating-power-supply", permanent: true },
  { source: "/uncategorized-ko/:slug", destination: "/fifth-generation-digital-induction-heating-power-supply", permanent: true },
  { source: "/uncategorized/:slug", destination: "/fifth-generation-digital-induction-heating-power-supply", permanent: true },
  { source: "/category/application/:slug", destination: "/solutions", permanent: true },
  { source: "/category/video/:slug", destination: "/solutions", permanent: true },
];
