// app/7-day-cape-town-itinerary/page.tsx

import type { Metadata } from "next";
import ItineraryPage from "../../components/sections/cape-town-itinerary/ItineraryPage";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title:
    "7 Day Cape Town Itinerary | Private Chauffeur Travel Guide 2026 | Sigma VIP",
  description:
    "A curated seven-day Cape Town itinerary for private chauffeur travel. Cape Peninsula, Winelands, Hermanus, and the city, arranged around your schedule with the same vehicle and driver throughout.",
  alternates: {
    canonical: `${SITE_URL}/7-day-cape-town-itinerary`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "7 Day Cape Town Itinerary | Private Chauffeur Travel Guide | Sigma VIP",
    description:
      "Seven days in Cape Town with a private chauffeur. Cape Peninsula, Winelands, Hermanus, and more, arranged as a single booking with Sigma VIP.",
    url: `${SITE_URL}/7-day-cape-town-itinerary`,
    siteName: "Sigma VIP",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/itinerary/cape-point.jpg`,
        width: 1200,
        height: 630,
        alt: "Cape Peninsula scenic drive and Cape Point on a Cape Town itinerary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "7 Day Cape Town Itinerary | Private Chauffeur Travel Guide | Sigma VIP",
    description:
      "Seven days in Cape Town, arranged by Sigma VIP. Cape Peninsula, Winelands, Hermanus, and the city, with private chauffeur travel throughout.",
    images: [`${SITE_URL}/images/itinerary/cape-point.jpg`],
  },
};

export default function SevenDayCapeTownItineraryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "7 Day Cape Town Itinerary",
        description:
          "A complete 7 day Cape Town itinerary covering Table Mountain, Cape Peninsula, Cape Winelands, beaches, and luxury private experiences.",
        image: [`${SITE_URL}/images/itinerary/cape-point.jpg`],
        author: {
          "@type": "Organization",
          name: "Sigma VIP",
        },
        publisher: {
          "@type": "Organization",
          name: "Sigma VIP",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/7-day-cape-town-itinerary`,
        },
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is 7 days enough for Cape Town?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, 7 days is ideal to experience Cape Town, including Table Mountain, Cape Peninsula, wine farms, beaches, and luxury activities without feeling rushed.",
            },
          },
          {
            "@type": "Question",
            name: "What should I include in a Cape Town itinerary?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A well-planned itinerary should include Table Mountain, Cape Peninsula, Cape Point, Boulders Beach, Cape Winelands, and scenic coastal drives like Chapman’s Peak.",
            },
          },
          {
            "@type": "Question",
            name: "Can I do Cape Town in a private chauffeur experience?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, a private chauffeur allows you to explore Cape Town comfortably with flexible timing, local insights, and a premium travel experience.",
            },
          },
          {
            "@type": "Question",
            name: "What is the best order for a Cape Town itinerary?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A typical flow includes arrival and city highlights, Cape Peninsula, Winelands, leisure/beach days, and luxury add-on experiences before departure.",
            },
          },
          {
            "@type": "Question",
            name: "Should I book Cape Town tours in advance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, booking in advance ensures availability for top experiences, especially private tours, wine estates, and premium activities.",
            },
          },
        ],
      },

      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "7 Day Cape Town Itinerary",
            item: `${SITE_URL}/7-day-cape-town-itinerary`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <ItineraryPage />
    </>
  );
}