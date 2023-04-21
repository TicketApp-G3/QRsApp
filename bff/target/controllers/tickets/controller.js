"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketController = exports.TicketController = void 0;
const pino_1 = __importDefault(require("pino"));
const axios_1 = __importDefault(require("axios"));
class TicketController {
    constructor() {
        this.ticketsUrl = 'http://localhost:8080/tickets';
        this.logger = (0, pino_1.default)();
    }
    getTickets(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(this.ticketsUrl + `/${req.params.userId}`);
            return response.data;
        });
    }
}
exports.TicketController = TicketController;
const ticketController = new TicketController();
exports.ticketController = ticketController;
//# sourceMappingURL=controller.js.map