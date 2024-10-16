// index.tsx
import withThemeProvider from './Providers/withThemeProvider';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import { H1, H2, H3, H4, H5, H6 } from './components/Headings/Headings';
import Text from './components/Text/Text';
import Sample from './components/Sample/Sample';

// Wrap each component with the theme provider
const ThemedButton = withThemeProvider(Button);
const ThemedHeading = withThemeProvider(Heading);
const ThemedText = withThemeProvider(Text);

// Export wrapped heading components along with the others
export { ThemedButton as Button, ThemedHeading as Heading, H1, H2, H3, H4, H5, H6, ThemedText as Text , 
    Sample
};
