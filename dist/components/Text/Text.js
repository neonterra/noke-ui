import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { css, useTheme } from "@emotion/react";
import { BODY_TEXT_LINE_HEIGHT } from "../../util/Typegraphy";
const Text = ({ variant = "body-regular", children, color = "textPrimary", }) => {
    const theme = useTheme();
    const getStyles = (variant) => {
        const selectedColor = theme.colors[color];
        switch (variant) {
            case "body-large":
                return css `
          font-size: ${theme.typography.size.headingMd};
          font-weight: ${theme.typography.weight.normal};
          line-height: ${BODY_TEXT_LINE_HEIGHT};
          color: ${selectedColor};
        `;
            case "body-regular":
                return css `
          font-size: ${theme.typography.size.bodyReg};
          font-weight: ${theme.typography.weight.normal};
          line-height: ${BODY_TEXT_LINE_HEIGHT};
          color: ${selectedColor};
        `;
            case "body-small":
                return css `
          font-size: ${theme.typography.size.bodyRegSm};
          font-weight: ${theme.typography.weight.normal};
          line-height: ${BODY_TEXT_LINE_HEIGHT};
          color: ${selectedColor};
        `;
            default:
                return css ``;
        }
    };
    return _jsx("p", { css: getStyles(variant), children: children });
};
export default Text;
//# sourceMappingURL=Text.js.map