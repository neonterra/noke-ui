import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { StyledButton } from "./StyledButton";
const Button = ({ variant = "primary", colorScheme = "standardBG", hovered = false, children, }) => {
    return (_jsx(StyledButton, { variant: variant, colorScheme: colorScheme, hovered: hovered, children: children }));
};
export default Button;
//# sourceMappingURL=Button.js.map