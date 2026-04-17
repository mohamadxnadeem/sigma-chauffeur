// ─────────────────────────────────────────────────────────────────────────────
// Sigma VIP brand constants
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all brand metadata, contact details, and
// tracking IDs. Colour tokens live in styles/theme.ts and
// app/globals.css — not here.
// ─────────────────────────────────────────────────────────────────────────────

export const brand = {
  // Identity
  brandName: "Sigma VIP",
  name: "Sigma VIP", // alias for layout metadata / legacy consumers
  shortName: "Sigma",
  tagline: "Luxury Chauffeur · Cape Town",
  description:
    "Ultra-luxury ground transport for private jet arrivals, corporate clients and discerning travellers in Cape Town.",

  // Contact
  whatsapp: "27711081227",
  phone: "+27 71 108 1227",
  email: "info@sigmavip.co.za",
  address: "23 Aberdeen Road, Rondebosch, Cape Town, 7700",

  // Web
  website: "https://sigmavip.co.za",
  siteUrl: "https://www.sigmavip.co.za", // alias for legacy consumers

  // Response standard
  responseTime: "30 minutes",

  // Tracking placeholders — replace with real IDs via env vars in production
  gtmId: "GTM-SIGMAVIP",
  pixelId: "SIGMA_VIP_PIXEL_ID",
} as const;

export type Brand = typeof brand;
