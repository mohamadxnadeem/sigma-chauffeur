import type { Metadata } from "next";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title: "Cancellation Policy | Sigma VIP",
  description:
    "Cancellation and amendment policy for Sigma VIP private chauffeur bookings in Cape Town.",
  alternates: {
    canonical: `${SITE_URL}/cancellation-policy`,
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function CancellationPolicyPage() {
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
        Cancellation Policy
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
          Single bookings and day hires
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.95rem",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "10px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                Notice given
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "10px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                Charge
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["More than 48 hours before pickup", "No charge"],
              ["24 – 48 hours before pickup", "50% of the agreed booking fee"],
              ["Less than 24 hours before pickup", "100% of the agreed booking fee"],
              ["No-show (no contact at time of pickup)", "100% of the agreed booking fee"],
            ].map(([notice, charge], i) => (
              <tr
                key={i}
                style={{
                  background:
                    i % 2 === 0
                      ? "rgba(201,168,76,0.04)"
                      : "transparent",
                }}
              >
                <td
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {notice}
                </td>
                <td
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    color: charge === "No charge" ? "#C9A84C" : "inherit",
                    fontWeight: charge === "No charge" ? 600 : 400,
                  }}
                >
                  {charge}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          Multi-day packages
        </h2>
        <p>
          Multi-day packages require a non-refundable deposit of 30% on
          confirmation. The remaining balance is due 72 hours before the first
          day of service.
        </p>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.95rem",
            marginTop: 16,
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "10px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                Notice given
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "10px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                Refund of balance paid
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["More than 7 days before first service day", "Full refund of balance (deposit forfeited)"],
              ["3 – 7 days before first service day", "50% of balance refunded"],
              ["Less than 72 hours before first service day", "No refund of balance"],
            ].map(([notice, charge], i) => (
              <tr
                key={i}
                style={{
                  background:
                    i % 2 === 0
                      ? "rgba(201,168,76,0.04)"
                      : "transparent",
                }}
              >
                <td
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {notice}
                </td>
                <td
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {charge}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          Amendments
        </h2>
        <p>
          Changes to pickup times, locations, or route can be requested via
          WhatsApp at any time and are accommodated where operationally possible.
          Changes requested less than 2 hours before the scheduled pickup are
          subject to availability and may not be possible.
        </p>
        <p style={{ marginTop: 12 }}>
          Adding or removing a day from a multi-day package requires at least 48
          hours' notice. Removed days with less than 48 hours' notice are charged
          at the single-day rate.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          Flight delays
        </h2>
        <p>
          For airport pickup bookings, we monitor your flight in real time. If
          your flight is delayed, your chauffeur adjusts their departure time
          accordingly. No cancellation or rebooking fee applies to a delay caused
          by your airline.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          How to cancel or amend
        </h2>
        <p>
          All cancellations and amendments must be communicated via WhatsApp to{" "}
          <a
            href="tel:+27711081227"
            style={{ color: "#C9A84C", textDecoration: "none" }}
          >
            +27 71 108 1227
          </a>
          . The time and date of your message is used to determine which
          cancellation bracket applies. A confirmation reply from us acknowledges
          receipt.
        </p>
      </section>

      <section style={{ marginBottom: 36 }}>
        <h2 style={{ color: "#C9A84C", fontSize: "1.1rem", marginBottom: 12 }}>
          Force majeure
        </h2>
        <p>
          Sigma VIP will not charge a cancellation fee where a booking cannot
          proceed due to a government-declared natural disaster, civil emergency,
          or national lockdown directly affecting the ability to travel. In these
          cases, a full credit or refund will be offered.
        </p>
      </section>
    </main>
  );
}
