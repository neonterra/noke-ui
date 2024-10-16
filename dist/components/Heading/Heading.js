"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const Typegraphy_1 = require("../../util/Typegraphy");
const Typography = ({ variant, children, color = 'black' }) => {
    const theme = (0, react_1.useTheme)();
    const Component = (0, Typegraphy_1.getComponentTag)(variant);
    return ((0, jsx_runtime_1.jsx)(Component, { css: (0, react_1.css) `
        ${(0, Typegraphy_1.getVariantStyles)(theme, variant)}
        color: ${theme.colors[color] || theme.colors.black};
      `, children: children }));
};
exports.default = Typography;
//# sourceMappingURL=Heading.js.map