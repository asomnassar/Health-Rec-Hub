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
exports.updatePrescription = exports.getAllPrescriptions = exports.deletePrescription = exports.addPrescription = void 0;
const prescription_model_1 = __importDefault(require("../models/prescription.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const addPrescription = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.patient = req.params.id;
        req.body.doctor = req.userData;
        yield prescription_model_1.default.create(req.body);
        res.status(202).json({
            message: "تم انشاء الروشتة بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.addPrescription = addPrescription;
const updatePrescription = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { medication, dosage } = req.body;
        yield prescription_model_1.default.updateOne({ _id: req.params.id }, { medication, dosage });
        res.status(202).json({
            message: "تم تعديل الروشتة بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.updatePrescription = updatePrescription;
const deletePrescription = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prescription_model_1.default.deleteOne({ _id: req.params.id });
        res.status(202).json({
            message: "تم حذف الروشتة بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.deletePrescription = deletePrescription;
const getAllPrescriptions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prescriptions = yield prescription_model_1.default.find({
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
});
exports.getAllPrescriptions = getAllPrescriptions;
//# sourceMappingURL=prescription.controller.js.map