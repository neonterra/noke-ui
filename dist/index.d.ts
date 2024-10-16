import { H1, H2, H3, H4, H5, H6 } from './components/Headings/Headings';
import Sample from './components/Sample/Sample';
declare const ThemedButton: import("react").FC<import("./components/Button/StyledButton").ButtonProps>;
declare const ThemedHeading: import("react").FC<import("./util/Typegraphy").TypographyProps>;
declare const ThemedText: import("react").FC<import("./util/Typegraphy").TextProps>;
export { ThemedButton as Button, ThemedHeading as Heading, H1, H2, H3, H4, H5, H6, ThemedText as Text, Sample };
