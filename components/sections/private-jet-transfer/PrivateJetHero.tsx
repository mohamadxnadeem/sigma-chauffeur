"use client";

import styled from "styled-components";
import Button from "../../common/Button";
import {
  Anchor,
  Container,
  StyledLink,
  whatsappLink,
} from "./shared";
import { trackWhatsAppClick } from "../../../lib/tracking";

const Hero = styled.section`
  padding: 96px 0 72px;
  background:
    radial-gradient(
      circle at top right,
      rgba(201, 168, 76, 0.18),
      transparent 32%
    ),
    linear-gradient(180deg, #0D0D0D 0%, #1C1C1C 100%);
  color: #ffffff;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 128px 0 96px;
  }
`;

const HeroInner = styled.div`
  max-width: 920px;
`;

const Eyebrow = styled.div`
  margin-bottom: 14px;
  color: #C9A84C;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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

export default function PrivateJetHero() {
  return (
    <Hero>
      <Container>
        <HeroInner>
          <Eyebrow>Airport Transfers · Cape Town International</Eyebrow>

          <Title>Your Flight Has Landed. Your Chauffeur is Ready.</Title>

          <Description>
            Sigma VIP tracks your flight in real time and stages your
            vehicle at Cape Town International Airport before you land.
            From commercial arrivals to private jet FBO coordination,
            your chauffeur handles luggage, meet-and-greet, and the
            first mile of your Cape Town stay. Quietly, precisely,
            and without delay.
          </Description>

          <ButtonRow>
            <Anchor
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  source: "airport_transfer_hero",
                  label: "Arrange Airport Transfer",
                })
              }
            >
              <Button as="span">Arrange Airport Transfer</Button>
            </Anchor>

            <StyledLink href="#fleet">
              <Button as="span" $variant="secondary">
                View Our Fleet
              </Button>
            </StyledLink>
          </ButtonRow>

          <TrustStrip>
            <TrustPill>Live Flight Tracking</TrustPill>
            <TrustPill>Meet-and-Greet</TrustPill>
            <TrustPill>Private Jet FBO</TrustPill>
            <TrustPill>24/7 Availability</TrustPill>
          </TrustStrip>
        </HeroInner>
      </Container>
    </Hero>
  );
}
