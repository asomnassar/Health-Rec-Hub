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
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
    },
    firstName: {
        type: String,
        trim: true,
        required: [true, "firstName is required"],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "lastName is required"],
    },
    type: {
        type: String,
        default: "patient",
        enum: ["patient", "doctor", "systemManager", "technicalAdministrator"],
        required: [true, "user type is required"],
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "gender is required"],
    },
    age: {
        type: String,
        required: [true, "age is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    dateOfBirth: {
        type: Date,
        required: [
            function () {
                return this.type === "patient";
            },
            "date of birth is required",
        ],
    },
    phone: {
        type: String,
        required: [
            function () {
                return this.type === "doctor";
            },
            "phone is required",
        ],
    },
    address: {
        type: String,
        required: [
            function () {
                return this.type === "patient" || this.type === "doctor";
            },
            "address is required",
        ],
    },
    specialization: {
        type: String,
        required: [
            function () {
                return this.type === "doctor";
            },
            "specialization is required",
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: function (value) {
                return value.length >= 8;
            },
            message: "Password must be at least 8 characters long",
        },
    },
    status: {
        type: String,
        enum: ["pending", "active", "blocked"],
        default: "pending",
        required: [true, "status is required"],
    },
    avatar: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
    },
    createdBy: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "User",
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=user.model.js.map