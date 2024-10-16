/** @jsxImportSource @emotion/react */
import { css, useTheme, Theme } from "@emotion/react";
import { FC } from "react";
import { BODY_TEXT_LINE_HEIGHT, BodyTextVariant, TextProps } from "../../util/Typegraphy";

const Text: FC<TextProps> = ({
  variant = "body-regular",
  children,
  color = "textPrimary",
}) => {
  const theme = useTheme(); // Use useTheme to access the theme

  // Get the styles based on the variant (body text) and color
  const getStyles = (variant: BodyTextVariant) => {
    const selectedColor = theme.colors[color]; // Get color from the theme

    switch (variant) {
      case "body-large":
        return css`
          font-size: ${theme.typography.size.headingMd};
          font-weight: ${theme.typography.weight.normal};
          line-height: ${BODY_TEXT_LINE_HEIGHT};
          color: ${selectedColor};
        `;
      case "body-regular":
        return css`
          font-size: ${theme.typography.size.bodyReg};
          font-weight: ${theme.typography.weight.normal};
          line-height: ${BODY_TEXT_LINE_HEIGHT};
          color: ${selectedColor};
        `;
      case "body-small":
        return css`
          font-size: ${theme.typography.size.bodyRegSm};
          font-weight: ${theme.typography.weight.normal};
          line-height: ${BODY_TEXT_LINE_HEIGHT};
          color: ${selectedColor};
        `;
      default:
        return css``;
    }
  };

  return <p css={getStyles(variant)}>{children}</p>; // Always return a <p> for body text
};

export default Text;
