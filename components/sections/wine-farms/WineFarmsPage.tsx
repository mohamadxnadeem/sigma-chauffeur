"use client";

import { PageWrap } from "./shared";
import WineHero from "./WineHero";
import WineTimeline from "./WineTimeline";
import WineRegions from "./WineRegions";
import WineByTravelStyle from "./WineByTravelStyle";
import WineServices from "./WineServices";
import WineFaq from "./WineFaq";
import WineFinalCta from "./WineFinalCta";
import AvailableVehicles from "../shared/AvailableVehicles";
import TestimonialsSection from "../testimonials/TestimonialsSection";
import TestimonialsCta from "../testimonials/TestimonialsCta";
import GuideEnquirySection from "../shared/GuideEnquirySection";
import { wineFarms, wineFaqItems } from "./data";

export default function WineFarmsPage() {
  return (
    <PageWrap>
      <WineHero />
      <WineTimeline items={wineFarms} />
      <AvailableVehicles title="Private Wine Tour in Cape Town" />
      <WineRegions />
      <WineByTravelStyle />
      <WineServices />
      <WineFaq items={wineFaqItems} />
      <GuideEnquirySection
        eyebrow="Plan Your Winelands Day"
        title="Tell Us Which Estates Interest You"
        description="We arrange the route, the timing, and the vehicle. You choose the pace. Message us your date and we'll put together a plan."
        formTitle="Arrange a Winelands Day"
        trustPoints={[
          "Same private chauffeur throughout the day",
          "No designated driver concerns",
          "Custom route — your estates, your order",
          "Flexible timing — linger as long as you like",
        ]}
        waContext="a private Winelands chauffeur day from Cape Town"
        trackingSource="winelands_enquiry"
      />
      <TestimonialsSection />
      <TestimonialsCta />
      <WineFinalCta />
    </PageWrap>
  );
}