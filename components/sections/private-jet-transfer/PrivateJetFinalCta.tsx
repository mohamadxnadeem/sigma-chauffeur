"use client";

import styled from "styled-components";
import Button from "../../common/Button";
import { Anchor, Container, whatsappLink } from "./shared";
import { trackWhatsAppClick } from "../../../lib/tracking";

const Section = styled.section`
  padding: 84px 0;
  background: linear-gradient(135deg, #0D0D0D 0%, #1C1C1C 100%);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top right,
      rgba(201, 168, 76, 0.18),
      transparent 40%
    );
    pointer-events: none;
  }
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Eyebrow = styled.div`
  margin-bottom: 14px;
  color: #C9A84C;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0 0 14px;
  color: white;
  font-size: 2.2rem;
  line-height: 1.08;
`;

const Text = styled.p`
  margin: 0 auto 24px;
  max-width: 720px;
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.85;
`;

const TrustRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-bottom: 28px;
`;

const TrustItem = styled.div`
  font-size: 0.82rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.88);
`;

export default function PrivateJetFinalCta() {
  return (
    <Section>
      <Container>
        <Inner>
          <Eyebrow>Arrange Your Transfer</Eyebrow>

          <Title>Send Us Your Tail Number. We Handle the Rest.</Title>

          <Text>
            Share your flight details via WhatsApp and we will confirm your
            vehicle, chauffeur and FBO coordination within 30 minutes.
            Available 24 hours, seven days a week.
          </Text>

          <TrustRow>
            <TrustItem>✔ Tail-Number Tracking</TrustItem>
            <TrustItem>✔ FBO Coordination</TrustItem>
            <TrustItem>✔ 30-Min Response</TrustItem>
            <TrustItem>✔ 24/7 Availability</TrustItem>
          </TrustRow>

          <Anchor
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                source: "private_jet_final_cta",
                label: "Arrange FBO Transfer",
              })
            }
          >
            <Button as="span">Arrange Your FBO Transfer</Button>
          </Anchor>
        </Inner>
      </Container>
    </Section>
  );
}
