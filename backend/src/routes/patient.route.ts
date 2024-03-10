import express, { Router } from "express";
import {
  activatePatient,
  addPatient,
  blockPatient,
  getAllPatients,
} from "../controllers/patient.controller";
import { authorization } from "../middlewares/authorization.middleware";
import upload from "../middlewares/multer.middleware";
import {
  isNotPatient,
  isSystemManager,
  isTechnicalAdministrator,
} from "../middlewares/roles.middleware";

const router: Router = express.Router();

router
  .route("/addPatient")
  .post(authorization, isSystemManager, upload.single("image"), addPatient);

router
  .route("/activatePatient/:id")
  .patch(authorization, isTechnicalAdministrator, activatePatient);

router
  .route("/blockPatient/:id")
  .patch(authorization, isTechnicalAdministrator, blockPatient);

router.route("/Patients").get(authorization, isNotPatient, getAllPatients);

router
  .route("/activePatients")
  .get(authorization, isNotPatient, getAllPatients);

router
  .route("/pendingPatients")
  .get(authorization, isNotPatient, getAllPatients);

router
  .route("/blockedPatients")
  .get(authorization, isNotPatient, getAllPatients);

export default router;
