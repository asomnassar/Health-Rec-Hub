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
exports.updateProcedure = exports.getAllProcedures = exports.deleteProcedure = exports.addProcedure = void 0;
const procedure_model_1 = __importDefault(require("../models/procedure.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const addProcedure = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.patient = req.params.id;
        req.body.doctor = req.userData;
        yield procedure_model_1.default.create(req.body);
        res.status(202).json({
            message: "تم انشاء الاجراء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.addProcedure = addProcedure;
const updateProcedure = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { details } = req.body;
        yield procedure_model_1.default.updateOne({ _id: req.params.id }, { details });
        res.status(202).json({
            message: "تم تعديل الاجراء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.updateProcedure = updateProcedure;
const deleteProcedure = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield procedure_model_1.default.deleteOne({ _id: req.params.id });
        res.status(202).json({
            message: "تم حذف الاجراء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.deleteProcedure = deleteProcedure;
const getAllProcedures = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let procedures;
        if (id) {
            procedures = yield procedure_model_1.default.find({
                patient: id,
                doctor: req.userData,
            });
        }
        else {
            procedures = yield procedure_model_1.default.find({
                patient: req.userData,
            });
        }
        res.status(202).json({
            data: procedures,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.getAllProcedures = getAllProcedures;
//# sourceMappingURL=procedure.controller.js.map