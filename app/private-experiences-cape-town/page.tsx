import type { Metadata } from "next";
import PrivateExperiencesPage from "../../components/sections/cape-town-activities/BestActivitiesPage";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title: "Private Chauffeur Experiences Cape Town | Full-Day & Multi-Day | Sigma VIP",
  description:
    "Cape Town experiences arranged around private chauffeur transport. Peninsula drives, Winelands, helicopter transfers, yacht arrivals, and safari days — each coordinated by Sigma VIP from pickup to return.",
  alternates: {
    canonical: `${SITE_URL}/private-experiences-cape-town`,
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
    title: "Private Chauffeur Experiences Cape Town | Sigma VIP",
    description:
      "Cape Town experiences built around private transport. Peninsula, Winelands, helicopter, yacht, safari — arranged for private clients and executive travellers.",
    url: `${SITE_URL}/private-experiences-cape-town`,
    siteName: "Sigma VIP",
    type: "article",
    images: [
      {
        url: `${SITE_URL}/images/activities/table-mountain.jpg`,
        width: 1200,
        height: 630,
        alt: "Private chauffeur experiences Cape Town, Sigma VIP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Chauffeur Experiences Cape Town | Sigma VIP",
    description:
      "Cape Town experiences arranged around private chauffeur transport by Sigma VIP.",
    images: [`${SITE_URL}/images/activities/table-mountain.jpg`],
  },
};

export default function PrivateExperiencesCapeTownPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Private Chauffeur Experiences Cape Town",
        serviceType: "Private Chauffeur Day Experience",
        description:
          "Cape Town experiences coordinated around private chauffeur transport. Peninsula drives, Winelands, marine experiences, and safari days arranged for private clients by Sigma VIP.",
        provider: {
          "@type": "Organization",
          name: "Sigma VIP",
          url: SITE_URL,
          telephone: "+27711081227",
        },
        areaServed: { "@type": "City", name: "Cape Town" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What experiences can Sigma VIP arrange in Cape Town?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We arrange private chauffeur days for Cape Peninsula drives, Winelands touring, Table Mountain visits, Boulders Beach, Hermanus whale watching, Botlierskop Safari, and helicopter or yacht transfers. Each experience is built around private transport with your dedicated chauffeur.",
            },
          },
          {
            "@type": "Question",
            name: "Can Sigma VIP coordinate helicopter or yacht transfers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We coordinate the ground transport side of helicopter and yacht experiences — vehicle staging, timing, and return transfers. We work with your preferred operator or can recommend partners.",
            },
          },
          {
            "@type": "Question",
            name: "How do I arrange a private experience with Sigma VIP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Message us on WhatsApp with your dates, group size, and the experience you have in mind. We confirm vehicle availability, suggest a route and timing, and have everything arranged before you arrive.",
            },
          },
          {
            "@type": "Question",
            name: "Can we combine multiple experiences in one day?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Most full-day bookings combine two or three experiences. A typical day might include Table Mountain in the morning, followed by the Cape Peninsula drive and Boulders Beach in the afternoon. Your chauffeur manages the transitions.",
            },
          },
          {
            "@type": "Question",
            name: "Are private experiences suitable for corporate groups?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We regularly arrange private experience days for corporate groups, executive teams, and delegations. Multiple vehicles can be coordinated together for larger groups.",
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
            name: "Private Experiences Cape Town",
            item: `${SITE_URL}/private-experiences-cape-town`,
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
      <PrivateExperiencesPage />
    </>
  );
}
