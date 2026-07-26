"use client";

import styled from "styled-components";
import Button from "../../common/Button";
import { buildWhatsAppLink, buildGeneralWhatsAppMessage } from "../../../lib/whatsapp";
import { trackWhatsAppClick } from "../../../lib/tracking";

const whatsappLink = buildWhatsAppLink(
  buildGeneralWhatsAppMessage("planning a Cape Town trip")
);

const Section = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #0D0D0D 0%, #1C1C1C 100%);
`;

const Container = styled.div`
  width: min(900px, calc(100% - 32px));
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 14px;
  color: white;
  font-size: 2.2rem;
`;

const Text = styled.p`
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
`;

const TrustRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 24px;
`;

const TrustItem = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
`;

const Anchor = styled.a`
  display: inline-flex;
`;

export default function TestimonialsCta() {
  return (
    <Section>
      <Container>
        <Title>Your Cape Town Visit, Arranged from Start to Finish</Title>

        <Text>
          Send us your travel dates and the size of your party. We will
          confirm your vehicles, your chauffeurs, and your itinerary, and
          have everything in place before you land.
        </Text>

        <TrustRow>
          <TrustItem>Private Chauffeur</TrustItem>
          <TrustItem>Custom Itinerary</TrustItem>
          <TrustItem>Multi-Day Packages</TrustItem>
          <TrustItem>One Point of Contact</TrustItem>
        </TrustRow>

        <Anchor
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackWhatsAppClick({
              source: "testimonial_cta",
              label: "Arrange My Visit",
            })
          }
        >
          <Button as="span">Arrange My Cape Town Visit</Button>
        </Anchor>
      </Container>
    </Section>
  );
}