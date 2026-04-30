import type { Metadata } from "next";

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
      <main style={{ padding: "120px 24px 80px", maxWidth: 720, margin: "0 auto" }}>
        <h1>Contact Sigma VIP</h1>
        <p style={{ marginTop: 16, lineHeight: 1.8 }}>
          The quickest way to reach us is via WhatsApp. We respond within
          30 minutes and confirm bookings the same day.
        </p>

        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
          <div><strong>WhatsApp:</strong>{" "}
            <a href="https://wa.me/27711081227" target="_blank" rel="noopener noreferrer">
              +27 71 108 1227
            </a>
          </div>
          <div><strong>Phone:</strong> <a href="tel:+27711081227">+27 71 108 1227</a></div>
          <div><strong>Email:</strong>{" "}
            <a href="mailto:info@sigmavip.co.za">info@sigmavip.co.za</a>
          </div>
          <div><strong>Hours:</strong> Available 7 days a week, 24 hours</div>
        </div>
      </main>
    </>
  );
}
