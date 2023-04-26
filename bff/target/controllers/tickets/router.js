"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRouter = void 0;
const _shared_1 = require("@shared");
const express_1 = require("express");
const controller_1 = require("./controller");
const http_status_codes_1 = require("http-status-codes");
const dtos_1 = require("./dtos");
function TicketRouter() {
    const router = (0, express_1.Router)();
    router.get("/:userId", (0, _shared_1.validateSchema)(dtos_1.GetTicketByUserIdDTOSchema, [_shared_1.FieldOptions.params]), (0, _shared_1.registerHandler)((req) => controller_1.ticketController.getTickets(req), http_status_codes_1.StatusCodes.OK));
    return router;
}
exports.TicketRouter = TicketRouter;
//# sourceMappingURL=router.js.map