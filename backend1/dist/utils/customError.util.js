"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = CustomError;
//# sourceMappingURL=customError.util.js.map