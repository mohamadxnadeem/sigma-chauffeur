"use client";

import { PageWrap } from "./shared";
import PrivateJetHero from "./PrivateJetHero";
import PrivateJetAuthority from "./PrivateJetAuthority";
import PrivateJetTimeline from "./PrivateJetTimeline";
import PrivateJetFleet from "./PrivateJetFleet";
import PrivateJetFaq from "./PrivateJetFaq";
import PrivateJetFinalCta from "./PrivateJetFinalCta";
import TestimonialsSection from "../testimonials/TestimonialsSection";
import FeaturedVehicles from "../FeaturedVehicles";

type VehicleItem = {
  title: string;
  slug?: string;
  description: string;
  image: string;
  seats?: number;
};

type Props = {
  vehicles?: VehicleItem[];
};

export default function PrivateJetTransferPage({ vehicles = [] }: Props) {
  const vehicleItems = vehicles.map((v) => ({
    ...v,
    href: typeof v.slug === "string" && v.slug.trim() ? `/chauffeur-services/${v.slug.trim()}` : "/#fleet",
  }));

  return (
    <PageWrap>
      <PrivateJetHero />
      <PrivateJetAuthority />
      <PrivateJetTimeline />
      <div id="fleet">
        {vehicleItems.length > 0 ? (
          <FeaturedVehicles
            eyebrow="Our Fleet"
            title="The Right Vehicle for Your Transfer"
            description="Choose your vehicle when you book, or let us recommend based on party size and onward schedule."
            items={vehicleItems}
          />
        ) : (
          <PrivateJetFleet />
        )}
      </div>
      <TestimonialsSection />
      <PrivateJetFaq />
      <PrivateJetFinalCta />
    </PageWrap>
  );
}
