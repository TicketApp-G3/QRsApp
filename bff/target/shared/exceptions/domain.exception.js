"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainException = void 0;
class DomainException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, DomainException.prototype);
    }
}
exports.DomainException = DomainException;
//# sourceMappingURL=domain.exception.js.map