"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserExist = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const isUserExist = async (req, res, next) => {
    try {
        const user = await user_model_1.default.findOne({ _id: req.userData });
        if (user) {
            return next();
        }
        return res.status(404).json({
            message: "المستخدم غير موجود",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.isUserExist = isUserExist;
//# sourceMappingURL=isUserExist.middleware.js.map