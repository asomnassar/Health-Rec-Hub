"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const errorHandler = (error, _, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";
    if (error instanceof customError_util_1.default) {
        statusCode = error.statusCode;
        message = error.message;
    }
    res.status(statusCode).json({ message });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.util.js.map