"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const authorization_middleware_1 = require("../middlewares/authorization.middleware");
const isUserExist_middleware_1 = require("../middlewares/isUserExist.middleware");
const multer_middleware_1 = __importDefault(require("../middlewares/multer.middleware"));
const router = express_1.default.Router();
router.route("/").get(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, user_controller_1.getUserData);
router
    .route("/")
    .put(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, multer_middleware_1.default.single("image"), user_controller_1.updateUserData);
router.route("/").patch(authorization_middleware_1.authorization, isUserExist_middleware_1.isUserExist, user_controller_1.changePassword);
exports.default = router;
//# sourceMappingURL=user.route.js.map