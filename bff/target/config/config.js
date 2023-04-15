"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: Number(process.env.PORT) || 8080,
    tokenKey: process.env.TOKEN_KEY,
    refreshTokenKey: process.env.REFRESH_TOKEN_KEY,
    tokenLifeMinutes: Number(process.env.TOKEN_LIFE_MINUTES),
    refreshTokenLifeMinutes: Number(process.env.REFRESH_TOKEN_LIFE_MINUTES),
    mongoUri: process.env.MONGO_URI,
};
//# sourceMappingURL=config.js.map