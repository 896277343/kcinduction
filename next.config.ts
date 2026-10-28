import type { NextConfig } from "next";

const wordpressHostname = process.env.WORDPRESS_HOSTNAME;
const wordpressUrl = process.env.WORDPRESS_URL;
const parsedWordpressHostname = wordpressUrl ? new URL(wordpressUrl).hostname : undefined;
const imageHostnames = Array.from(
  new Set(
    [wordpressHostname, parsedWordpressHostname]
      .filter((hostname): hostname is string => Boolean(hostname))
      .reduce<string[]>((hostnames, hostname) => {
        const normalizedHostname = hostname.replace(/^https?:\/\//, "");
        if (normalizedHostname.startsWith("www.")) {
          hostnames.push(normalizedHostname, normalizedHostname.replace(/^www\./, ""));
        } else {
          hostnames.push(normalizedHostname, `www.${normalizedHostname}`);
        }
        return hostnames;
      }, [])
  )
);

const nextConfig: NextConfig = {
  distDir: process.env.KC_BUILD_DIR || ".next-local",
  output: "standalone",
  images: {
    remotePatterns: imageHostnames.map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "/**",
    })),
  },
  async redirects() {
    return [
      { source: "/medium-frequency", destination: "/products#frequency", permanent: false },
      { source: "/induction-heat-treatment-system", destination: "/solutions", permanent: false },
      { source: "/product/automatic-induction-forging-equipment", destination: "/induction-forging-equipment", permanent: true },
      { source: "/product/induction-pipe-bending-machine", destination: "/induction-pipe-bending-machine", permanent: true },
      { source: "/quenching-and-tempering-system", destination: "/induction-hardening-machine", permanent: true },
      { source: "/products/sf6-leak-detector", destination: "/products", permanent: true },
      { source: "/products/sf6-room-monitor", destination: "/products", permanent: true },
      { source: "/products/sf6-gas-analyzer", destination: "/products", permanent: true },
      { source: "/products/sf6-gas-filling-cart", destination: "/products", permanent: true },
      { source: "/products/sf6-gas-filling-kit", destination: "/products", permanent: true },
      { source: "/products/sf6-gas-fittings", destination: "/products", permanent: true },
      { source: "/products/sf6-service-carts", destination: "/products", permanent: true },
      { source: "/products/sf6-regeneration-system", destination: "/products", permanent: true },
      { source: "/products/mobile-sf6-vacuum-pump-unit", destination: "/products", permanent: true },
      { source: "/sf6-calculator", destination: "/products", permanent: true },
      { source: "/projects", destination: "/solutions", permanent: true },
      { source: "/projects/sf6-gas-handling-and-regeneration-base", destination: "/solutions", permanent: true },
      { source: "/projects/sf6-gas-handling-for-underground-substation", destination: "/solutions", permanent: true },
      { source: "/projects/sf6-use-for-gas-insulated-switchgear-manufacturers", destination: "/solutions", permanent: true },
      { source: "/projects/ultra-high-voltage-sf6-handling-equipment", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;
