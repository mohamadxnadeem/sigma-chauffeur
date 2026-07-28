declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

type WhatsAppTrackingParams = {
  source: string;
  label: string;
  vehicle?: string;
  tour?: string;
};

const META_LEAD_VALUE_ZAR = 3000;

export function trackWhatsAppClick({
  source,
  label,
  vehicle,
  tour,
}: WhatsAppTrackingParams) {
  if (typeof window === "undefined") return;

  const cleanPayload = {
    source,
    label,
    vehicle: vehicle || "",
    tour: tour || "",
  };

  // GA4 custom event — name must match the Google Ads conversion import
  window.gtag?.("event", "sigma_whatsapp_click", {
    event_category: "lead",
    event_label: label,
    source,
    vehicle: vehicle || "",
    tour: tour || "",
    value: META_LEAD_VALUE_ZAR,
    currency: "ZAR",
  });

  // Google Ads conversion
  if (process.env.NEXT_PUBLIC_GOOGLE_ADS_SEND_TO) {
    window.gtag?.("event", "conversion", {
      send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_SEND_TO,
      event_callback: () => {
        // reserved for future use if you want callback-based redirect handling
      },
    });
  }

  // Meta standard lead event
  window.fbq?.("track", "Lead", {
    ...cleanPayload,
    value: META_LEAD_VALUE_ZAR,
    currency: "ZAR",
  });

  // Custom Meta event for debugging / segmentation
  window.fbq?.("trackCustom", "WhatsAppClick", cleanPayload);

  // Higher intent custom Meta event
  window.fbq?.("trackCustom", "HighIntentLead", {
    ...cleanPayload,
    intent: "whatsapp_click",
    value: META_LEAD_VALUE_ZAR,
    currency: "ZAR",
  });
}

type PhoneTrackingParams = {
  source: string;
  label?: string;
};

export function trackPhoneClick({
  source,
  label = "phone_call",
}: PhoneTrackingParams) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "sigma_phone_click", {
    event_category: "lead",
    event_label: label,
    source,
  });

  if (process.env.NEXT_PUBLIC_GOOGLE_ADS_SEND_TO) {
    window.gtag?.("event", "conversion", {
      send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_SEND_TO,
    });
  }

  window.fbq?.("track", "Lead", {
    source,
    label,
    value: META_LEAD_VALUE_ZAR,
    currency: "ZAR",
  });
}