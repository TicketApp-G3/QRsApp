"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTicketIdDTOSchema = exports.GetTicketIdDTO = void 0;
const joi_1 = __importDefault(require("joi"));
class GetTicketIdDTO {
}
exports.GetTicketIdDTO = GetTicketIdDTO;
exports.GetTicketIdDTOSchema = joi_1.default.object({
    ticketId: joi_1.default.string().required(),
});
//# sourceMappingURL=getTicketId.dto.js.map