import { css } from '@emotion/react';
export const DEFAULT_HEADING_COLOR_KEY = 'black';
export const getHeadingStyles = (theme, level, color) => {
    const headingSizes = {
        h1: theme.typography.size.headingXxl,
        h2: theme.typography.size.headingXl,
        h3: theme.typography.size.headingLg,
        h4: theme.typography.size.headingMd,
        h5: theme.typography.size.bodyReg,
        h6: theme.typography.size.bodyReg,
    };
    const lineHeights = {
        h1: 1.2,
        h2: 1.3,
        h3: 1.3,
        h4: 1.4,
        h5: 1.4,
        h6: 1.4,
    };
    return css `
    font-size: ${headingSizes[level]};
    font-weight: ${theme.typography.weight.bold};
    line-height: ${lineHeights[level]};
    color: ${theme.colors[color]};
  `;
};
export const getComponentTag = (variant) => {
    if (variant.startsWith('h')) {
        return variant;
    }
    return 'p';
};
export const getVariantStyles = (theme, variant) => {
    switch (variant) {
        case 'h1':
            return css `
          font-size: ${theme.typography.size.headingXxl};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.2;
        `;
        case 'h2':
            return css `
          font-size: ${theme.typography.size.headingXl};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.3;
        `;
        case 'h3':
            return css `
          font-size: ${theme.typography.size.headingLg};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.3;
        `;
        case 'h4':
            return css `
          font-size: ${theme.typography.size.headingMd};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.4;
        `;
        case 'h5':
            return css `
          font-size: ${theme.typography.size.bodyReg};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.4;
        `;
        case 'h6':
            return css `
          font-size: ${theme.typography.size.bodyReg};
          font-weight: ${theme.typography.weight.bold};
          line-height: 1.4;
        `;
        case 'body1':
            return css `
          font-size: ${theme.typography.size.bodyLg};
          font-weight: ${theme.typography.weight.normal};
          line-height: 1.5;
        `;
        case 'body2':
            return css `
          font-size: ${theme.typography.size.bodySm};
          font-weight: ${theme.typography.weight.normal};
          line-height: 1.5;
        `;
        default:
            return css ``;
    }
};
export const BODY_TEXT_LINE_HEIGHT = 1.5;
//# sourceMappingURL=Typegraphy.js.map