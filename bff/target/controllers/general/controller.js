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
exports.generalController = exports.GeneralController = void 0;
const pino_1 = __importDefault(require("pino"));
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "http://localhost:8080";
class GeneralController {
    constructor() {
        this.logger = (0, pino_1.default)();
    }
    getOwnerEvents(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${BASE_URL}/events`, {
                params: {
                    ownerId: req.params.userId,
                    status: "IN_PROGRESS",
                }
            });
            return response.data;
        });
    }
    getTickets(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${BASE_URL}/tickets/${req.params.userId}`);
            return response.data;
        });
    }
    validateTicket(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(`${BASE_URL}/tickets/validate`, { ticketId: req.body.ticketId });
            return response.data;
        });
    }
}
exports.GeneralController = GeneralController;
const generalController = new GeneralController();
exports.generalController = generalController;
//# sourceMappingURL=controller.js.map