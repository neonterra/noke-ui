// src/theme.ts
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Bold weight
import "@fontsource/nunito-sans"; // Defaults to weight 400

const theme = {
  colors: {
    primary: "#001761",
    primaryLight: '#D9DFF2',
    primaryDark: '#000E3D',
    secondary: '#0B8468',
    secondaryLight: '#D9F2EC',
    secondaryDark: '#0A7159',
    secondaryLink: '#1AB28F',
    grayLight: '#F3F6F6',
    gray: '#E6E6E6',
    black: '#000000',
    grayDark: '#757575',
    border: '#CCCCCC',
    white: '#ffffff',
    // Add these missing colors
    textPrimary: "#001761",
    lightText: "#E6E6E6",
    borders: "#CCCCCC",
    whiteAlt: "#f0f0f0",
    royal: "#4169E1",
    veridian: "#007F66",
  },
  typography: {
    fontFamily: {
      heading: '"Poppins", sans-serif',
      body: '"Nunito Sans", sans-serif',
    },
    size: {
      headingHuge: '3.5rem',  // 56px
      headingXxl: '2.5rem',   // 40px
      headingXl: '2rem',      // 32px
      headingLg: '1.5rem',    // 24px
      headingMd: '1.25rem',   // 20px
      bodyLg: '1.125rem',     // 18px
      bodyReg: '1rem',        // 16px
      bodySm: '0.875rem',     // 14px
      bodyXs: '0.8125rem',    // 13px
      bodyRegSm: '0.8125rem', // 13px
    },
    weight: {
      normal: 400,
      bold: 700,
    },
  },
  spacing: {
    xsmall: '0.25rem',    // 4px
    small: '0.5rem',      // 8px
    medium: '1rem',       // 16px
    large: '1.5rem',      // 24px
    headingXl: '2.25rem', // 36px
  },
};

export default theme;
