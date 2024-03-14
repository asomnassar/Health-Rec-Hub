"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMedication = exports.getAllMedications = exports.deleteMedication = exports.addMedication = void 0;
const medication_model_1 = __importDefault(require("../models/medication.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const addMedication = async (req, res, next) => {
    try {
        await medication_model_1.default.create(req.body);
        res.status(202).json({
            message: "تم اضافة الدواء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.addMedication = addMedication;
const updateMedication = async (req, res, next) => {
    try {
        await medication_model_1.default.updateOne({ _id: req.params.id }, req.body);
        res.status(202).json({
            message: "تم تعديل الدواء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.updateMedication = updateMedication;
const deleteMedication = async (req, res, next) => {
    try {
        await medication_model_1.default.deleteOne({ _id: req.params.id });
        res.status(202).json({
            message: "تم حذف الدواء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.deleteMedication = deleteMedication;
const getAllMedications = async (req, res, next) => {
    try {
        const medications = await medication_model_1.default.find();
        res.status(202).json({
            data: medications,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.getAllMedications = getAllMedications;
//# sourceMappingURL=medication.controller.js.map