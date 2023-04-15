"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
function validateDto(type, skipMissingProperties = false) {
    return (req, res, next) => {
        const dtoObject = (0, class_transformer_1.plainToInstance)(type, req.body);
        (0, class_validator_1.validate)(dtoObject, { skipMissingProperties }).then((errors) => {
            if (errors.length > 0) {
                const dtoErrors = {};
                errors.map((error) => (dtoErrors[error.property] = Object.values(error.constraints)));
                res.setHeader('Content-Type', 'application/json');
                res.status(400).send(JSON.stringify(dtoErrors));
            }
            else {
                req.body = dtoObject;
                next();
            }
        });
    };
}
exports.validateDto = validateDto;
//# sourceMappingURL=validate-dto.middleware.js.map