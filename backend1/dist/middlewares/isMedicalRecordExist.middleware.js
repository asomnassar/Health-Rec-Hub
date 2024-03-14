"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMedicalRecordExist = void 0;
const medicalRecord_model_1 = __importDefault(require("../models/medicalRecord.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const isMedicalRecordExist = async (req, res, next) => {
    try {
        const medicalRecord = await medicalRecord_model_1.default.findOne({ _id: req.params.id });
        if (medicalRecord) {
            return next();
        }
        return res.status(404).json({
            message: "السجل الطبى غير موجود",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.isMedicalRecordExist = isMedicalRecordExist;
//# sourceMappingURL=isMedicalRecordExist.middleware.js.map