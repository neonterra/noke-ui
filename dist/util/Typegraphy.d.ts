import { Theme } from '@emotion/react';
export type HeadingColor = keyof Theme['colors'];
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps {
    level: HeadingLevel;
    color?: HeadingColor;
    children: React.ReactNode;
}
export declare const DEFAULT_HEADING_COLOR_KEY: HeadingColor;
export declare const getHeadingStyles: (theme: Theme, level: HeadingLevel, color: HeadingColor) => import("@emotion/react").SerializedStyles;
export interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
    children: React.ReactNode;
    color?: keyof Theme['colors'];
}
export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export declare const getComponentTag: (variant: string) => TypographyTag;
export declare const getVariantStyles: (theme: Theme, variant: string) => import("@emotion/react").SerializedStyles;
export type BodyTextVariant = "body-large" | "body-regular" | "body-small";
export interface TextProps {
    variant?: BodyTextVariant;
    children: React.ReactNode;
    color?: "primary" | "secondary" | "whiteAlt" | "textPrimary" | "lightText" | "borders" | "royal" | "veridian";
}
export declare const BODY_TEXT_LINE_HEIGHT = 1.5;
