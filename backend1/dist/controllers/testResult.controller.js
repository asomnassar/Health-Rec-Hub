"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTestResult = exports.getAllTestResults = exports.deleteTestResult = exports.addTestResult = void 0;
const testResult_model_1 = __importDefault(require("../models/testResult.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const upload_util_1 = require("../utils/upload.util");
const addTestResult = async (req, res, next) => {
    try {
        req.body.doctor = req.userData;
        req.body.patient = req.params.id;
        if (req.file && typeof req.file === "object") {
            const result = await (0, upload_util_1.uploadPDF)(req.file);
            req.body.pdf = result;
        }
        await testResult_model_1.default.create(req.body);
        res.status(200).json({
            message: "تم انشاء الاختبار بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.addTestResult = addTestResult;
const updateTestResult = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (req.file && typeof req.file === "object") {
            const result = await (0, upload_util_1.uploadPDF)(req.file);
            req.body.pdf = result;
        }
        await testResult_model_1.default.updateOne({ _id: id }, req.body);
        res.status(200).json({
            message: "تم تعديل الاختبار بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.updateTestResult = updateTestResult;
const deleteTestResult = async (req, res, next) => {
    try {
        const { id } = req.params;
        await testResult_model_1.default.deleteOne({ _id: id });
        res.status(200).json({
            message: "تم حذف الاختبار بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.deleteTestResult = deleteTestResult;
const getAllTestResults = async (req, res, next) => {
    try {
        const { id } = req.params;
        let testResults;
        if (id) {
            testResults = await testResult_model_1.default.find({
                doctor: req.userData,
                patient: id,
            });
        }
        else {
            testResults = await testResult_model_1.default.find({
                patient: req.userData,
            });
        }
        res.status(202).json({
            data: testResults,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.getAllTestResults = getAllTestResults;
//# sourceMappingURL=testResult.controller.js.map