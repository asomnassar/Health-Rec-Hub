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
exports.updateMedication = exports.getAllMedications = exports.deleteMedication = exports.addMedication = void 0;
const medication_model_1 = __importDefault(require("../models/medication.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const addMedication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield medication_model_1.default.create(req.body);
        res.status(202).json({
            message: "تم اضافة الدواء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.addMedication = addMedication;
const updateMedication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield medication_model_1.default.updateOne({ _id: req.params.id }, req.body);
        res.status(202).json({
            message: "تم تعديل الدواء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.updateMedication = updateMedication;
const deleteMedication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield medication_model_1.default.deleteOne({ _id: req.params.id });
        res.status(202).json({
            message: "تم حذف الدواء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.deleteMedication = deleteMedication;
const getAllMedications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medications = yield medication_model_1.default.find();
        res.status(202).json({
            data: medications,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.getAllMedications = getAllMedications;
//# sourceMappingURL=medication.controller.js.map