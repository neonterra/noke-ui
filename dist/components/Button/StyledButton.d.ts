import { Theme } from "@emotion/react";
type ButtonVariant = "primary" | "primary-alt" | "secondary" | "secondary-alt" | "text" | "text-alt";
type ButtonColorScheme = "primaryBG" | "secondaryBG" | "standardBG";
export interface ButtonProps {
    variant?: ButtonVariant;
    colorScheme?: ButtonColorScheme;
    hovered?: boolean;
    children: React.ReactNode;
}
export declare const ButtonStyles: (theme: Theme) => Record<ButtonVariant, Record<ButtonColorScheme, (isHovered: boolean) => any>>;
export declare const StyledButton: import("@emotion/styled").StyledComponent<{
    theme?: Theme;
    as?: React.ElementType;
} & ButtonProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
