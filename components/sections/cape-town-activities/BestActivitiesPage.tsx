"use client";

import { activities, travelerTypes } from "./data";
import ActivitiesHero from "./ActivitiesHero";
import ActivitiesTimeline from "./ActivitiesTimeline";
import ActivitiesTravellerTypes from "./ActivitiesTravellerTypes";
import { PageWrap } from "./shared";

import TestimonialsSection from "../testimonials/TestimonialsSection";
import TestimonialsCta from "../testimonials/TestimonialsCta";
import FeaturedExperiences from "../FeaturedExperiences";
import GuideEnquirySection from "../shared/GuideEnquirySection";

type FeaturedExperienceItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

type Props = {
  featuredExperienceItems?: FeaturedExperienceItem[];
};

export default function BestActivitiesPage({
  featuredExperienceItems = [],
}: Props) {
  return (
    <PageWrap>
      <ActivitiesHero />

      <ActivitiesTimeline activities={activities} />

      <FeaturedExperiences
        title="Best Private Tours & Experiences in Cape Town"
        description="Discover some of the most popular private experiences in Cape Town, from scenic coastal routes and Cape Peninsula highlights to wine tours, luxury activities, and curated chauffeur-driven days."
        items={featuredExperienceItems}
      />

      <ActivitiesTravellerTypes items={travelerTypes} />

      <GuideEnquirySection
        eyebrow="Arrange Your Cape Town Experience"
        title="Tell Us What You'd Like to Do"
        description="We coordinate the transport side of any Cape Town experience — Peninsula drives, helicopter transfers, Boulders Beach, wine farms, safari days, or a full custom day."
        formTitle="Arrange a Private Experience"
        trustPoints={[
          "Private vehicle — no shared transfers",
          "One chauffeur manages your whole day",
          "Can combine multiple experiences in one day",
          "Suitable for individuals, families, and corporate groups",
        ]}
        waContext="a private experience day in Cape Town"
        trackingSource="activities_enquiry"
      />
      <TestimonialsSection />
      <TestimonialsCta />
    </PageWrap>
  );
}
