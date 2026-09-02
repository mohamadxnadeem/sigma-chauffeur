import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      // Airport transfers slug rename
      {
        source: "/airport-transfers-cape-town",
        destination: "/private-airport-transfers-cape-town",
        permanent: true,
      },
      // Old private-jet-transfer slug → new airport page
      {
        source: "/private-jet-transfer",
        destination: "/private-airport-transfers-cape-town",
        permanent: true,
      },
      {
        source: "/chauffeur-services",
        destination: "/",
        permanent: true,
      },
      // Slug renames (old "best X" → distinct Sigma slugs)
      {
        source: "/best-wine-farms-in-cape-town",
        destination: "/winelands-chauffeur-days",
        permanent: true,
      },
      {
        source: "/best-activities-to-do-in-cape-town",
        destination: "/private-experiences-cape-town",
        permanent: true,
      },
      {
        source: "/7-day-cape-town-itinerary",
        destination: "/multi-day-itineraries-cape-town",
        permanent: true,
      },
      // Tour detail slug rename
      {
        source: "/private-tours/:slug*",
        destination: "/chauffeur-drive-days/:slug*",
        permanent: true,
      },
      // Lowercase vehicle slugs (CMS returns mixed-case; normalise for inbound links)
      {
        source: "/chauffeur-services/BMW-X5-for-hire-with-driver",
        destination: "/chauffeur-services/bmw-x5-for-hire-with-driver",
        permanent: true,
      },
      {
        source: "/chauffeur-services/Mercedes-s-class-for-hire-with-driver",
        destination: "/chauffeur-services/mercedes-s-class-for-hire-with-driver",
        permanent: true,
      },
      {
        source: "/chauffeur-services/Mercedes-v-class-private-chauffeur-service",
        destination: "/chauffeur-services/mercedes-v-class-private-chauffeur-service",
        permanent: true,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
    // TODO: When CloudFront distribution is added, append its
    // hostname (e.g. dXXXXXX.cloudfront.net) here.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "web-production-1ab9.up.railway.app",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
