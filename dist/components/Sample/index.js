"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemedSample = void 0;
const withThemeProvider_1 = __importDefault(require("../../Providers/withThemeProvider"));
const Sample_1 = __importDefault(require("./Sample"));
const ThemedSample = (0, withThemeProvider_1.default)(Sample_1.default);
exports.ThemedSample = ThemedSample;
//# sourceMappingURL=index.js.map