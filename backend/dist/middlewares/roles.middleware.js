"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTechnicalAdministrator = exports.isSystemManager = exports.isNotPatient = exports.isDoctorOrSystemManager = exports.isDoctor = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
//Check if Role is Right or not
const checkRole = async (next, userData, ...roles) => {
    const user = await user_model_1.default.findOne({ _id: userData });
    if (user) {
        if (roles.includes(user.type)) {
            return next();
        }
        else {
            const err = new customError_util_1.default("غير مسموح لك بهذا الاجراء", 401);
            return next(err);
        }
    }
    else {
        const err = new customError_util_1.default("المستخدم غير موجود", 401);
        return next(err);
    }
};
//Roles Types
const isNotPatient = async (req, _, next) => {
    try {
        const { userData } = req;
        if (userData) {
            checkRole(next, userData, "doctor", "systemManager", "technicalAdministrator");
        }
        else {
            const err = new customError_util_1.default("صلاحية تسجيل الدخول انتهت", 401);
            next(err);
        }
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        next(err);
    }
};
exports.isNotPatient = isNotPatient;
const isDoctor = async (req, _, next) => {
    try {
        const { userData } = req;
        if (userData) {
            checkRole(next, userData, "doctor");
        }
        else {
            const err = new customError_util_1.default("صلاحية تسجيل الدخول انتهت", 401);
            next(err);
        }
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        next(err);
    }
};
exports.isDoctor = isDoctor;
const isSystemManager = async (req, _, next) => {
    try {
        const { userData } = req;
        if (userData) {
            checkRole(next, userData, "systemManager");
        }
        else {
            const err = new customError_util_1.default("صلاحية تسجيل الدخول انتهت", 401);
            next(err);
        }
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        next(err);
    }
};
exports.isSystemManager = isSystemManager;
const isDoctorOrSystemManager = async (req, _, next) => {
    try {
        const { userData } = req;
        if (userData) {
            checkRole(next, userData, "doctor", "systemManager");
        }
        else {
            const err = new customError_util_1.default("صلاحية تسجيل الدخول انتهت", 401);
            next(err);
        }
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        next(err);
    }
};
exports.isDoctorOrSystemManager = isDoctorOrSystemManager;
const isTechnicalAdministrator = async (req, _, next) => {
    try {
        const { userData } = req;
        checkRole(next, userData, "technicalAdministrator");
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        next(err);
    }
};
exports.isTechnicalAdministrator = isTechnicalAdministrator;
//# sourceMappingURL=roles.middleware.js.map