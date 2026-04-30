import type { Metadata } from "next";
import ContactContent from "./ContactContent";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title: "Contact Sigma VIP | Luxury Chauffeur Service Cape Town",
  description:
    "Get in touch with Sigma VIP for luxury chauffeur services, private tours, and airport transfers in Cape Town. Reach us via WhatsApp, phone, or email.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
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
    title: "Contact Sigma VIP | Luxury Chauffeur Service Cape Town",
    description:
      "Reach Sigma VIP for luxury chauffeur services, private tours, and airport transfers in Cape Town.",
    url: `${SITE_URL}/contact`,
    siteName: "Sigma VIP",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 520,
        height: 520,
        alt: "Sigma VIP — Luxury Chauffeur & Tourism",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Contact Sigma VIP | Luxury Chauffeur Service Cape Town",
    description:
      "Reach Sigma VIP for luxury chauffeur services, private tours, and airport transfers in Cape Town.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "Sigma VIP",
      url: SITE_URL,
      telephone: "+27 71 108 1227",
      email: "info@sigmavip.co.za",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ContactContent />
    </>
  );
}
