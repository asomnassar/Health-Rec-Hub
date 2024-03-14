"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medicalRecord_controller_1 = require("../controllers/medicalRecord.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const isMedicalRecordExist_middleware_1 = require("../middlewares/isMedicalRecordExist.middleware");
const isPatientExist_middleware_1 = require("../middlewares/isPatientExist.middleware");
const isUserExist_middleware_1 = require("../middlewares/isUserExist.middleware");
const roles_middleware_1 = require("../middlewares/roles.middleware");
const router = express_1.default.Router();
router
    .route("/:id")
    .post(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isPatientExist_middleware_1.isPatientExist, medicalRecord_controller_1.addMedicalRecord);
router
    .route("/:id")
    .put(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isMedicalRecordExist_middleware_1.isMedicalRecordExist, medicalRecord_controller_1.updateMedicalRecord);
router
    .route("/:id")
    .delete(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isMedicalRecordExist_middleware_1.isMedicalRecordExist, medicalRecord_controller_1.deleteMedicalRecord);
router
    .route("/:id")
    .get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, medicalRecord_controller_1.getMedicalRecord);
exports.default = router;
//# sourceMappingURL=medicalRecord.route.js.map