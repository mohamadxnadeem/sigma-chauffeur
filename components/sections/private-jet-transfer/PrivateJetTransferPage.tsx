"use client";

import { PageWrap } from "./shared";
import PrivateJetHero from "./PrivateJetHero";
import PrivateJetAuthority from "./PrivateJetAuthority";
import PrivateJetTimeline from "./PrivateJetTimeline";
import PrivateJetFleet from "./PrivateJetFleet";
import PrivateJetFaq from "./PrivateJetFaq";
import PrivateJetFinalCta from "./PrivateJetFinalCta";
import TestimonialsSection from "../testimonials/TestimonialsSection";

export default function PrivateJetTransferPage() {
  return (
    <PageWrap>
      <PrivateJetHero />
      <PrivateJetAuthority />
      <PrivateJetTimeline />
      <PrivateJetFleet />
      <TestimonialsSection />
      <PrivateJetFaq />
      <PrivateJetFinalCta />
    </PageWrap>
  );
}
