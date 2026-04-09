import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // Sigma VIP direct tokens
      black: string;
      charcoal: string;
      dark: string;
      mid: string;
      border: string;
      offwhite: string;
      gold: string;
      goldDark: string;
      goldLight: string;
      white: string;
      error: string;
      // Legacy semantic aliases
      primary: string;
      primaryDark: string;
      heading: string;
      text: string;
      textMuted: string;
      textMuted2: string;
      background: string;
      backgroundSoft: string;
      // Optional future slots
      secondary?: string;
      accent?: string;
      danger?: string;
      success?: string;
      warning?: string;
    };
    fonts: {
      heading: string;
      body: string;
      label: string;
    };
    label: {
      textTransform: "uppercase";
      letterSpacing: string;
      fontSize: string;
      color: string;
      fontWeight: number;
    };
    breakpoints: {
      xs?: string;
      sm: string;
      md: string;
      lg: string;
      xl?: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      xl?: string;
      pill?: string;
    };
    shadows: {
      soft: string;
      card: string;
      hover?: string;
      lg?: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    container: {
      maxWidth: string;
      narrow?: string;
      wide?: string;
    };
  }
}
