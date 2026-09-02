"use client";

import styled from "styled-components";
import Button from "../common/Button";
import { buildWhatsAppLink, buildGeneralWhatsAppMessage } from "../../lib/whatsapp";
import { trackWhatsAppClick } from "../../lib/tracking";

const whatsappLink = buildWhatsAppLink(
  "Hi, I'm arranging travel for an executive visit to Cape Town. Can you advise on vehicles?"
);

const Section = styled.section`
  padding: 72px 0;
  background: #0d0d0d;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 96px 0;
  }
`;

const Container = styled.div`
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(1120px, calc(100% - 64px));
  }
`;

const Inner = styled.div`
  max-width: 820px;
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

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;
`;

const Feature = styled.div`
  padding: 16px 20px;
  border-radius: 16px;
  background: rgba(201, 168, 76, 0.06);
  border: 1px solid rgba(201, 168, 76, 0.12);
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.7;
  font-size: 1rem;
`;

const FeatureLabel = styled.span`
  color: #c9a84c;
  font-weight: 700;
`;

const Anchor = styled.a`
  display: inline-flex;
  text-decoration: none;
`;

export default function PrivateServiceSection() {
  return (
    <Section>
      <Container>
        <Inner>
          <Eyebrow>For Corporate Executives, PAs, and Private Families</Eyebrow>
          <Title>Everything Your Party Needs, Managed as One Arrangement</Title>

          <FeatureList>
            <Feature>
              <FeatureLabel>Fully private vehicles</FeatureLabel> with
              chauffeurs who are vetted and briefed before every booking.
              NDAs available on request. No shared schedules, no other
              clients.
            </Feature>
            <Feature>
              <FeatureLabel>Same chauffeur throughout</FeatureLabel> for
              multi-day packages. By day two, they know your preferences,
              your timing, and how your party travels. Confirmed in advance,
              not substituted on the morning.
            </Feature>
            <Feature>
              <FeatureLabel>Family and multi-vehicle convoys</FeatureLabel>{" "}
              coordinated across the S-Class, V-Class, Staria, and Sprinter.
              Your principal&apos;s vehicle, your family&apos;s carrier, and
              luggage transport as a single booking.
            </Feature>
            <Feature>
              <FeatureLabel>FBO ramp coordination</FeatureLabel>{" "}at Cape Town
              International&apos;s private terminal. Vehicle staged, luggage
              handled, transfer from aircraft completed in under five minutes.
            </Feature>
            <Feature>
              <FeatureLabel>One WhatsApp thread</FeatureLabel> manages every
              vehicle, every chauffeur, and every day of your Cape Town
              schedule from first arrival to final departure.
            </Feature>
          </FeatureList>

          <Anchor
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                source: "private_service_section",
                label: "Start the Arrangement",
              })
            }
          >
            <Button as="span">Start the Arrangement</Button>
          </Anchor>
        </Inner>
      </Container>
    </Section>
  );
}
