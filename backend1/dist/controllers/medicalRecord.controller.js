"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMedicalRecord = exports.getMedicalRecord = exports.deleteMedicalRecord = exports.addMedicalRecord = void 0;
const medicalRecord_model_1 = __importDefault(require("../models/medicalRecord.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const addMedicalRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        const medicalRecord = await medicalRecord_model_1.default.findOne({ patient: id });
        if (medicalRecord) {
            return res.status(401).json({
                message: "المريض لديه بالفعل سجل طبى",
            });
        }
        else {
            req.body.patient = id;
            req.body.doctor = req.userData;
            await medicalRecord_model_1.default.create(req.body);
            return res.status(200).json({
                message: "تم انشاء السجل طبى بنجاح",
            });
        }
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.addMedicalRecord = addMedicalRecord;
const updateMedicalRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        await medicalRecord_model_1.default.updateOne({ _id: id }, req.body);
        return res.status(200).json({
            message: "تم تعديل السجل طبى بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.updateMedicalRecord = updateMedicalRecord;
const deleteMedicalRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        await medicalRecord_model_1.default.deleteOne({ _id: id });
        return res.status(200).json({
            message: "تم حذف السجل طبى بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.deleteMedicalRecord = deleteMedicalRecord;
const getMedicalRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        const medicalRecord = await medicalRecord_model_1.default.findOne({ patient: id });
        return res.status(200).json({
            data: medicalRecord,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.getMedicalRecord = getMedicalRecord;
//# sourceMappingURL=medicalRecord.controller.js.map