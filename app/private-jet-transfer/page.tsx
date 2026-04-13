// app/private-jet-transfer/page.tsx

import type { Metadata } from "next";
import PrivateJetTransferPage from "../../components/sections/private-jet-transfer/PrivateJetTransferPage";
import { privateJetFaqItems } from "../../components/sections/private-jet-transfer/PrivateJetFaq";

const SITE_URL = "https://www.sigmavip.co.za";

export const metadata: Metadata = {
  title:
    "Private Jet Transfer Cape Town | FBO Ground Transport | Sigma VIP",
  description:
    "Tarmac pickup from the FBO at Cape Town International Airport. Flight tracking, ramp coordination and ultra-luxury ground transport for private jet arrivals. Available 24/7.",

  alternates: {
    canonical: `${SITE_URL}/private-jet-transfer`,
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
      "Private Jet Transfer Cape Town | FBO Ground Transport | Sigma VIP",
    description:
      "Ultra-luxury ground transport for private jet arrivals at Cape Town International. Tail-number tracking, FBO coordination, and discreet chauffeur service.",
    url: `${SITE_URL}/private-jet-transfer`,
    siteName: "Sigma VIP",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "Sigma VIP — private jet FBO transfer Cape Town",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Private Jet Transfer Cape Town | Sigma VIP",
    description:
      "Tarmac pickup, flight tracking, and ultra-luxury ground transport for private jet arrivals in Cape Town.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

export default function PrivateJetTransferRoute() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Private Jet FBO Ground Transport",
        name: "Sigma VIP Private Jet Transfer — Cape Town",
        description:
          "Ultra-luxury ground transport for private jet arrivals at Cape Town International Airport. Includes tail-number tracking, FBO coordination, vehicle staging, and discreet chauffeur service.",
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
          address: {
            "@type": "PostalAddress",
            streetAddress: "23 Aberdeen Road, Rondebosch",
            addressLocality: "Cape Town",
            postalCode: "7700",
            addressCountry: "ZA",
          },
        },
        areaServed: {
          "@type": "City",
          name: "Cape Town",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE_URL}/private-jet-transfer`,
          servicePhone: "+27 71 108 1227",
        },
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
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
            name: "Private Jet Transfer",
            item: `${SITE_URL}/private-jet-transfer`,
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
      <PrivateJetTransferPage />
    </>
  );
}
