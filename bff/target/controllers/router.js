"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouters = void 0;
const tickets_1 = require("./tickets");
function registerRouters(app) {
    app.get('/health', (_, res) => res.status(200).send());
    app.use('/tickets', (0, tickets_1.TicketRouter)());
}
exports.registerRouters = registerRouters;
//# sourceMappingURL=router.js.map