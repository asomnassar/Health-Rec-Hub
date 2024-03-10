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
exports.isMedicalRecordExist = void 0;
const medicalRecord_model_1 = __importDefault(require("../models/medicalRecord.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const isMedicalRecordExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medicalRecord = yield medicalRecord_model_1.default.findOne({ _id: req.params.id });
        if (medicalRecord) {
            return next();
        }
        return res.status(404).json({
            message: "السجل الطبى غير موجود",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
});
exports.isMedicalRecordExist = isMedicalRecordExist;
//# sourceMappingURL=isMedicalRecordExist.middleware.js.map