"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPatientExist = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const isPatientExist = async (req, res, next) => {
    try {
        const user = await user_model_1.default.findOne({ _id: req.params.id });
        if (user && user.type === "patient") {
            req.patientStatus = user.status;
            return next();
        }
        return res.status(404).json({
            message: "المريض غير موجود",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.isPatientExist = isPatientExist;
//# sourceMappingURL=isPatientExist.middleware.js.map