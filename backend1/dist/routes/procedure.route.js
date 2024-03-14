"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const procedure_controller_1 = require("../controllers/procedure.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const isPatientExist_middleware_1 = require("../middlewares/isPatientExist.middleware");
const isProcedureExist_middleware_1 = require("../middlewares/isProcedureExist.middleware");
const isUserExist_middleware_1 = require("../middlewares/isUserExist.middleware");
const roles_middleware_1 = require("../middlewares/roles.middleware");
const router = express_1.default.Router();
router
    .route("/:id")
    .post(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isPatientExist_middleware_1.isPatientExist, procedure_controller_1.addProcedure);
router
    .route("/:id")
    .put(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isProcedureExist_middleware_1.isProcedureExist, procedure_controller_1.updateProcedure);
router
    .route("/:id")
    .delete(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isProcedureExist_middleware_1.isProcedureExist, procedure_controller_1.deleteProcedure);
router
    .route("/:id")
    .get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isPatientExist_middleware_1.isPatientExist, procedure_controller_1.getAllProcedures);
router.route("/").get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, procedure_controller_1.getAllProcedures);
exports.default = router;
//# sourceMappingURL=procedure.route.js.map