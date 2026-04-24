import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
    // Hostnames allowed to be loaded by next/image. Any S3 bucket /
    // backend domain that serves an image URL to the frontend must be
    // listed here explicitly — otherwise the image optimizer returns
    // 400 Bad Request.
    //
    // TODO: When we move to a CloudFront distribution in front of S3,
    // add the CloudFront hostname (e.g. dXXXXXX.cloudfront.net) here
    // so image URLs served through CloudFront continue to work.
    remotePatterns: [
      // Current active S3 bucket (cape-town-concierge, eu-north-1)
      {
        protocol: "https",
        hostname: "cape-town-concierge.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cape-town-concierge.s3.eu-north-1.amazonaws.com",
      },
      // Legacy S3 bucket — kept so existing image URLs in the CMS
      // keep rendering until every record is re-uploaded to the new bucket.
      {
        protocol: "https",
        hostname: "why-cpt-storage.s3.amazonaws.com",
      },
      // Django backend (Railway)
      {
        protocol: "https",
        hostname: "web-production-1ab9.up.railway.app",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
