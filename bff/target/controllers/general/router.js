"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralRouter = void 0;
const _shared_1 = require("@shared");
const express_1 = require("express");
const controller_1 = require("./controller");
const http_status_codes_1 = require("http-status-codes");
const dtos_1 = require("./dtos");
function GeneralRouter() {
    const router = (0, express_1.Router)();
    router.post("/tickets/validate", (0, _shared_1.validateSchema)(dtos_1.GetTicketIdDTOSchema, [_shared_1.FieldOptions.body]), (0, _shared_1.registerHandler)((req) => controller_1.generalController.validateTicket(req), http_status_codes_1.StatusCodes.OK));
    router.get("/tickets/:userId", (0, _shared_1.validateSchema)(dtos_1.GetUserIdDTOSchema, [_shared_1.FieldOptions.params]), (0, _shared_1.registerHandler)((req) => controller_1.generalController.getTickets(req), http_status_codes_1.StatusCodes.OK));
    router.get("/events/:userId", (0, _shared_1.validateSchema)(dtos_1.GetUserIdDTOSchema, [_shared_1.FieldOptions.params]), (0, _shared_1.registerHandler)((req) => controller_1.generalController.getOwnerEvents(req), http_status_codes_1.StatusCodes.OK));
    return router;
}
exports.GeneralRouter = GeneralRouter;
//# sourceMappingURL=router.js.map