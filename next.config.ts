import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
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
        hostname: "cape-town-concierge.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cape-town-concierge.s3.eu-north-1.amazonaws.com",
      },
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
};

export default nextConfig;
