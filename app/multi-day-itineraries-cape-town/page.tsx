import type { Metadata } from "next";
import MultiDayItinerariesPage from "../../components/sections/cape-town-itinerary/ItineraryPage";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title: "Multi-Day Chauffeur Itineraries Cape Town | 3 to 10 Days | Sigma VIP",
  description:
    "Private chauffeur itineraries for 3, 5, 7, and 10-day stays in Cape Town. Same vehicle and driver throughout, custom routing, and all-inclusive daily rates. Arrange via WhatsApp.",
  alternates: {
    canonical: `${SITE_URL}/multi-day-itineraries-cape-town`,
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
    title: "Multi-Day Chauffeur Itineraries Cape Town | 3 to 10 Days | Sigma VIP",
    description:
      "Private chauffeur itineraries for 3 to 10 days in Cape Town. Same driver daily, custom routing, all-inclusive pricing.",
    url: `${SITE_URL}/multi-day-itineraries-cape-town`,
    siteName: "Sigma VIP",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/itinerary/cape-point.jpg`,
        width: 1200,
        height: 630,
        alt: "Multi-day private chauffeur itinerary Cape Town, Sigma VIP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Day Chauffeur Itineraries Cape Town | Sigma VIP",
    description:
      "Private chauffeur itineraries for 3 to 10 days in Cape Town. Same driver daily, all-inclusive pricing.",
    images: [`${SITE_URL}/images/itinerary/cape-point.jpg`],
  },
};

export default function MultiDayItinerariesCapeTownPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Multi-Day Private Chauffeur Itineraries Cape Town",
        serviceType: "Multi-Day Private Chauffeur Package",
        description:
          "Private chauffeur itineraries for 3 to 10 days in Cape Town and the Western Cape. Same vehicle and driver throughout. Custom routing. All-inclusive daily rates.",
        provider: {
          "@type": "Organization",
          name: "Sigma VIP",
          url: SITE_URL,
          telephone: "+27711081227",
        },
        areaServed: [
          { "@type": "City", name: "Cape Town" },
          { "@type": "State", name: "Western Cape" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does a multi-day chauffeur itinerary include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every multi-day itinerary includes airport transfers on arrival and departure, full-day chauffeur service on each scheduled day, and the same driver throughout. Specific activities such as wine estate visits or safari days are arranged on request.",
            },
          },
          {
            "@type": "Question",
            name: "Do we have the same chauffeur for the entire stay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The same driver is assigned for the full duration of your stay. By day two, they know your preferences, pace, and schedule. This is central to how multi-day arrangements work at Sigma VIP.",
            },
          },
          {
            "@type": "Question",
            name: "How is a multi-day Cape Town itinerary structured?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A typical multi-day itinerary starts with an airport transfer and city orientation, followed by dedicated days covering the Cape Peninsula, Winelands, Hermanus or the Garden Route, and any specific experiences you want to include. The order and pace are adjusted around your schedule.",
            },
          },
          {
            "@type": "Question",
            name: "Can the itinerary be customised?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fully. The sample itineraries are starting points. You can add days, swap destinations, include a Garden Route extension, or build a bespoke programme. Message us via WhatsApp with your dates and we will draft a plan.",
            },
          },
          {
            "@type": "Question",
            name: "How does pricing work for multi-day itineraries?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Multi-day itineraries are priced as an all-inclusive daily rate covering chauffeur, vehicle, and fuel. You receive one quote before confirming. There are no daily recalculations or metered charges.",
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
            name: "Multi-Day Itineraries Cape Town",
            item: `${SITE_URL}/multi-day-itineraries-cape-town`,
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
      <MultiDayItinerariesPage />
    </>
  );
}
