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
exports.isTechnicalAdministrator = exports.isSystemManager = exports.isNotPatient = exports.isDoctor = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
//Check if Role is Right or not
const checkRole = (next, userData, ...roles) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ _id: userData });
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
});
//Roles Types
const isNotPatient = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.isNotPatient = isNotPatient;
const isDoctor = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.isDoctor = isDoctor;
const isSystemManager = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.isSystemManager = isSystemManager;
const isTechnicalAdministrator = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userData } = req;
        checkRole(next, userData, "technicalAdministrator");
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        next(err);
    }
});
exports.isTechnicalAdministrator = isTechnicalAdministrator;
//# sourceMappingURL=roles.middleware.js.map