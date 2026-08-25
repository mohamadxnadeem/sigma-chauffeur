"use client";

import { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import {
  Container,
  SectionWhite,
  SectionEyebrow,
  SectionHeader,
  SectionTitle,
  SectionText,
  Anchor,
} from "./shared";
import { trackWhatsAppClick } from "../../../lib/tracking";
import { buildWhatsAppLink } from "../../../lib/whatsapp";

const Grid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
`;

const Card = styled.div`
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;
`;

const CardTop = styled.div`
  padding: 26px 24px 20px;
`;

const PackageBadge = styled.div`
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(201, 168, 76, 0.10);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const PackageTitle = styled.h3`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.3rem;
  line-height: 1.2;
`;

const PackageIdeal = styled.p`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const IncludesList = styled.ul`
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const IncludesItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.93rem;
  line-height: 1.55;
`;

const CheckIcon = styled.span`
  flex-shrink: 0;
  margin-top: 1px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.85rem;
`;

const ExpandButton = styled.button`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  text-align: left;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 0.9rem;
  font-weight: 600;

  &:hover {
    background: rgba(201, 168, 76, 0.03);
  }
`;

const ExpandIcon = styled.span<{ $open: boolean }>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  background: rgba(201, 168, 76, 0.08);
  flex-shrink: 0;
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

const ExpandContent = styled.div`
  padding: 16px 24px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ExpandText = styled.p`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.93rem;
  line-height: 1.75;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CardFooter = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type Package = {
  badge: string;
  title: string;
  ideal: string;
  includes: string[];
  expandTitle: string;
  expandText: string[];
  whatsappText: string;
};

const packages: Package[] = [
  {
    badge: "3 Days",
    title: "Cape Town Highlight",
    ideal: "Ideal for first-time visitors, couples, and short stays.",
    includes: [
      "Airport transfer on arrival and departure",
      "Full-day Cape Peninsula tour (Chapman's Peak, Cape Point, Boulders Beach)",
      "City day with Table Mountain, Bo-Kaap, and V&A Waterfront",
      "Same vehicle and chauffeur throughout",
    ],
    expandTitle: "What makes this package work",
    expandText: [
      "Three days is enough to see the essential Cape Town without feeling rushed. The Peninsula is a long scenic drive best done with a private driver who can stop at the right viewpoints, time the tides at Boulders Beach, and adjust the route based on conditions.",
      "Your chauffeur handles all logistics from airport to hotel to every stop along the way. By the second morning, they already know your preferences. That consistency is what separates a multi-day hire from a series of separate bookings.",
    ],
    whatsappText:
      "Hi, I'm interested in the 3-Day Cape Town Highlight package. My travel dates and party size:",
  },
  {
    badge: "5 Days",
    title: "Cape Town & Winelands",
    ideal: "Ideal for extended first visits, wine lovers, and families.",
    includes: [
      "Everything in the 3-Day Highlight package",
      "Full Winelands day in Stellenbosch and Franschhoek",
      "Hermanus coastal drive and whale-watching viewpoints",
      "One flexible day to tailor around your interests",
    ],
    expandTitle: "Why five days is the best introduction",
    expandText: [
      "Five days gives you the Cape Peninsula, the Winelands, and the Garden Route coastline without the compromise of rushing any of them. The Winelands alone deserve a full day — multiple estates, a long lunch, and the scenic drive back through the mountain passes.",
      "Hermanus is the kind of place most visitors skip because it feels too far. With a private chauffeur, the drive becomes part of the experience rather than a chore. Your flexible fifth day can go to Aquila Game Reserve, a second Winelands day, or simply time in Camps Bay with no fixed schedule.",
    ],
    whatsappText:
      "Hi, I'm interested in the 5-Day Cape Town & Winelands package. My travel dates and party size:",
  },
  {
    badge: "10 Days",
    title: "Full Cape Experience",
    ideal: "Ideal for luxury extended stays and anniversary trips.",
    includes: [
      "Everything in the 5-Day package",
      "Garden Route day excursion (Knysna, Tsitsikamma, or Oudtshoorn)",
      "Aquila Private Game Reserve safari transfer",
      "Five fully flexible days for custom exploration",
      "Priority vehicle and chauffeur reservation",
    ],
    expandTitle: "Ten days done properly",
    expandText: [
      "Ten days with a private chauffeur is the fullest Cape Town experience available. You see the Peninsula, the Winelands, Hermanus, the Garden Route, and a Big Five safari — all without touching a steering wheel or waiting for a group tour to assemble.",
      "The five flexible days in the ten-day programme are yours to use however you choose. A return to a wine farm, a half-day in Kalk Bay, a private yacht charter, or simply a late morning in Clifton. Your chauffeur is there, ready, whenever you are.",
    ],
    whatsappText:
      "Hi, I'm interested in the 10-Day Full Cape Experience package. My travel dates and party size:",
  },
];

export default function MultiDayPackages() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWhite id="packages">
      <Container>
        <SectionHeader>
          <SectionEyebrow>Our Packages</SectionEyebrow>
          <SectionTitle>Choose How Long You Want to Stay</SectionTitle>
          <SectionText>
            Three curated programmes — or we build something entirely custom.
            Every package includes airport transfers, day touring, and the same
            dedicated chauffeur for the full duration.
          </SectionText>
        </SectionHeader>

        <Grid>
          {packages.map((pkg, index) => {
            const isOpen = openIndex === index;
            const waLink = buildWhatsAppLink(pkg.whatsappText);

            return (
              <Card key={pkg.title}>
                <CardTop>
                  <PackageBadge>{pkg.badge}</PackageBadge>
                  <PackageTitle>{pkg.title}</PackageTitle>
                  <PackageIdeal>{pkg.ideal}</PackageIdeal>
                  <IncludesList>
                    {pkg.includes.map((item) => (
                      <IncludesItem key={item}>
                        <CheckIcon>✦</CheckIcon>
                        {item}
                      </IncludesItem>
                    ))}
                  </IncludesList>
                </CardTop>

                <ExpandButton
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {pkg.expandTitle}
                  <ExpandIcon $open={isOpen}>+</ExpandIcon>
                </ExpandButton>

                <ExpandBody $open={isOpen}>
                  <ExpandInner>
                    <ExpandContent>
                      {pkg.expandText.map((para, i) => (
                        <ExpandText key={i}>{para}</ExpandText>
                      ))}
                    </ExpandContent>
                  </ExpandInner>
                </ExpandBody>

                <CardFooter>
                  <Anchor
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp-multiday"
                    onClick={() =>
                      trackWhatsAppClick({
                        source: `multiday_package_${index + 1}`,
                        label: `Enquire — ${pkg.title}`,
                      })
                    }
                  >
                    <Button as="span" style={{ width: "100%" }}>
                      Enquire About This Package
                    </Button>
                  </Anchor>
                </CardFooter>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </SectionWhite>
  );
}
