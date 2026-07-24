"use client";

import styled from "styled-components";
import Button from "../common/Button";
import { buildWhatsAppLink, buildGeneralWhatsAppMessage } from "../../lib/whatsapp";
import { trackWhatsAppClick } from "../../lib/tracking";

const whatsappLink = buildWhatsAppLink(
  buildGeneralWhatsAppMessage(
    "arranging a private chauffeur in Cape Town. Please can you assist with availability and vehicle options"
  )
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
          <Eyebrow>Private Chauffeur Service</Eyebrow>
          <Title>Arranged Entirely Around You</Title>

          <FeatureList>
            <Feature>
              <FeatureLabel>Fully private vehicles</FeatureLabel> with vetted
              chauffeurs. NDAs available on request. No shared schedules, no
              groups.
            </Feature>
            <Feature>
              <FeatureLabel>Arabic-speaking drivers</FeatureLabel> available on
              request. Halal-aware itineraries and prayer-time flexibility built
              into every day.
            </Feature>
            <Feature>
              <FeatureLabel>Family and multi-vehicle convoys</FeatureLabel>{" "}
              coordinated across the S-Class, V-Class, Staria, and Sprinter.
              One booking, one point of contact.
            </Feature>
            <Feature>
              <FeatureLabel>Private jet FBO coordination</FeatureLabel> at Cape
              Town International. Vehicle staged before you land, luggage
              handled, transfer completed in minutes.
            </Feature>
            <Feature>
              <FeatureLabel>One WhatsApp message</FeatureLabel> handles your entire
              Cape Town schedule from arrival to departure.
            </Feature>
          </FeatureList>

          <Anchor
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                source: "private_service_section",
                label: "Arrange My Trip",
              })
            }
          >
            <Button as="span">Arrange My Trip</Button>
          </Anchor>
        </Inner>
      </Container>
    </Section>
  );
}
