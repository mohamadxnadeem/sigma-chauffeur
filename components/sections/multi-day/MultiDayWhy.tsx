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

const Grid = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }
`;

const Card = styled.div`
  padding: 26px 22px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const IconBadge = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    rgba(201, 168, 76, 0.14),
    rgba(168, 137, 56, 0.06)
  );
  border: 1px solid rgba(201, 168, 76, 0.22);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.1rem;
  line-height: 1.3;
`;

const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  font-size: 0.95rem;
`;

const pillars = [
  {
    icon: "◈",
    title: "Consistency You Can Feel",
    description:
      "One driver, one vehicle, every morning. After day one, your chauffeur understands your pace, your preferences, and when to talk and when to stay quiet.",
  },
  {
    icon: "⊙",
    title: "Zero Logistics. Zero Friction.",
    description:
      "Airport transfers, day tours, restaurant pickups — all coordinated in advance. You open the hotel door and the vehicle is already there.",
  },
  {
    icon: "◎",
    title: "Fully Tailored Pace",
    description:
      "Skip what you've seen. Spend more time at a wine farm. Add a sunset drive on a whim. Your itinerary is yours to adjust in real time, every day.",
  },
  {
    icon: "◆",
    title: "Transparent, All-Inclusive Pricing",
    description:
      "One quote covers your full programme. No daily recalculation, no metered surprises. You know the total before you confirm the booking.",
  },
];

export default function MultiDayWhy() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionEyebrow>Why Multi-Day</SectionEyebrow>
          <SectionTitle>A Different Way to See Cape Town</SectionTitle>
          <SectionText>
            Single-day hires give you a glimpse. Multi-day packages give you
            the full picture — with the same driver, the same vehicle, and none
            of the friction of arranging each day separately.
          </SectionText>
        </SectionHeader>

        <Grid>
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <IconBadge>{pillar.icon}</IconBadge>
              <CardTitle>{pillar.title}</CardTitle>
              <CardText>{pillar.description}</CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
