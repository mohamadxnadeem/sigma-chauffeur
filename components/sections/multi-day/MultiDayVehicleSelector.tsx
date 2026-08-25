"use client";

import { useState } from "react";
import MonitoredImage from "../../common/MonitoredImage";
import styled, { keyframes } from "styled-components";
import Button from "../../common/Button";
import {
  Container,
  Section,
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
  SectionText,
  Anchor,
} from "./shared";
import { trackWhatsAppClick } from "../../../lib/tracking";
import { buildWhatsAppLink } from "../../../lib/whatsapp";

type Vehicle = {
  title: string;
  slug?: string;
  description: string;
  image: string;
  seats?: number;
};

type Props = {
  vehicles?: Vehicle[];
};

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const Grid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ImageWrap = styled.div`
  position: relative;
  height: 220px;
  background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
  overflow: hidden;
`;

const ShimmerLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(201, 168, 76, 0.15) 40%,
      rgba(201, 168, 76, 0.25) 50%,
      rgba(201, 168, 76, 0.15) 60%,
      transparent 100%
    );
    animation: ${shimmer} 1.8s ease-in-out infinite;
  }
`;

const Overlay = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.06));
`;

const CardBody = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MetaRow = styled.div`
  margin-bottom: 10px;
`;

const SeatBadge = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(201, 168, 76, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.1rem;
  line-height: 1.2;
`;

const CardText = styled.p`
  margin: 0 0 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.92rem;
  line-height: 1.7;
  flex: 1;
`;

const EmptyState = styled.div`
  padding: 28px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

function VehicleImage({ image, title }: { image: string; title: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageWrap>
      {!loaded && <ShimmerLayer />}
      {image ? (
        <MonitoredImage
          src={image}
          alt={`${title} — Multi-Day Chauffeur Cape Town`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          onLoad={() => setLoaded(true)}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
        />
      ) : null}
      <Overlay />
    </ImageWrap>
  );
}

export default function MultiDayVehicleSelector({ vehicles = [] }: Props) {
  return (
    <Section id="fleet">
      <Container>
        <SectionHeader>
          <SectionEyebrow>Choose Your Vehicle</SectionEyebrow>
          <SectionTitle>Premium Vehicles for Every Group Size</SectionTitle>
          <SectionText>
            Every vehicle in our fleet is maintained to the same standard. Solo
            travellers, couples, families, and executive groups all have the
            right vehicle available for a multi-day hire.
          </SectionText>
        </SectionHeader>

        {vehicles.length === 0 ? (
          <EmptyState>Fleet information loading. Contact us directly via WhatsApp for vehicle availability.</EmptyState>
        ) : (
          <Grid>
            {vehicles.map((vehicle) => {
              const waLink = buildWhatsAppLink(
                `Hi, I'd like to reserve the ${vehicle.title} for a multi-day package in Cape Town. My dates:`
              );

              return (
                <Card key={vehicle.title}>
                  <VehicleImage image={vehicle.image} title={vehicle.title} />
                  <CardBody>
                    <MetaRow>
                      {vehicle.seats ? (
                        <SeatBadge>{vehicle.seats} Seats</SeatBadge>
                      ) : null}
                    </MetaRow>
                    <CardTitle>{vehicle.title}</CardTitle>
                    <CardText>{vehicle.description}</CardText>
                    <Anchor
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cta="whatsapp-multiday"
                      onClick={() =>
                        trackWhatsAppClick({
                          source: "multiday_vehicle_selector",
                          label: `Reserve ${vehicle.title}`,
                        })
                      }
                    >
                      <Button as="span" $variant="secondary" style={{ width: "100%" }}>
                        Reserve This Vehicle
                      </Button>
                    </Anchor>
                  </CardBody>
                </Card>
              );
            })}
          </Grid>
        )}
      </Container>
    </Section>
  );
}
