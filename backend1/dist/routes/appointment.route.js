"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointment_controller_1 = require("../controllers/appointment.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const isPatientExist_middleware_1 = require("../middlewares/isPatientExist.middleware");
const isUserExist_middleware_1 = require("../middlewares/isUserExist.middleware");
const roles_middleware_1 = require("../middlewares/roles.middleware");
const router = express_1.default.Router();
router
    .route("/:id")
    .post(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctorOrSystemManager, isPatientExist_middleware_1.isPatientExist, appointment_controller_1.addAppointment);
router
    .route("/:id")
    .put(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctorOrSystemManager, appointment_controller_1.updateAppointment);
router
    .route("/:id")
    .delete(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctorOrSystemManager, appointment_controller_1.deleteAppointment);
router
    .route("/all")
    .get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctorOrSystemManager, appointment_controller_1.getAllAppointments);
router
    .route("/patient")
    .get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, appointment_controller_1.getPatientAppointments);
exports.default = router;
//# sourceMappingURL=appointment.route.js.map