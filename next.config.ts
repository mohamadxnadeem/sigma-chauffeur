import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    // GLOBAL UNOPTIMIZED
    // ──────────────────────────────────────────────────────────────────
    // Bypass Vercel's image optimizer for every <Image>. The Hobby
    // plan's image optimization quota was being exhausted, returning
    // 402 Payment Required on the /_next/image endpoint. With this
    // flag, images are served directly from their source (S3, local
    // public/, etc.) — no transformation, no Vercel cost.
    //
    // Tradeoffs:
    //   - No automatic WebP/AVIF conversion
    //   - No responsive srcset
    //   - Cannot set image quality via `quality={...}` (ignored)
    //
    // When Vercel is upgraded to Pro, remove this flag to restore
    // optimization for local images. API images (S3) will still be
    // routed around the optimizer via components/common/MonitoredImage.
    unoptimized: true,

    formats: ["image/avif", "image/webp"],
    // Remote patterns are only consulted when the optimizer runs
    // (i.e. not when unoptimized is true). Kept for future use when
    // we upgrade plan + re-enable optimization.
    //
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
