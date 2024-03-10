import express, { Router } from "express";
import {
  changePassword,
  getUserData,
  updateUserData,
} from "../controllers/user.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { isUserExist } from "../middlewares/isUserExist.middleware";
import upload from "../middlewares/multer.middleware";

const router: Router = express.Router();

router.route("/").get(authorization, isUserExist, getUserData);

router
  .route("/")
  .put(authorization, isUserExist, upload.single("image"), updateUserData);

router.route("/").patch(authorization, isUserExist, changePassword);

export default router;
