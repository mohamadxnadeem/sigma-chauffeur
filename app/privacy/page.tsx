import type { Metadata } from "next";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title: "Privacy Policy | Sigma VIP",
  description:
    "Privacy policy for Sigma VIP private chauffeur services. How we collect, use, and protect your personal information.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "80px 24px 80px",
        color: "rgba(255,255,255,0.85)",
        fontFamily: "inherit",
        lineHeight: 1.8,
      }}
    >
      <h1
        style={{
          color: "#ffffff",
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        Privacy Policy
      </h1>
      <p
        style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: "0.88rem",
          marginBottom: 40,
        }}
      >
        Last updated: 1 September 2026
      </p>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          1. Who we are
        </h2>
        <p>
          Sigma VIP is a private chauffeur service operating in Cape Town and
          the Western Cape, South Africa. When you contact us, make a booking,
          or use this website, you are interacting with Sigma VIP. Any questions
          about this policy can be directed to us via WhatsApp at{" "}
          <a
            href="tel:+27711081227"
            style={{ color: "#C9A84C", textDecoration: "none" }}
          >
            +27 71 108 1227
          </a>
          .
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          2. Information we collect
        </h2>
        <p>We collect only the information needed to arrange and confirm your booking:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>Your name</li>
          <li>Contact details (WhatsApp number, phone number, or email address)</li>
          <li>Travel details (dates, times, pickup and drop-off locations, flight number)</li>
          <li>Vehicle and service preferences</li>
          <li>Any other information you choose to share with us during the booking process</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          We do not collect payment card details directly. If payment is processed
          electronically, it is handled by a third-party provider under their own
          privacy policy.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          3. How we use your information
        </h2>
        <p>Your personal information is used to:</p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>Arrange, confirm, and manage your chauffeur booking</li>
          <li>Contact you regarding your booking or any changes to it</li>
          <li>Respond to enquiries</li>
          <li>Comply with any legal obligations</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          We do not use your information for unsolicited marketing, and we do not
          sell or share your personal data with third parties for commercial
          purposes.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          4. How long we keep your information
        </h2>
        <p>
          We retain booking records for up to 12 months after your travel date.
          After this period, personal data associated with completed bookings is
          deleted unless a legal or accounting obligation requires us to keep it
          longer.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          5. Website analytics
        </h2>
        <p>
          This website uses Google Analytics to understand how visitors use our
          pages (page views, referral sources, device types). This data is
          anonymised and aggregated. We do not use it to identify individual
          visitors. You can opt out of Google Analytics tracking by using the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C9A84C", textDecoration: "none" }}
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          6. Your rights (POPIA)
        </h2>
        <p>
          Under the Protection of Personal Information Act (POPIA), you have the
          right to:
        </p>
        <ul style={{ paddingLeft: 20, marginTop: 8 }}>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information (subject to legal retention requirements)</li>
          <li>Object to the processing of your information</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          To exercise any of these rights, contact us on WhatsApp at{" "}
          <a
            href="tel:+27711081227"
            style={{ color: "#C9A84C", textDecoration: "none" }}
          >
            +27 71 108 1227
          </a>
          . We will respond within 21 days.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          7. Changes to this policy
        </h2>
        <p>
          We may update this policy from time to time. The date at the top of
          this page reflects the most recent revision. Continued use of our
          services after any change constitutes acceptance of the updated policy.
        </p>
      </section>
    </main>
  );
}
