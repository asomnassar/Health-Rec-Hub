"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const authorization = async (req, _, next) => {
    try {
        const headers = req.headers;
        if (headers &&
            headers.authorization &&
            headers.authorization.startsWith("Bearer")) {
            const token = headers.authorization.split(" ")[1];
            const decode = jsonwebtoken_1.default.verify(token, `${process.env.SECRET_KEY}`);
            if (decode) {
                req.userData = decode.userData;
                return next();
            }
        }
        const err = new customError_util_1.default("صلاحية تسجيل الدخول انتهت", 401);
        next(err);
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        next(err);
    }
};
exports.authorization = authorization;
//# sourceMappingURL=authorization.middleware.js.map