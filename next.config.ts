import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "why-cpt-storage.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "web-production-1ab9.up.railway.app",
      },
    ],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // Retired URL still indexed by Google; send visitors and ranking to the live page.
        source: "/chauffeur-services/mercedes-v-class-2",
        destination: "/chauffeur-services/mercedes-v-class",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;