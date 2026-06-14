"use client";

import Image, { ImageProps } from "next/image";
import { useCallback, useState, SyntheticEvent } from "react";
import styled, { keyframes } from "styled-components";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const shimmerSweep = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
`;

const ShimmerOverlay = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    #1a1a1a 0%,
    #0d0d0d 100%
  );
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(201, 168, 76, 0.15) 40%,
      rgba(201, 168, 76, 0.25) 50%,
      rgba(201, 168, 76, 0.15) 60%,
      transparent 100%
    );
    animation: ${shimmerSweep} 1.8s ease-in-out infinite;
  }
`;

function isExternalSrc(src: ImageProps["src"]): boolean {
  if (typeof src !== "string") return false;
  if (src.startsWith("/")) return false;
  if (src.startsWith("data:")) return false;
  if (src.startsWith("blob:")) return false;
  return true;
}

export default function MonitoredImage(props: ImageProps) {
  const {
    src,
    alt,
    fill,
    unoptimized: unoptimizedProp,
    onError: userOnError,
    onLoad: userOnLoad,
    ...rest
  } = props;

  const [loaded, setLoaded] = useState(false);

  if (!src || (typeof src === "string" && src.trim() === "")) {
    return null;
  }

  const external = isExternalSrc(src);
  const unoptimized = unoptimizedProp ?? external;

  const handleLoad = useCallback(
    (event: SyntheticEvent<HTMLImageElement, Event>) => {
      setLoaded(true);
      userOnLoad?.(event);
    },
    [userOnLoad]
  );

  const handleError = useCallback(
    (event: SyntheticEvent<HTMLImageElement, Event>) => {
      setLoaded(true);
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

  if (fill) {
    return (
      <Wrapper>
        <ShimmerOverlay $visible={!loaded} />
        <Image
          {...rest}
          src={src}
          alt={alt}
          fill
          unoptimized={unoptimized}
          onLoad={handleLoad}
          onError={handleError}
        />
      </Wrapper>
    );
  }

  return (
    <Image
      {...rest}
      src={src}
      alt={alt}
      unoptimized={unoptimized}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}
