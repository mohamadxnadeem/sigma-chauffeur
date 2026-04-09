import { brand } from "@/lib/brand";

// ─────────────────────────────────────────────────────────────────────────────
// Sigma VIP palette
// ─────────────────────────────────────────────────────────────────────────────
// Direct named tokens — use these in new components:
//   theme.colors.gold, theme.colors.charcoal, theme.colors.offwhite, …
//
// Legacy semantic aliases (primary, heading, text, textMuted, background, …)
// are kept so existing components continue to work. They are remapped onto
// the Sigma VIP palette so the rebrand applies automatically everywhere.
// ─────────────────────────────────────────────────────────────────────────────

const palette = {
  // Sigma VIP named tokens
  black: "#0D0D0D",
  charcoal: "#1C1C1C",
  dark: "#2C2C2C",
  mid: "#6B6B6B",
  border: "#DEDEDE",
  offwhite: "#F8F5EF",
  gold: "#C9A84C",
  goldDark: "#A88938",
  goldLight: "#F5E9C0",
  white: "#FFFFFF",
  error: "#A12626",
} as const;

export const theme = {
  brand,
  colors: {
    // Sigma VIP direct tokens
    ...palette,
    // Legacy semantic aliases (remapped to Sigma VIP palette)
    primary: palette.gold,
    primaryDark: palette.goldDark,
    heading: palette.black,
    text: palette.dark,
    textMuted: palette.mid,
    textMuted2: "#8C8C8C",
    background: palette.offwhite,
    backgroundSoft: palette.white,
  },
  fonts: {
    heading: "var(--font-playfair), Georgia, 'Times New Roman', serif",
    body: "var(--font-inter), system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
    label:
      "var(--font-inter), system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  },
  label: {
    textTransform: "uppercase" as const,
    letterSpacing: "2px",
    fontSize: "11px",
    color: palette.gold,
    fontWeight: 500,
  },
  radius: {
    sm: "10px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  shadows: {
    soft: "0 10px 30px rgba(13, 13, 13, 0.06)",
    card: "0 18px 40px rgba(13, 13, 13, 0.08)",
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "40px",
    xxl: "64px",
  },
  container: {
    maxWidth: "1280px",
  },
  breakpoints: {
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1440px",
  },
};
