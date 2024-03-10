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
exports.resetPassword = exports.register = exports.login = exports.forgotPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const forgotPassword_template_1 = require("../templates/forgotPassword.template");
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const sendMail_util_1 = require("../utils/sendMail.util");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield user_model_1.default.findOne({ username });
        if (user) {
            const isCorrect = yield bcryptjs_1.default.compare(password, user.password);
            if (isCorrect) {
                //Expired in 30 days
                const token = jsonwebtoken_1.default.sign({ userData: user._id }, `${process.env.SECRET_KEY}`, { expiresIn: `${process.env.TOKEN_EXPIRED}` });
                return res.status(200).json({
                    token,
                    userId: user._id,
                    message: "تم تسجيل الدخول بنجاح",
                });
            }
        }
        const err = new customError_util_1.default("اسم المستخدم او كلمة السر غير صحيحة", 402);
        return next(err);
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.login = login;
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield user_model_1.default.findOne({ username });
        if (!user) {
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            const newUser = yield user_model_1.default.create(Object.assign(Object.assign({}, req.body), { password: hashedPassword }));
            if (newUser) {
                return res.status(201).json({
                    message: "تم انشاء الحساب بنجاح",
                });
            }
        }
        const err = new customError_util_1.default("المستخدم موجود بالفعل", 404);
        next(err);
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.register = register;
const forgotPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const user = yield user_model_1.default.findOne({ email });
        if (user &&
            (user.type !== "patient" ||
                (user.type === "patient" && user.status === "active"))) {
            //Expired in an hour
            const token = jsonwebtoken_1.default.sign({ userData: email }, `${process.env.SECRET_KEY}`, {
                expiresIn: `${process.env.TOKEN_EXPIRED_FOR_FORGOT_PASSWORD}`,
            });
            yield sendMail_util_1.transporter.sendMail({
                from: `${process.env.OFFICIAL_EMAIL}`,
                to: email,
                subject: "قم بتغير رمزك السرى 🔒",
                html: (0, forgotPassword_template_1.forgotPasswordTemp)(`${process.env.CLIENT_URL}/resetPassword`),
            });
            return res.status(200).json({
                message: "تاكد من البريد الالكترونى",
                token,
            });
        }
        else {
            const err = new customError_util_1.default("المستخدم غير موجود او غير مفعل", 404);
            return next(err);
        }
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password } = req.body;
        const { userData } = req;
        const user = yield user_model_1.default.findOne({ email: userData });
        if (user &&
            (user.type !== "patient" ||
                (user.type === "patient" && user.status === "active"))) {
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            yield user_model_1.default.updateOne({ _id: user._id }, { password: hashedPassword });
            return res.status(206).json({
                message: "تم تغيير الرقم السرى بنجاح",
            });
        }
        else {
            const err = new customError_util_1.default("المستخدم غير موجود او غير مفعل", 404);
            return next(err);
        }
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.resetPassword = resetPassword;
//# sourceMappingURL=authentication.controller.js.map