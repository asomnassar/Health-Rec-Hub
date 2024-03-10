"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testResult_controller_1 = require("../controllers/testResult.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const isPatientExist_middleware_1 = require("../middlewares/isPatientExist.middleware");
const isTestResultExist_middleware_1 = require("../middlewares/isTestResultExist.middleware");
const isUserExist_middleware_1 = require("../middlewares/isUserExist.middleware");
const multer_middleware_1 = __importDefault(require("../middlewares/multer.middleware"));
const roles_middleware_1 = require("../middlewares/roles.middleware");
const router = express_1.default.Router();
router
    .route("/:id")
    .post(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isPatientExist_middleware_1.isPatientExist, multer_middleware_1.default.single("file"), testResult_controller_1.addTestResult);
router
    .route("/:id")
    .put(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isTestResultExist_middleware_1.isTestResultExist, multer_middleware_1.default.single("file"), testResult_controller_1.updateTestResult);
router
    .route("/:id")
    .delete(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isTestResultExist_middleware_1.isTestResultExist, testResult_controller_1.deleteTestResult);
router
    .route("/:id")
    .get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, roles_middleware_1.isDoctor, isPatientExist_middleware_1.isPatientExist, testResult_controller_1.getAllTestResults);
router.route("/").get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, testResult_controller_1.getAllTestResults);
exports.default = router;
//# sourceMappingURL=testResult.route.js.map