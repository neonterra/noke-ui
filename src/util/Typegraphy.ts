
import { css, Theme } from '@emotion/react';

/* Headings *********************************** */
export type HeadingColor = keyof Theme['colors'];
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
    level: HeadingLevel;
    color?: HeadingColor;
    children: React.ReactNode;
}

export const DEFAULT_HEADING_COLOR_KEY: HeadingColor = 'black';

// Helper to get heading styles based on the level and theme
export const getHeadingStyles = (theme: Theme, level: HeadingLevel, color: HeadingColor) => {
  const headingSizes = {
    h1: theme.typography.size.headingXxl,
    h2: theme.typography.size.headingXl,
    h3: theme.typography.size.headingLg,
    h4: theme.typography.size.headingMd,
    h5: theme.typography.size.bodyReg,
    h6: theme.typography.size.bodyReg,
  };

  const lineHeights = {
    h1: 1.2,
    h2: 1.3,
    h3: 1.3,
    h4: 1.4,
    h5: 1.4,
    h6: 1.4,
  };

  return css`
    font-size: ${headingSizes[level]};
    font-weight: ${theme.typography.weight.bold};
    line-height: ${lineHeights[level]};
    color: ${theme.colors[color]};
  `;
};

/* Headings *********************************** */



/* Heading *********************************** */
export interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
    children: React.ReactNode;
    color?: keyof Theme['colors']; // Updated to use the colors from Theme
}

// Define the valid tag names corresponding to the variants
export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export const getComponentTag = (variant: string): TypographyTag => {
    if (variant.startsWith('h')) {
      return variant as TypographyTag; // Return 'h1' to 'h6' directly
    }
    return 'p'; // Default to 'p' for body1 and body2
};


// Helper to get variant styles
export const getVariantStyles = (theme: Theme, variant: string) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: ${theme.typography.size.headingXxl};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.2;
        `;
      case 'h2':
        return css`
          font-size: ${theme.typography.size.headingXl};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.3;
        `;
      case 'h3':
        return css`
          font-size: ${theme.typography.size.headingLg};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.3;
        `;
      case 'h4':
        return css`
          font-size: ${theme.typography.size.headingMd};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.4;
        `;
      case 'h5':
        return css`
          font-size: ${theme.typography.size.bodyReg};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.4;
        `;
      case 'h6':
        return css`
          font-size: ${theme.typography.size.bodyReg};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.4;
        `;
      case 'body1':
        return css`
          font-size: ${theme.typography.size.bodyLg};
          font-weight: ${theme.typography.weight.normal};
          line-height: 1.5;
        `;
      case 'body2':
        return css`
          font-size: ${theme.typography.size.bodySm};
          font-weight: ${theme.typography.weight.normal};
          line-height: 1.5;
        `;
      default:
        return css``;
    }
};

/* Heading *********************************** */


/* Text *********************************** */


export type BodyTextVariant = "body-large" | "body-regular" | "body-small";
export interface TextProps {
  variant?: BodyTextVariant;
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "whiteAlt"
    | "textPrimary"
    | "lightText"
    | "borders"
    | "royal"
    | "veridian";
}

export const BODY_TEXT_LINE_HEIGHT = 1.5;

/* Text *********************************** */

