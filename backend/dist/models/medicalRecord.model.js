"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const MedicalRecordSchema = new mongoose_1.Schema({
    patient: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "User",
        reXquired: [true, "Patient is required"],
    },
    currentHealthIssuses: {
        type: String,
        required: [true, "current health issues is required"],
    },
    allergies: {
        type: [String],
        required: [true, "allergies is required"],
    },
    age: {
        type: String,
        required: [true, "age is required"],
    },
    bloodPressure: {
        type: String,
        required: [true, "blood pressure is required"],
    },
    respiratoryRate: {
        type: String,
        required: [true, "respiratory rate is required"],
    },
    weigth: {
        type: String,
        required: [true, "weigth is required"],
    },
    height: {
        type: String,
        required: [true, "height is required"],
    },
    bloodType: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: [true, "blood type is required"],
    },
    bloodSugarLevel: {
        type: String,
        required: [true, "blood sugar level is required"],
    },
    surgeries: {
        type: [String],
        required: [true, "surgeries is required"],
    },
    medicines: {
        type: [String],
        required: [true, "medicines is required"],
    },
    diseases: {
        type: [String],
        required: [true, "diseases is required"],
    },
}, { timestamps: true });
module.exports = mongoose_1.default.model("MedicalRecord", MedicalRecordSchema);
//# sourceMappingURL=medicalRecord.model.js.map