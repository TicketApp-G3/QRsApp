"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouters = void 0;
const general_1 = require("./general");
function registerRouters(app) {
    app.get('/health', (_, res) => res.status(200).send());
    app.use('/', (0, general_1.GeneralRouter)());
}
exports.registerRouters = registerRouters;
//# sourceMappingURL=router.js.map