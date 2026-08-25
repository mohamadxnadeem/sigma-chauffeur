"use client";

import styled from "styled-components";
import Button from "../../common/Button";
import { Anchor, Container } from "./shared";
import { trackWhatsAppClick } from "../../../lib/tracking";
import { buildWhatsAppLink } from "../../../lib/whatsapp";

const heroWhatsappLink = buildWhatsAppLink(
  "Hi, I'm interested in a multi-day chauffeur package in Cape Town. My dates and party size:"
);

const Hero = styled.section`
  padding: 96px 0 72px;
  background:
    radial-gradient(
      circle at top right,
      rgba(201, 168, 76, 0.18),
      transparent 32%
    ),
    linear-gradient(180deg, #0d0d0d 0%, #1c1c1c 100%);
  color: #ffffff;

  @media (min-width: 768px) {
    padding: 128px 0 96px;
  }
`;

const HeroInner = styled.div`
  max-width: 920px;
`;

const Eyebrow = styled.div`
  margin-bottom: 14px;
  color: #c9a84c;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0 0 16px;
  color: #ffffff;
  font-size: 2.5rem;
  line-height: 1.02;
  max-width: 860px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  margin: 0 0 26px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.9;
  font-size: 1.02rem;
  max-width: 800px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const TrustStrip = styled.div`
  margin-top: 32px;
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(201, 168, 76, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.18);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TrustPill = styled.div`
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.84rem;
  font-weight: 700;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export default function MultiDayHero() {
  return (
    <Hero>
      <Container>
        <HeroInner>
          <Eyebrow>Multi-Day Packages · Cape Town</Eyebrow>

          <Title>Experience Cape Town. Fully. Without Compromise.</Title>

          <Description>
            Two, five, or seven days. Same chauffeur, same vehicle, every
            morning. Every airport transfer, day tour, and pickup is coordinated
            before you arrive so you can focus entirely on Cape Town.
          </Description>

          <ButtonRow>
            <Anchor
              href={heroWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-multiday"
              onClick={() =>
                trackWhatsAppClick({
                  source: "multiday_hero",
                  label: "Plan Your Package",
                })
              }
            >
              <Button as="span">Plan Your Package</Button>
            </Anchor>

            <Anchor href="#packages">
              <Button as="span" $variant="secondary">
                Browse Packages
              </Button>
            </Anchor>
          </ButtonRow>

          <TrustStrip>
            <TrustPill>Same Chauffeur Daily</TrustPill>
            <TrustPill>Custom Itineraries</TrustPill>
            <TrustPill>All-Inclusive Pricing</TrustPill>
            <TrustPill>Airport Transfers Included</TrustPill>
          </TrustStrip>
        </HeroInner>
      </Container>
    </Hero>
  );
}
