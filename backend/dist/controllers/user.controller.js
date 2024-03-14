"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.getUserData = exports.changePassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = __importDefault(require("../models/user.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const upload_util_1 = require("../utils/upload.util");
const getUserData = async (req, res, next) => {
    try {
        const user = await user_model_1.default.findOne({ _id: req.userData })
            .select("-password")
            .exec();
        res.status(200).json({
            data: user,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.getUserData = getUserData;
const updateUserData = async (req, res, next) => {
    try {
        if (req.file) {
            const image = await (0, upload_util_1.uploadImage)(req.file);
            req.body.avatar = image;
        }
        await user_model_1.default.updateOne({ _id: req.userData }, req.body);
        res.status(202).json({
            message: "تم التعديل بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.updateUserData = updateUserData;
const changePassword = async (req, res, next) => {
    try {
        const { oldPassword, password } = req.body;
        const user = await user_model_1.default.findOne({ _id: req.userData });
        if (user) {
            const comparePassword = await bcryptjs_1.default.compare(oldPassword, user.password);
            if (comparePassword) {
                const hashedPassword = await bcryptjs_1.default.hash(password, 10);
                await user_model_1.default.updateOne({ _id: req.userData }, { password: hashedPassword });
                return res.status(200).json({
                    message: "تم تغير رمزك السرى بنجاح",
                });
            }
            else {
                return res.status(401).json({
                    message: "الرمز السرى خطا",
                });
            }
        }
        else {
            return res.status(404).json({
                message: "المستخدم غير موجود",
            });
        }
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.changePassword = changePassword;
//# sourceMappingURL=user.controller.js.map