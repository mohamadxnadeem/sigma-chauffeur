"use client";

import styled from "styled-components";
import Button from "../common/Button";
import { trackWhatsAppClick } from "../../lib/tracking";

const MULTI_DAY_WHATSAPP =
  "https://wa.me/27711081227?text=Hi%2C%20I%27d%20like%20to%20arrange%20a%20multi-day%20private%20chauffeur%20package%20in%20Cape%20Town.%20Please%20can%20you%20assist%3F";

const Section = styled.section`
  padding: 72px 0;
  background: #0d0d0d;
  color: #ffffff;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 96px 0;
  }
`;

const Container = styled.div`
  width: min(860px, calc(100% - 32px));
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(860px, calc(100% - 64px));
  }
`;

const Eyebrow = styled.div`
  margin-bottom: 12px;
  color: #c9a84c;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  color: #ffffff;
  font-size: 2rem;
  line-height: 1.08;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Body = styled.p`
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.9;
  font-size: 1.02rem;
`;

const Pricing = styled.p`
  margin: 0 0 28px;
  color: #c9a84c;
  font-weight: 700;
  line-height: 1.7;
  font-size: 1.02rem;
`;

const Anchor = styled.a`
  display: inline-flex;
  text-decoration: none;
`;

export default function MultiDaySection() {
  return (
    <Section>
      <Container>
        <Eyebrow>Multi-Day Packages</Eyebrow>
        <Title>More Than a Single Day? We Handle the Whole Trip.</Title>
        <Body>
          Most of our clients don&apos;t stop at one booking. They combine the
          Cape Peninsula, Stellenbosch Winelands, Hermanus, and the Garden Route
          across 3, 5, or 7 days — with the same private vehicle and chauffeur
          throughout. No logistics to coordinate, no new bookings to manage. One
          WhatsApp message and your entire Western Cape transport is handled,
          from FBO arrival to final hotel drop-off.
        </Body>
        <Pricing>
          All-inclusive pricing covers your vehicle, chauffeur, fuel, tolls, and hotel pickups. Message us for a tailored quote based on your dates and itinerary.
        </Pricing>
        <Anchor
          href={MULTI_DAY_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackWhatsAppClick({
              source: "multi_day_section",
              label: "Arrange My Multi-Day Trip",
            })
          }
        >
          <Button as="span">Arrange My Multi-Day Trip</Button>
        </Anchor>
      </Container>
    </Section>
  );
}
