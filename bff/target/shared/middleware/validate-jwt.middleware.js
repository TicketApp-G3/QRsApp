"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const _config_1 = require("@config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validateJWT(req, res, next) {
    var _a;
    const jwtToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.substring('Bearer '.length);
    if (!jwtToken) {
        res.status(401).send('Missing auth token');
    }
    else {
        try {
            const decoded = jsonwebtoken_1.default.verify(jwtToken, _config_1.config.tokenKey);
            req.user = decoded;
            next();
        }
        catch (err) {
            res.status(401).send('Invalid auth token');
        }
    }
}
exports.validateJWT = validateJWT;
//# sourceMappingURL=validate-jwt.middleware.js.map