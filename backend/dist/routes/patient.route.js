"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patient_controller_1 = require("../controllers/patient.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const multer_middleware_1 = __importDefault(require("../middlewares/multer.middleware"));
const roles_middleware_1 = require("../middlewares/roles.middleware");
const router = express_1.default.Router();
router
    .route("/addPatient")
    .post(authorization_middleware_1.authorization, roles_middleware_1.isSystemManager, multer_middleware_1.default.single("image"), patient_controller_1.addPatient);
router
    .route("/activatePatient/:id")
    .patch(authorization_middleware_1.authorization, roles_middleware_1.isTechnicalAdministrator, patient_controller_1.activatePatient);
router
    .route("/blockPatient/:id")
    .patch(authorization_middleware_1.authorization, roles_middleware_1.isTechnicalAdministrator, patient_controller_1.blockPatient);
router
    .route("/getAllPatients")
    .get(authorization_middleware_1.authorization, roles_middleware_1.isNotPatient, patient_controller_1.getAllPatients);
exports.default = router;
//# sourceMappingURL=patient.route.js.map