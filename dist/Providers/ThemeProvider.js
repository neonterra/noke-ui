import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from './../theme/theme';
const ThemeProvider = ({ children }) => {
    return _jsx(EmotionThemeProvider, { theme: theme, children: children });
};
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map