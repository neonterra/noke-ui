"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sample = exports.Text = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Heading = exports.Button = void 0;
const withThemeProvider_1 = __importDefault(require("./Providers/withThemeProvider"));
const Button_1 = __importDefault(require("./components/Button/Button"));
const Heading_1 = __importDefault(require("./components/Heading/Heading"));
const Headings_1 = require("./components/Headings/Headings");
Object.defineProperty(exports, "H1", { enumerable: true, get: function () { return Headings_1.H1; } });
Object.defineProperty(exports, "H2", { enumerable: true, get: function () { return Headings_1.H2; } });
Object.defineProperty(exports, "H3", { enumerable: true, get: function () { return Headings_1.H3; } });
Object.defineProperty(exports, "H4", { enumerable: true, get: function () { return Headings_1.H4; } });
Object.defineProperty(exports, "H5", { enumerable: true, get: function () { return Headings_1.H5; } });
Object.defineProperty(exports, "H6", { enumerable: true, get: function () { return Headings_1.H6; } });
const Text_1 = __importDefault(require("./components/Text/Text"));
const Sample_1 = __importDefault(require("./components/Sample/Sample"));
exports.Sample = Sample_1.default;
const ThemedButton = (0, withThemeProvider_1.default)(Button_1.default);
exports.Button = ThemedButton;
const ThemedHeading = (0, withThemeProvider_1.default)(Heading_1.default);
exports.Heading = ThemedHeading;
const ThemedText = (0, withThemeProvider_1.default)(Text_1.default);
exports.Text = ThemedText;
//# sourceMappingURL=index.js.map