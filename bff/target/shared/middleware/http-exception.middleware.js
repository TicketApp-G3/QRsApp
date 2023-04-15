"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionToHttpError = void 0;
const exceptions_1 = require("@shared/exceptions");
const http_status_codes_1 = require("http-status-codes");
function exceptionToHttpError(error, req, res, next) {
    let code;
    let description;
    if (error instanceof exceptions_1.DomainException) {
        code = http_status_codes_1.StatusCodes.CONFLICT;
        description = 'Invalid operation';
    }
    else if (error instanceof exceptions_1.NotFoundException) {
        code = http_status_codes_1.StatusCodes.NOT_FOUND;
        description = 'Not found';
    }
    else if (error instanceof exceptions_1.UnauthorizedException) {
        code = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        description = 'Unauthorized';
    }
    else {
        code = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        description = 'Internal server error';
    }
    res.status(code).json({
        error: error.message,
        statusCode: code,
        description,
    });
}
exports.exceptionToHttpError = exceptionToHttpError;
//# sourceMappingURL=http-exception.middleware.js.map