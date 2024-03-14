import express, { Router } from "express";
import {
  addTestResult,
  deleteTestResult,
  getAllTestResults,
  updateTestResult,
} from "../controllers/testResult.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { isPatientExist } from "../middlewares/isPatientExist.middleware";
import { isTestResultExist } from "../middlewares/isTestResultExist.middleware";
import { isUserExist } from "../middlewares/isUserExist.middleware";
import upload from "../middlewares/multer.middleware";
import { isDoctor } from "../middlewares/roles.middleware";

const router: Router = express.Router();

router
  .route("/:id")
  .post(
    authorization,
    isUserExist,
    isDoctor,
    isPatientExist,
    upload.single("file"),
    addTestResult
  );

router
  .route("/:id")
  .put(
    authorization,
    isUserExist,
    isDoctor,
    isTestResultExist,
    upload.single("file"),
    updateTestResult
  );

router
  .route("/:id")
  .delete(
    authorization,
    isUserExist,
    isDoctor,
    isTestResultExist,
    deleteTestResult
  );

router
  .route("/:id")
  .get(authorization, isUserExist, isDoctor, isPatientExist, getAllTestResults);

router.route("/").get(authorization, isUserExist, getAllTestResults);

export default router;
