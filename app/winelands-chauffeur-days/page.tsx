import type { Metadata } from "next";
import WinelandsPage from "../../components/sections/wine-farms/WineFarmsPage";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title: "Private Chauffeur Winelands Days | Stellenbosch & Franschhoek | Sigma VIP",
  description:
    "Chauffeur-arranged Winelands days from Cape Town. Stellenbosch, Franschhoek, and Constantia at your own pace — no designated driver, no group schedule, no rushing between estates.",
  alternates: {
    canonical: `${SITE_URL}/winelands-chauffeur-days`,
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
    title: "Private Chauffeur Winelands Days | Stellenbosch & Franschhoek | Sigma VIP",
    description:
      "A private chauffeur-arranged Winelands day from Cape Town. Stellenbosch, Franschhoek, or Constantia — your route, your pace, your vehicle.",
    url: `${SITE_URL}/winelands-chauffeur-days`,
    siteName: "Sigma VIP",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/wine/graff.jpg`,
        width: 1200,
        height: 630,
        alt: "Private chauffeur Winelands day from Cape Town, Sigma VIP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Chauffeur Winelands Days | Sigma VIP",
    description:
      "Chauffeur-arranged Winelands days from Cape Town. Stellenbosch, Franschhoek, Constantia — your route, your pace.",
    images: [`${SITE_URL}/images/wine/graff.jpg`],
  },
};

export default function WinelandsChauffeurDaysPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Private Chauffeur Winelands Day from Cape Town",
        serviceType: "Private Chauffeur Day Tour",
        description:
          "A chauffeur-arranged Winelands day covering Stellenbosch, Franschhoek, and Constantia. Your driver manages the route, estate timing, and return journey while you focus on the experience.",
        provider: {
          "@type": "Organization",
          name: "Sigma VIP",
          url: SITE_URL,
          telephone: "+27711081227",
        },
        areaServed: [
          { "@type": "City", name: "Cape Town" },
          { "@type": "City", name: "Stellenbosch" },
          { "@type": "City", name: "Franschhoek" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does a private chauffeur Winelands day work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your chauffeur collects you from your hotel or villa, drives you to your chosen estates, waits throughout the day, and returns you at the end. You choose the route and pace — your driver handles the timing and navigation.",
            },
          },
          {
            "@type": "Question",
            name: "Which Winelands routes does Sigma VIP cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We cover Stellenbosch, Franschhoek, Constantia, and combined routes. Most clients choose two regions in a day. Message us via WhatsApp and we will suggest a route based on your preferences and travel time.",
            },
          },
          {
            "@type": "Question",
            name: "How many estates can we visit in one day?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most Winelands days comfortably include three to four estates. We build the timing around your preferences — some clients prefer fewer estates with longer lunches, others prefer to cover more ground.",
            },
          },
          {
            "@type": "Question",
            name: "Which vehicle is recommended for a Winelands day?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For couples or up to four guests, the Mercedes S-Class or BMW X5 is ideal. For groups of five or six, the Mercedes V-Class provides comfort for a full-day journey. Message us with your group size and we will recommend accordingly.",
            },
          },
          {
            "@type": "Question",
            name: "Can the Winelands day be combined with a multi-day package?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A Winelands day is a standard part of our 5-day and 10-day multi-day packages. It can also be added as a standalone day within any custom package.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Winelands Chauffeur Days",
            item: `${SITE_URL}/winelands-chauffeur-days`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <WinelandsPage />
    </>
  );
}
