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
exports.updateAppointment = exports.getPatientAppointments = exports.getAllAppointments = exports.deleteAppointment = exports.addAppointment = void 0;
const appointment_model_1 = __importDefault(require("../models/appointment.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const addAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.patient = req.params.id;
        req.body.createdBy = req.userData;
        yield appointment_model_1.default.create(req.body);
        res.status(202).json({
            message: "تم انشاء الموعد بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.addAppointment = addAppointment;
const updateAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { notes, time, date } = req.body;
        yield appointment_model_1.default.updateOne({ _id: req.params.id }, {
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
});
exports.updateAppointment = updateAppointment;
const deleteAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield appointment_model_1.default.deleteOne({ _id: req.params.id });
        res.status(202).json({
            message: "تم حذف الموعد بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.deleteAppointment = deleteAppointment;
const getAllAppointments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield appointment_model_1.default.find({ createdBy: req.userData });
        res.status(202).json({
            data: appointments,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.getAllAppointments = getAllAppointments;
const getPatientAppointments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield appointment_model_1.default.find({ patient: req.userData });
        res.status(202).json({
            data: appointments,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.getPatientAppointments = getPatientAppointments;
//# sourceMappingURL=appointment.controller.js.map