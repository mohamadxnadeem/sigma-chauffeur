"use client";

import styled from "styled-components";
import Button from "../../common/Button";
import {
  Anchor,
  Container,
  Section,
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
  SectionText,
  whatsappLink,
} from "./shared";
import { trackWhatsAppClick } from "../../../lib/tracking";

type Vehicle = {
  badge: string;
  title: string;
  ideal: string;
  description: string;
  features: string[];
};

const vehicles: Vehicle[] = [
  {
    badge: "Most Popular",
    title: "Mercedes S-Class",
    ideal: "Executive arrivals · VIP transfers",
    description:
      "The benchmark for FBO ground transport. Long-wheelbase cabin, air suspension, and near-silent refinement.",
    features: ["4 passengers", "Long wheelbase", "Chauffeur included"],
  },
  {
    badge: "Supreme Tier",
    title: "Range Rover Autobiography",
    ideal: "Multi-day hire · extended Cape Peninsula drives",
    description:
      "Massage seats, panoramic roof, Meridian audio. Supreme comfort for long-form itineraries from the moment you land.",
    features: ["4 passengers", "Panoramic roof", "Meridian audio"],
  },
  {
    badge: "Statement Vehicle",
    title: "Mercedes G-Wagon",
    ideal: "Statement arrivals · safari day-trips",
    description:
      "Commanding presence. Military heritage, interior luxury — for clients whose arrival should be noticed, on their terms.",
    features: ["4 passengers", "All-terrain capable", "High clearance"],
  },
];

const Grid = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 22px 22px 0;
`;

const Badge = styled.div`
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(201, 168, 76, 0.14);
  border: 1px solid rgba(201, 168, 76, 0.22);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  margin: 0 0 6px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.35rem;
  line-height: 1.25;
`;

const Ideal = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Body = styled.div`
  padding: 16px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.75;
  font-size: 0.96rem;
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Feature = styled.div`
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.backgroundSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 0.78rem;
  font-weight: 600;
`;

const CardFoot = styled.div`
  padding: 0 22px 22px;
`;

export default function PrivateJetFleet() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionEyebrow>Vehicles</SectionEyebrow>
          <SectionTitle>
            The Right Vehicle Waiting at the Airport
          </SectionTitle>
          <SectionText>
            Three vehicles built for the standard of client who expects
            more from an airport transfer. Choose your preference when
            you book — or let us recommend based on party size and
            onward schedule.
          </SectionText>
        </SectionHeader>

        <Grid>
          {vehicles.map((vehicle) => (
            <Card key={vehicle.title}>
              <CardHeader>
                <Badge>{vehicle.badge}</Badge>
                <Title>{vehicle.title}</Title>
                <Ideal>{vehicle.ideal}</Ideal>
              </CardHeader>

              <Body>
                <Description>{vehicle.description}</Description>
                <FeatureList>
                  {vehicle.features.map((feature) => (
                    <Feature key={feature}>{feature}</Feature>
                  ))}
                </FeatureList>
              </Body>

              <CardFoot>
                <Anchor
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: "private_jet_fleet",
                      label: vehicle.title,
                    })
                  }
                >
                  <Button as="span">Reserve This Vehicle</Button>
                </Anchor>
              </CardFoot>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
