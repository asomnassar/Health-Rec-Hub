"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const authorization = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.authorization = authorization;
//# sourceMappingURL=authorization.middleware.js.map