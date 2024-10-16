// Headings.tsx
import withThemeProvider from '../../Providers/withThemeProvider';
import { H1 as BaseH1, H2 as BaseH2, H3 as BaseH3, H4 as BaseH4, H5 as BaseH5, H6 as BaseH6 } from './Headings';

// Wrap each heading component with the theme provider
const H1 = withThemeProvider(BaseH1);
const H2 = withThemeProvider(BaseH2);
const H3 = withThemeProvider(BaseH3);
const H4 = withThemeProvider(BaseH4);
const H5 = withThemeProvider(BaseH5);
const H6 = withThemeProvider(BaseH6);

// Export them as named exports
export { H1, H2, H3, H4, H5, H6 };
