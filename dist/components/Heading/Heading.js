import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { css, useTheme } from '@emotion/react';
import { getComponentTag, getVariantStyles } from '../../util/Typegraphy';
const Typography = ({ variant, children, color = 'black' }) => {
    const theme = useTheme();
    const Component = getComponentTag(variant);
    return (_jsx(Component, { css: css `
        ${getVariantStyles(theme, variant)}
        color: ${theme.colors[color] || theme.colors.black};
      `, children: children }));
};
export default Typography;
//# sourceMappingURL=Heading.js.map