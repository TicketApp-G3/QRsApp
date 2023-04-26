"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeToCamelcaseKeys = void 0;
const camelcase_keys_1 = __importDefault(require("camelcase-keys"));
function snakeToCamelcaseKeys() {
    return (req, _, next) => {
        req.body = (0, camelcase_keys_1.default)(req.body, { deep: true });
        next();
    };
}
exports.snakeToCamelcaseKeys = snakeToCamelcaseKeys;
//# sourceMappingURL=snake-to-camel.middleware.js.map