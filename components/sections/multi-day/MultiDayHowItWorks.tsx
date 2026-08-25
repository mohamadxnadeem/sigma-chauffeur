"use client";

import styled from "styled-components";
import {
  Container,
  SectionWhite,
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
  SectionText,
} from "./shared";

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 0 20px;

  @media (min-width: 768px) {
    grid-template-columns: 40px 1fr;
    gap: 0 28px;
  }
`;

const ProgressColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Rail = styled.div<{ $last?: boolean }>`
  width: 2px;
  flex: 1;
  background: ${({ $last, theme }) =>
    $last ? "transparent" : theme.colors.border};
  margin-top: 4px;
  min-height: 24px;
`;

const Dot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    rgba(201, 168, 76, 0.14),
    rgba(168, 137, 56, 0.06)
  );
  border: 1px solid rgba(201, 168, 76, 0.3);
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Card = styled.div`
  padding-bottom: 28px;
`;

const StepLabel = styled.div`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 6px;
`;

const StepTitle = styled.h3`
  margin: 0 0 6px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.05rem;
  line-height: 1.3;
`;

const StepText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.93rem;
  line-height: 1.75;
`;

const steps = [
  {
    label: "Step 01",
    title: "Tell Us Your Dates and Group Size",
    text: "WhatsApp or use the enquiry form below. Share your arrival and departure dates, number of passengers, and any destinations or experiences you have in mind.",
  },
  {
    label: "Step 02",
    title: "Choose or Customise Your Package",
    text: "We confirm a 3, 5, or 7-day programme based on your interests. Every package can be adjusted — we can add routes, swap days, or build something entirely bespoke.",
  },
  {
    label: "Step 03",
    title: "Select Your Vehicle",
    text: "Choose from our fleet based on your group size and preference. S-Class, V-Class, BMW X5, and the Staria for larger groups are all available for multi-day hire.",
  },
  {
    label: "Step 04",
    title: "We Confirm and Prepare",
    text: "We handle all pre-trip logistics — route planning, restaurant reservations, activity timing, and FBO coordination if you have a private jet arrival. You receive a full daily itinerary before you land.",
  },
  {
    label: "Step 05",
    title: "Arrive. Your Chauffeur is Ready.",
    text: "Your driver meets you at the airport with a name board, assists with luggage, and from that moment handles every transfer and pickup for the full duration of your stay.",
  },
];

export default function MultiDayHowItWorks() {
  return (
    <SectionWhite>
      <Container>
        <SectionHeader>
          <SectionEyebrow>How It Works</SectionEyebrow>
          <SectionTitle>From First Message to Final Transfer</SectionTitle>
          <SectionText>
            Five steps from enquiry to a fully arranged multi-day programme.
            Most packages are confirmed within 24 hours of your first message.
          </SectionText>
        </SectionHeader>

        <List>
          {steps.map((step, index) => (
            <Row key={step.label}>
              <ProgressColumn>
                <Dot>{index + 1}</Dot>
                <Rail $last={index === steps.length - 1} />
              </ProgressColumn>
              <Card>
                <StepLabel>{step.label}</StepLabel>
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.text}</StepText>
              </Card>
            </Row>
          ))}
        </List>
      </Container>
    </SectionWhite>
  );
}
