"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prescription_controller_1 = require("../controllers/prescription.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const isPatientExist_middleware_1 = require("../middlewares/isPatientExist.middleware");
const isUserExist_middleware_1 = require("../middlewares/isUserExist.middleware");
const roles_middleware_1 = require("../middlewares/roles.middleware");
const router = express_1.default.Router();
router
    .route("/:id")
    .post(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isPatientExist_middleware_1.isPatientExist, prescription_controller_1.addPrescription);
router
    .route("/:id")
    .put(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, prescription_controller_1.updatePrescription);
router
    .route("/:id")
    .delete(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, prescription_controller_1.deletePrescription);
router
    .route("/:id")
    .get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isPatientExist_middleware_1.isPatientExist, prescription_controller_1.getAllPrescriptions);
router.route("/").get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, prescription_controller_1.getAllPrescriptions);
exports.default = router;
//# sourceMappingURL=prescription.route.js.map