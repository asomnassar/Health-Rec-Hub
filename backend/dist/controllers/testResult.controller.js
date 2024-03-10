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
exports.updateTestResult = exports.getAllTestResults = exports.deleteTestResult = exports.addTestResult = void 0;
const testResult_model_1 = __importDefault(require("../models/testResult.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const upload_util_1 = require("../utils/upload.util");
const addTestResult = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.doctor = req.userData;
        req.body.patient = req.params.id;
        if (req.file && typeof req.file === "object") {
            const result = yield (0, upload_util_1.uploadPDF)(req.file);
            req.body.pdf = result;
        }
        yield testResult_model_1.default.create(req.body);
        res.status(200).json({
            message: "تم انشاء الاختبار بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.addTestResult = addTestResult;
const updateTestResult = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (req.file && typeof req.file === "object") {
            const result = yield (0, upload_util_1.uploadPDF)(req.file);
            req.body.pdf = result;
        }
        yield testResult_model_1.default.updateOne({ _id: id }, req.body);
        res.status(200).json({
            message: "تم تعديل الاختبار بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.updateTestResult = updateTestResult;
const deleteTestResult = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield testResult_model_1.default.deleteOne({ _id: id });
        res.status(200).json({
            message: "تم حذف الاختبار بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.deleteTestResult = deleteTestResult;
const getAllTestResults = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        let testResults;
        if (id) {
            testResults = yield testResult_model_1.default.find({
                doctor: req.userData,
                patient: id,
            });
        }
        else {
            testResults = yield testResult_model_1.default.find({
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
});
exports.getAllTestResults = getAllTestResults;
//# sourceMappingURL=testResult.controller.js.map