import express, { Router } from "express";
import {
  forgotPassword,
  login,
  register,
  resetPassword,
} from "../controllers/authentication.controller";
import { authorization } from "../middlewares/authorization.middleware";

const router: Router = express.Router();

router.route("/login").post(login);

router.route("/register").post(register);

router.route("/forgotPassword").patch(forgotPassword);

router.route("/resetPassword").patch(authorization, resetPassword);

export default router;
