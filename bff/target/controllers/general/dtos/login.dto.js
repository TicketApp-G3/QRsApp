"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDtoSchema = exports.LoginDto = void 0;
const joi_1 = __importDefault(require("joi"));
class LoginDto {
}
exports.LoginDto = LoginDto;
;
exports.LoginDtoSchema = joi_1.default.object({
    userId: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
});
//# sourceMappingURL=login.dto.js.map