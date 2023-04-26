"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerException = void 0;
class InternalServerException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, InternalServerException.prototype);
    }
}
exports.InternalServerException = InternalServerException;
//# sourceMappingURL=internal-server.exception.js.map