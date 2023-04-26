"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserIdDTOSchema = exports.GetUserIdDTO = void 0;
const joi_1 = __importDefault(require("joi"));
class GetUserIdDTO {
}
exports.GetUserIdDTO = GetUserIdDTO;
exports.GetUserIdDTOSchema = joi_1.default.object({
    userId: joi_1.default.string().required(),
});
//# sourceMappingURL=getUserId.dto.js.map