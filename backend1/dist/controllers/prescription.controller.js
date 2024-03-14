"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePrescription = exports.getAllPrescriptions = exports.deletePrescription = exports.addPrescription = void 0;
const prescription_model_1 = __importDefault(require("../models/prescription.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const addPrescription = async (req, res, next) => {
    try {
        req.body.patient = req.params.id;
        req.body.doctor = req.userData;
        await prescription_model_1.default.create(req.body);
        res.status(202).json({
            message: "تم انشاء الروشتة بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.addPrescription = addPrescription;
const updatePrescription = async (req, res, next) => {
    try {
        const { medication, dosage } = req.body;
        await prescription_model_1.default.updateOne({ _id: req.params.id }, { medication, dosage });
        res.status(202).json({
            message: "تم تعديل الروشتة بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.updatePrescription = updatePrescription;
const deletePrescription = async (req, res, next) => {
    try {
        await prescription_model_1.default.deleteOne({ _id: req.params.id });
        res.status(202).json({
            message: "تم حذف الروشتة بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.deletePrescription = deletePrescription;
const getAllPrescriptions = async (req, res, next) => {
    try {
        const prescriptions = await prescription_model_1.default.find({
            patient: req.params.id,
            doctor: req.userData,
        });
        res.status(202).json({
            data: prescriptions,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.getAllPrescriptions = getAllPrescriptions;
//# sourceMappingURL=prescription.controller.js.map