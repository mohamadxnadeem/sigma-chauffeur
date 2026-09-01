import type { Metadata } from "next";
import BestActivitiesPage from "../../components/sections/cape-town-activities/BestActivitiesPage";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title:
    "Best Activities in Cape Town (2026 Guide) | Private Chauffeur Day Tours | Sigma VIP",
  description:
    "Table Mountain, Cape Peninsula, Boulders Beach, the Winelands, and more, arranged as private chauffeur day tours from Cape Town. Curated experiences for families and private groups.",
  alternates: {
    canonical: `${SITE_URL}/best-activities-to-do-in-cape-town`,
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
      "Best Activities in Cape Town (2026 Guide) | Private Chauffeur Day Tours | Sigma VIP",
    description:
      "Cape Town activities including Table Mountain, Cape Peninsula, wine tours, and private chauffeur-driven experiences, arranged for families and private groups.",
    url: `${SITE_URL}/best-activities-to-do-in-cape-town`,
    siteName: "Sigma VIP",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/activities/table-mountain.jpg`,
        width: 1200,
        height: 630,
        alt: "Best activities to do in Cape Town including Table Mountain and private tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Activities in Cape Town (2026 Guide) | Private Chauffeur Day Tours | Sigma VIP",
    description:
      "Cape Town activities including Table Mountain, Cape Point, wine tours, and private chauffeur-driven experiences for families and private groups.",
    images: [`${SITE_URL}/images/activities/table-mountain.jpg`],
  },
};

export default function BestActivitiesToDoInCapeTownPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Best Activities to Do in Cape Town",
        description:
          "A complete guide to the best activities in Cape Town including Table Mountain, Cape Peninsula, wine tours, helicopter rides, safari day trips, and private chauffeur-driven experiences.",
        image: [`${SITE_URL}/images/activities/table-mountain.jpg`],
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
          "@id": `${SITE_URL}/best-activities-to-do-in-cape-town`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the best activities to do in Cape Town?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Some of the best activities in Cape Town include Table Mountain, Cape Peninsula, Cape Point, Boulders Beach penguins, Cape Winelands tours, helicopter rides, yacht charters, and scenic private chauffeur-driven experiences.",
            },
          },
          {
            "@type": "Question",
            name: "Can I do Cape Town activities with a private chauffeur?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, many of the best Cape Town activities can be enjoyed with a private chauffeur, making the day more comfortable, flexible, and seamless from start to finish.",
            },
          },
          {
            "@type": "Question",
            name: "How many Cape Town activities can you do in one day?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "That depends on the route and pace, but most private day experiences comfortably combine 2 to 4 major activities in one day.",
            },
          },
          {
            "@type": "Question",
            name: "How do I arrange a private chauffeur for Cape Town activities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Message us on WhatsApp with your dates, group size, and the activities you want to include. We will suggest a route, confirm your vehicle and chauffeur, and have everything arranged before you arrive.",
            },
          },
          {
            "@type": "Question",
            name: "Which Cape Town activities are best for first-time visitors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For first-time visitors, Table Mountain, Cape Peninsula, Cape Point, Boulders Beach, scenic coastal drives, and a Cape Winelands tour are among the most popular and rewarding experiences.",
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
            name: "Best Activities in Cape Town",
            item: `${SITE_URL}/best-activities-to-do-in-cape-town`,
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

      <BestActivitiesPage />
    </>
  );
}