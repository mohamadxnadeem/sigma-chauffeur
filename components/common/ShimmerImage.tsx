"use client";

import { useState } from "react";
import MonitoredImage from "./MonitoredImage";
import styled, { keyframes } from "styled-components";

type ShimmerImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

const shimmerSweep = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const ImageShell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ShimmerMask = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    #1a1a1a 0%,
    #0d0d0d 100%
  );

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

const FadeLayer = styled.div<{ $loaded: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

export default function ShimmerImage({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  fill = true,
}: ShimmerImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageShell>
      {!loaded && <ShimmerMask />}
      <FadeLayer $loaded={loaded}>
        <MonitoredImage
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover" }}
          onLoad={() => setLoaded(true)}
        />
      </FadeLayer>
    </ImageShell>
  );
}
