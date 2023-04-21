"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = exports.FieldOptions = void 0;
var FieldOptions;
(function (FieldOptions) {
    FieldOptions["body"] = "body";
    FieldOptions["params"] = "params";
    FieldOptions["query"] = "query";
})(FieldOptions = exports.FieldOptions || (exports.FieldOptions = {}));
const validateSchema = (joiSchema, properties) => {
    return (req, res, next) => {
        let fields = {};
        properties.forEach((property) => {
            fields = Object.assign(Object.assign({}, fields), req[property]);
        });
        const { error } = joiSchema.validate(fields, { abortEarly: false });
        const valid = error == null;
        if (valid) {
            next();
        }
        else {
            const { details } = error;
            const errors = details.map((detail) => {
                return {
                    message: detail.message,
                    field: detail.path[0],
                };
            });
            res.setHeader("Content-Type", "application/json");
            res.status(400).send(JSON.stringify(errors));
        }
    };
};
exports.validateSchema = validateSchema;
//# sourceMappingURL=validate-dto.middleware.js.map