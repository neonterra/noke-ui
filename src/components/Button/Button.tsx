/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { ButtonProps, StyledButton } from "./StyledButton";


// NokeButton component
const Button: FC<ButtonProps> = ({
  variant = "primary",
  colorScheme = "standardBG", // Renamed prop from "theme" to avoid conflict
  hovered = false,
  children,
}) => {
  return (
    <StyledButton variant={variant} colorScheme={colorScheme} hovered={hovered}>
      {children}
    </StyledButton>
  );
};

export default Button;