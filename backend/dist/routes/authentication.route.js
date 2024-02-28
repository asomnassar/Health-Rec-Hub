"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_controller_1 = require("../controllers/authentication.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const router = express_1.default.Router();
router.route("/login").post(authentication_controller_1.login);
router.route("/register").post(authentication_controller_1.register);
router.route("/forgotPassword").patch(authentication_controller_1.forgotPassword);
router.route("/resetPassword").patch(authorization_middleware_1.authorization, authentication_controller_1.resetPassword);
exports.default = router;
//# sourceMappingURL=authentication.route.js.map