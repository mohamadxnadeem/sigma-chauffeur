"use client";

import { useState } from "react";
import { PageWrap } from "./shared";
import PrivateJetHero from "./PrivateJetHero";
import PrivateJetAuthority from "./PrivateJetAuthority";
import PrivateJetTimeline from "./PrivateJetTimeline";
import PrivateJetFleet from "./PrivateJetFleet";
import PrivateJetFaq from "./PrivateJetFaq";
import PrivateJetFinalCta from "./PrivateJetFinalCta";
import TestimonialsSection from "../testimonials/TestimonialsSection";
import AvailableVehicles from "../shared/AvailableVehicles";

export default function PrivateJetTransferPage() {
  const [apiHasVehicles, setApiHasVehicles] = useState(false);

  return (
    <PageWrap>
      <PrivateJetHero />
      <PrivateJetAuthority />
      <PrivateJetTimeline />
      <AvailableVehicles
        title="Airport Transfer"
        onLoaded={(count) => setApiHasVehicles(count > 0)}
      />
      {!apiHasVehicles && <PrivateJetFleet />}
      <TestimonialsSection />
      <PrivateJetFaq />
      <PrivateJetFinalCta />
    </PageWrap>
  );
}
