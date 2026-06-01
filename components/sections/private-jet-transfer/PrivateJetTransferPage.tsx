"use client";

import { PageWrap } from "./shared";
import PrivateJetHero from "./PrivateJetHero";
import PrivateJetAuthority from "./PrivateJetAuthority";
import PrivateJetTimeline from "./PrivateJetTimeline";
import PrivateJetFaq from "./PrivateJetFaq";
import PrivateJetFinalCta from "./PrivateJetFinalCta";
import TestimonialsSection from "../testimonials/TestimonialsSection";
import AvailableVehicles from "../shared/AvailableVehicles";

export default function PrivateJetTransferPage() {
  return (
    <PageWrap>
      <PrivateJetHero />
      <PrivateJetAuthority />
      <PrivateJetTimeline />
      <AvailableVehicles title="Airport Transfer" />
      <TestimonialsSection />
      <PrivateJetFaq />
      <PrivateJetFinalCta />
    </PageWrap>
  );
}
