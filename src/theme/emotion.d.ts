// src/emotion.d.ts

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      secondaryLink: string;
      grayLight: string;
      black: string;
      grayDark: string;
      gray: string;
      white: string;
      border: string;
      // Add these missing colors
      textPrimary: string,
      lightText: string,
      borders: string,
      whiteAlt: string,
      royal: string,
      veridian: string,
    };
    typography: {
      fontFamily: {
        heading: string;
        body: string;
      };
      size: {
        headingHuge: string;
        headingXxl: string;
        headingXl: string;
        headingLg: string;
        headingMd: string;
        bodyLg: string;
        bodyReg: string;
        bodySm: string;
        bodyXs: string;
        bodyRegSm: string;
      };
      weight: {
        normal: number;
        bold: number;
      };
    };
    spacing: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      headingXl: string;
    };
  }
}
