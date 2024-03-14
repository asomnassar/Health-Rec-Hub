"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAppointment = exports.getPatientAppointments = exports.getAllAppointments = exports.deleteAppointment = exports.addAppointment = void 0;
const appointment_model_1 = __importDefault(require("../models/appointment.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const addAppointment = async (req, res, next) => {
    try {
        req.body.patient = req.params.id;
        req.body.createdBy = req.userData;
        await appointment_model_1.default.create(req.body);
        res.status(202).json({
            message: "تم انشاء الموعد بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.addAppointment = addAppointment;
const updateAppointment = async (req, res, next) => {
    try {
        const { notes, time, date } = req.body;
        await appointment_model_1.default.updateOne({ _id: req.params.id }, {
            notes,
            date,
            time,
        });
        res.status(202).json({
            message: "تم تعديل الموعد بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.updateAppointment = updateAppointment;
const deleteAppointment = async (req, res, next) => {
    try {
        await appointment_model_1.default.deleteOne({ _id: req.params.id });
        res.status(202).json({
            message: "تم حذف الموعد بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.deleteAppointment = deleteAppointment;
const getAllAppointments = async (req, res, next) => {
    try {
        const appointments = await appointment_model_1.default.find({ createdBy: req.userData });
        res.status(202).json({
            data: appointments,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.getAllAppointments = getAllAppointments;
const getPatientAppointments = async (req, res, next) => {
    try {
        const appointments = await appointment_model_1.default.find({ patient: req.userData });
        res.status(202).json({
            data: appointments,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.getPatientAppointments = getPatientAppointments;
//# sourceMappingURL=appointment.controller.js.map