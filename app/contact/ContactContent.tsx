"use client";

import { trackWhatsAppClick } from "../../lib/tracking";

export default function ContactContent() {
  return (
    <main
      style={{
        padding: "120px 24px 80px",
        maxWidth: 720,
        margin: "0 auto",
      }}
    >
      <h1>Contact Sigma VIP</h1>
      <p style={{ marginTop: 16, lineHeight: 1.8 }}>
        The quickest way to reach us is via WhatsApp. We respond within 30
        minutes and confirm bookings the same day.
      </p>

      <div
        style={{
          marginTop: 32,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/27711081227"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                source: "contact_page",
                label: "Contact WhatsApp",
              })
            }
          >
            +27 71 108 1227
          </a>
        </div>
        <div>
          <strong>Phone:</strong>{" "}
          <a href="tel:+27711081227">+27 71 108 1227</a>
        </div>
        <div>
          <strong>Hours:</strong> Available 7 days a week, 24 hours
        </div>
      </div>
    </main>
  );
}
