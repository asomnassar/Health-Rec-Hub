"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProcedureExist = void 0;
const procedure_model_1 = __importDefault(require("../models/procedure.model"));
const customError_util_1 = __importDefault(require("../utils/customError.util"));
const isProcedureExist = async (req, res, next) => {
    try {
        const procedure = await procedure_model_1.default.findOne({ _id: req.params.id });
        if (procedure) {
            return next();
        }
        return res.status(404).json({
            message: "الاجراء غير موجود",
        });
    }
    catch (error) {
        const err = new customError_util_1.default(error.message, 500);
        return next(err);
    }
};
exports.isProcedureExist = isProcedureExist;
//# sourceMappingURL=isProcedureExist.middleware.js.map