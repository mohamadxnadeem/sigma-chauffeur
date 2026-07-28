"use client";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  padding: 72px 0;
  background: ${({ theme }) => theme.colors.white};

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

const SectionHeader = styled.div`
  max-width: 760px;
  margin-bottom: 28px;
`;

const Eyebrow = styled.div`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 2rem;
  line-height: 1.08;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const ExpandWrap = styled.div`
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;
`;

const ExpandButton = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  padding: 20px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: rgba(201, 168, 76, 0.03);
  }
`;

const ExpandTitle = styled.div`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
  line-height: 1.4;
`;

const ExpandIcon = styled.div<{ $open: boolean }>`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: rgba(201, 168, 76, 0.08);
  color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

const ExpandBody = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.25s ease;
`;

const ExpandInner = styled.div`
  overflow: hidden;
`;

const RichText = styled.div`
  padding: 0 22px 22px;

  p {
    margin: 0 0 16px;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.9;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const InlineLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ChauffeurAuthoritySection() {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <Container>
        <SectionHeader>
          <Eyebrow>Chauffeur Service Cape Town</Eyebrow>
          <Title>A Private Chauffeur Service Built Around How You Travel</Title>
        </SectionHeader>

        <RichText style={{ marginBottom: 24 }}>
          <p>
            Sigma VIP is a private chauffeur service for clients who travel
            with specific requirements. Full-day hire, multi-day packages
            across the Western Cape, FBO coordination for private jet
            arrivals, and family convoys across multiple vehicles are handled
            as a single coordinated booking. Every detail confirmed before
            you arrive.
          </p>

          <p>
            Our fleet covers every private travel requirement. The Mercedes
            S-Class and BMW X5 for clients who want the best in the
            vehicle. The Mercedes V-Class and Hyundai Staria for families
            and groups travelling together. The BMW 5-Series and Range Rover
            Sport for full-day touring across the Cape Peninsula and
            Winelands. All vehicles maintained to the same standard, all chauffeurs
            vetted and briefed before each booking.
          </p>

          <p>
            Corporate executives in Cape Town for meetings, personal
            assistants arranging a high-net-worth family visit, and private
            clients travelling with an entourage represent the majority of
            our bookings. Whether it is a C-suite arrival requiring a staged
            airport transfer and a briefed driver, or a family of eight
            needing a three-vehicle convoy for ten days across the Cape
            Peninsula and Winelands, the booking is managed the same way:
            one point of contact, every detail confirmed before you arrive.
            NDAs available on request.
          </p>

          <p>
            If your schedule is confirmed, send us the details and we will
            arrange everything. If you are still planning, we can build the
            itinerary for you.
          </p>
        </RichText>

        <ExpandWrap>
          <ExpandButton type="button" onClick={() => setOpen((v) => !v)}>
            <ExpandTitle>How every Sigma VIP booking is handled</ExpandTitle>
            <ExpandIcon $open={open}>+</ExpandIcon>
          </ExpandButton>

          <ExpandBody $open={open}>
            <ExpandInner>
              <RichText>
                <p>
                  What separates Sigma VIP is the way each booking is
                  treated as a private arrangement. Before the vehicle
                  leaves for your pickup, the chauffeur has been briefed on
                  your preferences, your schedule, and your party. There is
                  no briefing at the door.
                </p>

                <p>
                  For same-day or next-day bookings, the confirmation takes
                  minutes over WhatsApp. For multi-day packages, we plan
                  each day with you: which estates to visit, where the
                  convoy vehicles meet, how the schedule runs across the
                  party. Then we manage it on the day.
                </p>

                <p>
                  Our fleet is built for the range of requirements private
                  clients bring. From the S-Class for a principal travelling
                  alone, to a V-Class and Staria for a family of fourteen.
                  If the right vehicle combination is not immediately
                  obvious, we recommend based on your party and your
                  schedule.
                </p>

                <p>
                  For private aviation arrivals, we coordinate directly with
                  Cape Town International&apos;s private terminal team. Ramp
                  access, vehicle staging, and luggage handling are confirmed
                  before you land. Your transfer from aircraft to vehicle is
                  completed in under five minutes.
                </p>

                <p>
                  Every booking is all-inclusive. One arrangement covers the
                  vehicle, the chauffeur, fuel, tolls, and parking. Nothing
                  is added on the day. No meter, no extras, no conversation
                  about costs at the end.
                </p>
              </RichText>
            </ExpandInner>
          </ExpandBody>
        </ExpandWrap>
      </Container>
    </Section>
  );
}