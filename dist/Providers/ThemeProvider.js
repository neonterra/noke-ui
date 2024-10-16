"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@emotion/react");
const theme_1 = __importDefault(require("./../theme/theme"));
const ThemeProvider = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(react_1.ThemeProvider, { theme: theme_1.default, children: children });
};
exports.default = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map