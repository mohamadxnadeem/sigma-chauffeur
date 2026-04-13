"use client";

import styled from "styled-components";
import {
  Container,
  Section,
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
  SectionText,
} from "./shared";

type Step = {
  label: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    label: "Step 01",
    title: "Confirm Your Arrival",
    description:
      "Share your tail number, ETA, FBO handler, passenger count and onward destination via WhatsApp. We confirm your vehicle and route within 30 minutes.",
  },
  {
    label: "Step 02",
    title: "Flight-Tracked from Departure",
    description:
      "From the moment you push back, your tail number is on our screens. Airborne delays, early arrivals, diverts — your chauffeur is already adjusting.",
  },
  {
    label: "Step 03",
    title: "FBO Coordination",
    description:
      "We liaise with the private terminal team to confirm ramp access, luggage transfer, and passenger clearance. Paperwork handled before you touch down.",
  },
  {
    label: "Step 04",
    title: "Vehicle Staged at the FBO",
    description:
      "Your chauffeur is positioned at the private terminal ahead of your arrival. Engine on, climate set, water stocked. No waiting. No searching.",
  },
  {
    label: "Step 05",
    title: "Discreet Departure",
    description:
      "From aircraft door to vehicle in under five minutes. Luggage loaded by your chauffeur. You are on the road to your hotel, villa, or next engagement — quietly.",
  },
];

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 22px;
  }
`;

const ProgressColumn = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    position: relative;
  }
`;

const Rail = styled.div`
  position: absolute;
  top: 0;
  bottom: -18px;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(201, 168, 76, 0.3),
    rgba(201, 168, 76, 0.08)
  );
`;

const Dot = styled.div`
  margin-top: 24px;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 0 6px rgba(201, 168, 76, 0.14);
  z-index: 2;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 24px;
`;

const Label = styled.div`
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.3rem;
  line-height: 1.25;
`;

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  font-size: 0.98rem;
`;

export default function PrivateJetTimeline() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionEyebrow>How It Works</SectionEyebrow>
          <SectionTitle>From Tail Number to Hotel Door</SectionTitle>
          <SectionText>
            Five steps, one standard. This is what happens from the moment
            you confirm your arrival to the moment you leave the FBO ramp.
          </SectionText>
        </SectionHeader>

        <List>
          {steps.map((step) => (
            <Row key={step.label}>
              <ProgressColumn>
                <Rail />
                <Dot />
              </ProgressColumn>

              <Card>
                <Label>{step.label}</Label>
                <Title>{step.title}</Title>
                <Text>{step.description}</Text>
              </Card>
            </Row>
          ))}
        </List>
      </Container>
    </Section>
  );
}
