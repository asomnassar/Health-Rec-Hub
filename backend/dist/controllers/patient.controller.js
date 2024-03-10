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
exports.getAllPatients = exports.blockPatient = exports.addPatient = exports.activatePatient = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = __importDefault(require("../models/user.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const upload_util_1 = require("../utils/upload.util");
const addPatient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield user_model_1.default.findOne({ username });
        if (!user) {
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            if (req.file) {
                const image = yield (0, upload_util_1.uploadImage)(req.file);
                req.body.avatar = image;
            }
            const newUser = yield user_model_1.default.create(Object.assign(Object.assign({}, req.body), { password: hashedPassword, status: "pending", createdBy: req.userData }));
            if (newUser) {
                return res.status(201).json({
                    message: "تم انشاء مريض جديد بنجاح",
                });
            }
        }
        const err = new customError_util_1.default("المستخدم موجود بالفعل", 404);
        return next(err);
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.addPatient = addPatient;
const activatePatient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield user_model_1.default.updateOne({ _id: id }, { status: "active" });
        res.status(206).json({
            message: "تم تفعيل المريض بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.activatePatient = activatePatient;
const blockPatient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield user_model_1.default.updateOne({ _id: id }, { status: "blocked" });
        res.status(206).json({
            message: "تم اغلاق حساب المريض بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.blockPatient = blockPatient;
const getAllPatients = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status, search, page } = req.query;
        let allPatients;
        let queries = { type: "patient" };
        if (search && search !== "") {
            queries.username = { $regex: new RegExp(search, "i") };
        }
        if (status && status !== "") {
            queries.status = status;
        }
        let skipped = 0;
        if (page) {
            skipped =
                parseInt(`${process.env.PAGINATION_NUMBER}`) *
                    (parseInt(`${page}`) - 1);
        }
        allPatients = yield user_model_1.default.find(queries)
            .skip(skipped)
            .limit(parseInt(`${process.env.PAGINATION_NUMBER}`));
        res.status(200).json({
            data: allPatients,
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.getAllPatients = getAllPatients;
//# sourceMappingURL=patient.controller.js.map