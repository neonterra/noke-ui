import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
export const ButtonStyles = (theme) => ({
    primary: {
        standardBG: (isHovered) => css `
      background-color: ${isHovered
            ? theme.colors.secondaryDark
            : theme.colors.secondary};
      color: ${theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.secondaryDark};
      }
    `,
        primaryBG: (isHovered) => css `
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
        secondaryBG: (isHovered) => css `
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
    secondary: {
        standardBG: (isHovered) => css `
      background-color: ${isHovered
            ? theme.colors.secondaryLight
            : theme.colors.white};
      color: ${theme.colors.secondary};
      border: 2px solid ${theme.colors.secondary};

      &:hover {
        background-color: ${theme.colors.secondaryLight};
      }
    `,
        primaryBG: (isHovered) => css `
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
        secondaryBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.white : theme.colors.primary};
      color: ${isHovered ? theme.colors.secondary : theme.colors.white};
      border: ${isHovered ? "none" : `2px solid ${theme.colors.white}`};

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.secondary};
      }
    `,
    },
    "primary-alt": {
        standardBG: (isHovered) => css `
      background-color: ${isHovered
            ? theme.colors.primaryDark
            : theme.colors.primary};
      color: ${theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.primaryDark};
      }
    `,
        primaryBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.white}` : "none"};

      &:hover {
        background-color: ${theme.colors.primaryDark};
      }
    `,
        secondaryBG: (isHovered) => css `
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
    "secondary-alt": {
        standardBG: (isHovered) => css `
      background-color: ${isHovered
            ? theme.colors.primaryLight
            : theme.colors.white};
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.primaryLight};
      }
    `,
        primaryBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: ${isHovered ? `2px solid ${theme.colors.primary}` : "none"};
    `,
        secondaryBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.primary : theme.colors.white};
      color: ${isHovered ? theme.colors.white : theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
    `,
    },
    text: {
        standardBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.gray : "transparent"};
      color: ${theme.colors.secondary};
      border: none;

      &:hover {
        background-color: ${theme.colors.gray};
      }
    `,
        primaryBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.white : "transparent"};
      color: ${isHovered ? theme.colors.primary : theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    `,
        secondaryBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.white : "transparent"};
      color: ${isHovered ? theme.colors.secondary : theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.secondary};
      }
    `,
    },
    "text-alt": {
        standardBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.gray : "transparent"};
      color: ${theme.colors.primary};
      border: none;

      &:hover {
        background-color: ${theme.colors.gray};
      }
    `,
        primaryBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.primaryLight : "transparent"};
      color: ${theme.colors.primary};
    `,
        secondaryBG: (isHovered) => css `
      background-color: ${isHovered ? theme.colors.primary : "transparent"};
      color: ${theme.colors.primary};
    `,
    },
});
export const StyledButton = styled.button `
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box;
  font-weight: 600;

  ${(props) => {
    const theme = useTheme();
    const variant = props.variant || "primary";
    const colorScheme = props.colorScheme || "standardBG";
    return ButtonStyles(theme)[variant][colorScheme](props.hovered || false);
}}
`;
//# sourceMappingURL=StyledButton.js.map