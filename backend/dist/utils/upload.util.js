"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPDF = exports.uploadImage = void 0;
const cloudinary_util_1 = __importDefault(require("./cloudinary.util"));
const uploadImage = async (file) => {
    return new Promise((resolve, reject) => {
        cloudinary_util_1.default.uploader.upload(file.path, (error, result) => {
            if (result) {
                resolve(result.secure_url);
            }
            else {
                reject(error);
            }
        });
    });
};
exports.uploadImage = uploadImage;
const uploadPDF = async (file) => {
    return new Promise((resolve, reject) => {
        cloudinary_util_1.default.uploader.upload(file.path, { resource_type: "raw", folder: "pdfs" }, (error, result) => {
            if (result) {
                resolve(result.secure_url);
            }
            else {
                reject(error);
            }
        });
    });
};
exports.uploadPDF = uploadPDF;
//# sourceMappingURL=upload.util.js.map