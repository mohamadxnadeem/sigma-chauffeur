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

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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

type Pillar = {
  icon: string;
  title: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    icon: "✈",
    title: "Live Flight Tracking",
    description:
      "We monitor your tail number from departure. If your arrival shifts, your chauffeur moves with it, with no recalculation on your side.",
  },
  {
    icon: "✦",
    title: "FBO Coordination",
    description:
      "We work directly with the FBO team on the private terminal side. Ramp passes, vehicle clearance, luggage handling, all arranged before you land.",
  },
  {
    icon: "⌾",
    title: "Vehicle Staged Early",
    description:
      "Your Mercedes S-Class, BMW X5 or V-Class is positioned at the FBO before your wheels touch down. You step off, the door opens, you are already moving.",
  },
  {
    icon: "◆",
    title: "Absolute Discretion",
    description:
      "NDAs on request. No photographs. No small talk unless invited. Every chauffeur is vetted, uniformed, and trained to disappear into the background.",
  },
];

export default function PrivateJetAuthority() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionEyebrow>Why Sigma VIP</SectionEyebrow>
          <SectionTitle>
            A Different Standard of Airport Transfer
          </SectionTitle>
          <SectionText>
            Most transfer services start when you walk out of the terminal.
            Ours starts when your flight pushes back from its origin gate.
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
