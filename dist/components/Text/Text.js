"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const Typegraphy_1 = require("../../util/Typegraphy");
const Text = ({ variant = "body-regular", children, color = "textPrimary", }) => {
    const theme = (0, react_1.useTheme)();
    const getStyles = (variant) => {
        const selectedColor = theme.colors[color];
        switch (variant) {
            case "body-large":
                return (0, react_1.css) `
          font-size: ${theme.typography.size.headingMd};
          font-weight: ${theme.typography.weight.normal};
          line-height: ${Typegraphy_1.BODY_TEXT_LINE_HEIGHT};
          color: ${selectedColor};
        `;
            case "body-regular":
                return (0, react_1.css) `
          font-size: ${theme.typography.size.bodyReg};
          font-weight: ${theme.typography.weight.normal};
          line-height: ${Typegraphy_1.BODY_TEXT_LINE_HEIGHT};
          color: ${selectedColor};
        `;
            case "body-small":
                return (0, react_1.css) `
          font-size: ${theme.typography.size.bodyRegSm};
          font-weight: ${theme.typography.weight.normal};
          line-height: ${Typegraphy_1.BODY_TEXT_LINE_HEIGHT};
          color: ${selectedColor};
        `;
            default:
                return (0, react_1.css) ``;
        }
    };
    return (0, jsx_runtime_1.jsx)("p", { css: getStyles(variant), children: children });
};
exports.default = Text;
//# sourceMappingURL=Text.js.map