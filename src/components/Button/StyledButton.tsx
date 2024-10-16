
import { css, useTheme, Theme } from "@emotion/react";
import styled from "@emotion/styled";

// Define types for variant and colorScheme (previously theme)
type ButtonVariant =
  | "primary"
  | "primary-alt"
  | "secondary"
  | "secondary-alt"
  | "text"
  | "text-alt";

type ButtonColorScheme = "primaryBG" | "secondaryBG" | "standardBG";

export interface ButtonProps {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme; // Renamed from "theme" to avoid conflict with the Emotion theme
  hovered?: boolean; // represents hover state as boolean
  children: React.ReactNode;
}

// Define the styles based on variant, colorScheme, and state
export const ButtonStyles = (
  theme: Theme
): Record<ButtonVariant, Record<ButtonColorScheme, (isHovered: boolean) => any>> => ({
  // Primary button styles
  primary: {
    standardBG: (isHovered: boolean) => css`
      background-color: ${isHovered
        ? theme.colors.secondaryDark
        : theme.colors.secondary};
      color: ${theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.secondaryDark};
      }
    `,
    primaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered
        ? theme.colors.secondary
        : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.white}` : "none"};
      box-sizing: border-box;

      &:hover {
        background-color: ${theme.colors.secondary};
        border: 2px solid ${theme.colors.white};
        color: ${theme.colors.white};
      }
    `,
    secondaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.secondary};
      border: ${isHovered ? `2px solid ${theme.colors.white}` : "none"};

      &:hover {
        background-color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.white};
        color: ${theme.colors.white};
      }
    `,
  },
  // Secondary button styles
  secondary: {
    standardBG: (isHovered: boolean) => css`
      background-color: ${isHovered
        ? theme.colors.secondaryLight
        : theme.colors.white};
      color: ${theme.colors.secondary};
      border: 2px solid ${theme.colors.secondary};

      &:hover {
        background-color: ${theme.colors.secondaryLight};
      }
    `,
    primaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered
        ? theme.colors.white
        : theme.colors.secondary};
      color: ${isHovered ? theme.colors.primary : theme.colors.white};
      border: ${isHovered ? "none" : `2px solid ${theme.colors.white}`};

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    `,
    secondaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.white : theme.colors.primary};
      color: ${isHovered ? theme.colors.secondary : theme.colors.white};
      border: ${isHovered ? "none" : `2px solid ${theme.colors.white}`};

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.secondary};
      }
    `,
  },
  // Primary-alt button styles
  "primary-alt": {
    standardBG: (isHovered: boolean) => css`
      background-color: ${isHovered
        ? theme.colors.primaryDark
        : theme.colors.primary};
      color: ${theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.primaryDark};
      }
    `,
    primaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.white}` : "none"};

      &:hover {
        background-color: ${theme.colors.primaryDark};
      }
    `,
    secondaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.white : theme.colors.secondary};
      color: ${isHovered ? theme.colors.secondary : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.secondary}` : "none"};

      &:hover {
        background-color: ${theme.colors.secondary};
        border: 2px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
      }
    `,
  },
  // Secondary-alt button styles
  "secondary-alt": {
    standardBG: (isHovered: boolean) => css`
      background-color: ${isHovered
        ? theme.colors.primaryLight
        : theme.colors.white};
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.primaryLight};
      }
    `,
    primaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.primary}` : "none"};
    `,
    secondaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
    `,
  },
  // Text button styles
  text: {
    standardBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.gray : "transparent"};
      color: ${theme.colors.secondary};
      border: none;

      &:hover {
        background-color: ${theme.colors.gray};
      }
    `,
    primaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.white : "transparent"};
      color: ${isHovered ? theme.colors.primary : theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    `,
    secondaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.white : "transparent"};
      color: ${isHovered ? theme.colors.secondary : theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.secondary};
      }
    `,
  },
  // Text-alt button styles
  "text-alt": {
    standardBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.gray : "transparent"};
      color: ${theme.colors.primary};
      border: none;

      &:hover {
        background-color: ${theme.colors.gray};
      }
    `,
    primaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.primaryLight : "transparent"};
      color: ${theme.colors.primary};
    `,
    secondaryBG: (isHovered: boolean) => css`
      background-color: ${isHovered ? theme.colors.primary : "transparent"};
      color: ${theme.colors.primary};
    `,
  },
});

// StyledButton component
export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box;
  font-weight: 600;

  ${(props) => {
    const theme = useTheme(); // Ensure proper type for useTheme
    const variant = props.variant || "primary"; // Default to 'primary' if undefined
    const colorScheme = props.colorScheme || "standardBG"; // Default to 'standardBG' if undefined

    // Return the correct button style based on variant and colorScheme
    return ButtonStyles(theme)[variant][colorScheme](props.hovered || false);
  }}
`;