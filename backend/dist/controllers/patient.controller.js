"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPatients = exports.blockPatient = exports.addPatient = exports.activatePatient = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const counters_model_1 = __importDefault(require("../models/counters.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const upload_util_1 = require("../utils/upload.util");
const addPatient = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await user_model_1.default.findOne({ username });
        if (!user) {
            const hashedPassword = await bcryptjs_1.default.hash(password, 10);
            if (req.file) {
                const image = await (0, upload_util_1.uploadImage)(req.file);
                req.body.avatar = image;
            }
            const newUser = await user_model_1.default.create({
                ...req.body,
                password: hashedPassword,
                status: "pending",
                createdBy: req.userData,
            });
            if (newUser) {
                const counters = await counters_model_1.default.findOne({ status: "original" });
                if (counters) {
                    counters_model_1.default.updateOne({ status: "original" }, { pendingPatients: +counters.pendingPatients + 1 });
                }
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
};
exports.addPatient = addPatient;
const activatePatient = async (req, res, next) => {
    try {
        const { id } = req.params;
        await user_model_1.default.updateOne({ _id: id }, { status: "active" });
        const counters = await counters_model_1.default.findOne({ status: "original" });
        if (counters) {
            let updates = { activePatients: +counters.activePatients + 1 };
            if (req.patientStatus === "pending") {
                updates.pendingPatients = +counters.pendingPatients - 1;
            }
            else if (req.patientStatus === "blocked") {
                updates.blockedPatients = +counters.blockedPatients - 1;
            }
            counters_model_1.default.updateOne({ status: "original" }, updates);
        }
        res.status(206).json({
            message: "تم تفعيل المريض بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.activatePatient = activatePatient;
const blockPatient = async (req, res, next) => {
    try {
        const { id } = req.params;
        await user_model_1.default.updateOne({ _id: id }, { status: "blocked" });
        const counters = await counters_model_1.default.findOne({ status: "original" });
        if (counters) {
            let updates = { blockedPatients: +counters.blockedPatients + 1 };
            if (req.patientStatus === "pending") {
                updates.pendingPatients = +counters.pendingPatients - 1;
            }
            else if (req.patientStatus === "active") {
                updates.activePatients = +counters.activePatients - 1;
            }
            counters_model_1.default.updateOne({ status: "original" }, updates);
        }
        res.status(206).json({
            message: "تم اغلاق حساب المريض بنجاح",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.blockPatient = blockPatient;
const getAllPatients = async (req, res, next) => {
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
        allPatients = await user_model_1.default.find(queries)
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
};
exports.getAllPatients = getAllPatients;
//# sourceMappingURL=patient.controller.js.map