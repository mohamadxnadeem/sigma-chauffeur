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
          <Title>The Premier Chauffeur & Private Tour Service in Cape Town</Title>
        </SectionHeader>

        <RichText style={{ marginBottom: 24 }}>
          <p>
            Sigma VIP is a private chauffeur service built for clients who
            expect more than transport. Full-day hire, multi-day packages
            across the Western Cape, and private jet FBO coordination at
            Cape Town International — every booking handled with complete
            discretion and no room for error.
          </p>

          <p>
            Our fleet is positioned for discerning travel. The Mercedes
            S-Class and G-Wagon for clients who require the pinnacle. The
            Range Rover Sport for those who want presence and performance.
            The Mercedes V-Class for private groups and families travelling
            together. Every vehicle maintained to the same standard, every
            chauffeur vetted and briefed before each booking.
          </p>

          <p>
            Most clients arrive with a destination in mind and leave with a
            week they didn&apos;t expect. The{" "}
            <InlineLink href="/best-activities-to-do-in-cape-town">
              Cape Peninsula
            </InlineLink>{" "}
            in the morning, Franschhoek for lunch, back in Cape Town for
            sunset — arranged over WhatsApp in under thirty minutes.
            Multi-day packages across{" "}
            <InlineLink href="/best-wine-farms-in-cape-town">
              Stellenbosch and the Winelands
            </InlineLink>
            , Hermanus, and the Garden Route handled as a single booking.
            Private jet arrivals managed from ramp to villa.
          </p>

          <p>
            If you know what you want, message us. If you want
            recommendations, we&apos;ll plan the whole thing.
          </p>
        </RichText>

        <ExpandWrap>
          <ExpandButton type="button" onClick={() => setOpen((v) => !v)}>
            <ExpandTitle>Why our chauffeur service stands out in Cape Town</ExpandTitle>
            <ExpandIcon $open={open}>+</ExpandIcon>
          </ExpandButton>

          <ExpandBody $open={open}>
            <ExpandInner>
              <RichText>
                <p>
                  What separates Sigma VIP from other Cape Town chauffeur
                  services is the combination of fleet quality, operational
                  precision, and a client-first approach that extends well
                  beyond the vehicle.
                </p>

                <p>
                  Every booking begins with a conversation. We want to
                  understand your schedule, your preferences, and your
                  expectations before we confirm anything. For single-day
                  bookings this takes minutes. For multi-day packages we
                  take the time to understand the full itinerary — which
                  estates to visit, where to stop on the Garden Route, how
                  many hours you want at each location — and build the
                  schedule around you.
                </p>

                <p>
                  Our fleet spans the full range of private transport
                  requirements. From the Mercedes S-Class and G-Wagon for
                  clients who require the absolute best, to the BMW X5 and
                  Range Rover Sport for full-day touring, the Mercedes
                  V-Class for group and family travel, and the Hyundai
                  Staria for larger parties on multi-day routes.
                </p>

                <p>
                  For private aviation clients, we provide a dedicated FBO
                  service at Cape Town International. We coordinate directly
                  with the private terminal team on ramp access, luggage
                  handling, and vehicle staging — so your transfer from
                  aircraft to vehicle takes under five minutes. NDAs
                  available on request.
                </p>

                <p>
                  All bookings are all-inclusive. One arrangement covers the
                  vehicle, chauffeur, fuel, tolls, and parking. There are no
                  hidden fees, no end-of-day additions, and no surprises on
                  the invoice.
                </p>
              </RichText>
            </ExpandInner>
          </ExpandBody>
        </ExpandWrap>
      </Container>
    </Section>
  );
}