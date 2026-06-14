import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/private-jet-transfer",
        destination: "/airport-transfers-cape-town",
        permanent: true,
      },
      {
        source: "/chauffeur-services",
        destination: "/",
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
