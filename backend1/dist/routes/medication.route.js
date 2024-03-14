"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medication_controller_1 = require("../controllers/medication.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const isUserExist_middleware_1 = require("../middlewares/isUserExist.middleware");
const roles_middleware_1 = require("../middlewares/roles.middleware");
const router = express_1.default.Router();
router.route("/").post(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isNotPatient, medication_controller_1.addMedication);
router
    .route("/:id")
    .put(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isNotPatient, medication_controller_1.updateMedication);
router
    .route("/:id")
    .delete(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isNotPatient, medication_controller_1.deleteMedication);
router
    .route("/")
    .get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isNotPatient, medication_controller_1.getAllMedications);
exports.default = router;
//# sourceMappingURL=medication.route.js.map