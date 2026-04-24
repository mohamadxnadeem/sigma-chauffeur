"use client";

import Image, { ImageProps } from "next/image";
import { useCallback, SyntheticEvent } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// MonitoredImage
// ─────────────────────────────────────────────────────────────────────────────
// Drop-in replacement for <Image> from "next/image" with two enhancements:
//
//   1. Auto `unoptimized={true}` for EXTERNAL image URLs (anything not under
//      /public). Vercel's image optimizer has a monthly quota on the Hobby
//      plan — exceeding it returns 402 Payment Required and breaks images.
//      Routing S3/API images around the optimizer solves the 402 at the cost
//      of losing WebP conversion and responsive sizing. Local images still
//      go through the optimizer as normal.
//
//   2. Error logging via onError. If an image fails to load (S3 403,
//      CDN 404, Vercel 402, wrong hostname 400 etc.), we log to the browser
//      console AND fire a GA4 `image_load_error` event so broken images
//      surface in Analytics instead of silently failing.
//
// Usage: identical to next/image. Swap the import and go.
// ─────────────────────────────────────────────────────────────────────────────

function isExternalSrc(src: ImageProps["src"]): boolean {
  if (typeof src !== "string") return false; // StaticImport = bundled local asset
  if (src.startsWith("/")) return false; // /public/... — local
  if (src.startsWith("data:")) return false; // inline data URL
  if (src.startsWith("blob:")) return false; // runtime object URL
  return true; // http(s):// or anything else = external
}

export default function MonitoredImage(props: ImageProps) {
  const {
    src,
    alt,
    unoptimized: unoptimizedProp,
    onError: userOnError,
    ...rest
  } = props;

  const external = isExternalSrc(src);
  // Explicit prop wins; otherwise auto-skip optimizer for external URLs.
  const unoptimized = unoptimizedProp ?? external;

  const handleError = useCallback(
    (event: SyntheticEvent<HTMLImageElement, Event>) => {
      const url = typeof src === "string" ? src : "[static-import]";
      const target = event.currentTarget as HTMLImageElement;
      const attemptedSrc = target?.currentSrc || target?.src || "unknown";

      console.error("[MonitoredImage] failed to load", {
        declaredSrc: url,
        attemptedSrc,
        alt,
        external,
      });

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "image_load_error", {
          image_src: url,
          attempted_src: attemptedSrc,
          image_alt: alt,
          external,
          page_path: window.location.pathname,
        });
      }

      userOnError?.(event);
    },
    [src, alt, external, userOnError]
  );

  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      unoptimized={unoptimized}
      onError={handleError}
    />
  );
}
