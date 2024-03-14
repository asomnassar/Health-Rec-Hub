"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProcedure = exports.getAllProcedures = exports.deleteProcedure = exports.addProcedure = void 0;
const procedure_model_1 = __importDefault(require("../models/procedure.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const addProcedure = async (req, res, next) => {
    try {
        req.body.patient = req.params.id;
        req.body.doctor = req.userData;
        await procedure_model_1.default.create(req.body);
        res.status(202).json({
            message: "تم انشاء الاجراء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.addProcedure = addProcedure;
const updateProcedure = async (req, res, next) => {
    try {
        const { details } = req.body;
        await procedure_model_1.default.updateOne({ _id: req.params.id }, { details });
        res.status(202).json({
            message: "تم تعديل الاجراء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.updateProcedure = updateProcedure;
const deleteProcedure = async (req, res, next) => {
    try {
        await procedure_model_1.default.deleteOne({ _id: req.params.id });
        res.status(202).json({
            message: "تم حذف الاجراء بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.deleteProcedure = deleteProcedure;
const getAllProcedures = async (req, res, next) => {
    try {
        const { id } = req.params;
        let procedures;
        if (id) {
            procedures = await procedure_model_1.default.find({
                patient: id,
                doctor: req.userData,
            });
        }
        else {
            procedures = await procedure_model_1.default.find({
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
};
exports.getAllProcedures = getAllProcedures;
//# sourceMappingURL=procedure.controller.js.map