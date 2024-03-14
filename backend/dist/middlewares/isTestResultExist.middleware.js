"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTestResultExist = void 0;
const testResult_model_1 = __importDefault(require("../models/testResult.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const isTestResultExist = async (req, res, next) => {
    try {
        const testResult = await testResult_model_1.default.findOne({ _id: req.params.id });
        if (testResult) {
            return next();
        }
        return res.status(404).json({
            message: "الاختبار غير موجود",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.isTestResultExist = isTestResultExist;
//# sourceMappingURL=isTestResultExist.middleware.js.map