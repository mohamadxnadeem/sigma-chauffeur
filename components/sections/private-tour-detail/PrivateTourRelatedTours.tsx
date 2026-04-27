"use client";

import styled from "styled-components";
import MonitoredImage from "../../common/MonitoredImage";
import Link from "next/link";
import Button from "../../common/Button";
import { RelatedTour } from "./types";

function normalizeUsdPrice(price?: string | number) {
  if (!price) return "";

  return String(price)
    .replace(/^From\s+R/i, "From $")
    .replace(/^R/i, "$")
    .replace(/\s+R(?=\d)/gi, " $");
}

function shimmer(w: number, h: number) {
  return `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f2f4f3" offset="20%" />
          <stop stop-color="#e8ece9" offset="50%" />
          <stop stop-color="#f2f4f3" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f2f4f3" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
    </svg>`;
}

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

/* ===== styles unchanged ===== */

const SectionHeader = styled.div`
  max-width: 760px;
  margin-bottom: 28px;
`;

const SectionEyebrow = styled.div`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 2rem;
  line-height: 1.08;
`;

const SectionText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
`;

const Grid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const CardImage = styled.div`
  position: relative;
  min-height: 220px;
  background: linear-gradient(135deg, rgba(201, 168, 76, 0.12), rgba(168, 137, 56, 0.06));
`;

const CardBody = styled.div`
  padding: 22px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.2rem;
`;

const Price = styled.div`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const CardText = styled.p`
  margin: 0 0 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.75;
`;

type Props = {
  items: RelatedTour[];
};

export default function PrivateTourRelatedTours({
  items,
}: Props) {
  if (!items.length) return null;

  return (
    <>
      <SectionHeader>
        <SectionEyebrow>More Experiences</SectionEyebrow>
        <SectionTitle>Other Tours You May Also Enjoy</SectionTitle>
        <SectionText>
          Explore more of Cape Town with additional private experiences designed
          for comfort, flexibility, and unforgettable scenery.
        </SectionText>
      </SectionHeader>

      <Grid>
        {items.map((item, index) => (
          <Card key={`${item.title}-${index}`}>
            <CardImage>
              {item.image ? (
                <MonitoredImage
                  src={item.image}
                  alt={`${item.title} private tour`}
                  fill
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 500)
                  )}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              ) : null}
            </CardImage>

            <CardBody>
              <CardTitle>{item.title}</CardTitle>

              <CardText>
                {item.description ||
                  "Discover another premium private tour experience in Cape Town."}
              </CardText>

              <Link href={item.href}>
                <Button as="span" $variant="secondary">
                  View Tour
                </Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </>
  );
}