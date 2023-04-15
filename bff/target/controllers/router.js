"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouters = void 0;
const user_1 = require("./user");
function registerRouters(app) {
    app.get('/health', (_, res) => res.status(200).send());
    app.use('/user', (0, user_1.UserRouter)());
}
exports.registerRouters = registerRouters;
//# sourceMappingURL=router.js.map