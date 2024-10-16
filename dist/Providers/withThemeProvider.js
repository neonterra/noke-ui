import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from '@emotion/react';
import theme from './../theme/theme';
const withThemeProvider = (Component) => {
    return (props) => (_jsx(ThemeProvider, { theme: theme, children: _jsx(Component, { ...props }) }));
};
export default withThemeProvider;
//# sourceMappingURL=withThemeProvider.js.map