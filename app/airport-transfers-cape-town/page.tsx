import type { Metadata } from "next";
import AirportTransfersPage from "../../components/sections/private-jet-transfer/PrivateJetTransferPage";
import { privateJetFaqItems } from "../../components/sections/private-jet-transfer/faqData";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title:
    "Airport Transfers Cape Town | Luxury Chauffeur Pickup & Drop-off | Sigma VIP",
  description:
    "Premium airport transfers at Cape Town International Airport. Flight tracking, meet-and-greet, private jet FBO coordination, and luxury chauffeur service. Available 24/7.",

  alternates: {
    canonical: `${SITE_URL}/airport-transfers-cape-town`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Airport Transfers Cape Town | Luxury Chauffeur Pickup & Drop-off | Sigma VIP",
    description:
      "Premium airport transfers in Cape Town. Flight tracking, luxury vehicles, and professional chauffeur service for arrivals and departures.",
    url: `${SITE_URL}/airport-transfers-cape-town`,
    siteName: "Sigma VIP",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 520,
        height: 520,
        alt: "Sigma VIP — airport transfers Cape Town",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Airport Transfers Cape Town | Sigma VIP",
    description:
      "Luxury airport transfers with flight tracking and professional chauffeur service in Cape Town.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

export default function AirportTransfersRoute() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Airport Transfer Service",
        name: "Sigma VIP Airport Transfers — Cape Town",
        description:
          "Premium airport transfers at Cape Town International Airport. Includes flight tracking, meet-and-greet, private jet FBO coordination, vehicle staging, and luxury chauffeur service. Available 24/7.",
        provider: {
          "@type": "Organization",
          name: "Sigma VIP",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo.png`,
          },
          telephone: "+27 71 108 1227",
          email: "info@sigmavip.co.za",
        },
        areaServed: {
          "@type": "City",
          name: "Cape Town",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE_URL}/airport-transfers-cape-town`,
          servicePhone: "+27 71 108 1227",
        },
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: privateJetFaqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
            name: "Airport Transfers",
            item: `${SITE_URL}/airport-transfers-cape-town`,
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
      <AirportTransfersPage />
    </>
  );
}
