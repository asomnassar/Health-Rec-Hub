import express, { Router } from "express";
import {
  activatePatient,
  addPatient,
  blockPatient,
  getAllActivePatient,
  getAllBlockedPatient,
  getAllPendingPatient,
} from "../controllers/patient.controller";
import { authorization } from "../middlewares/authorization.middleware";
import {
  isNotPatient,
  isTechnicalAdministrator,
} from "../middlewares/roles.middleware";

const router: Router = express.Router();

router.route("/addPatient").post(authorization, isNotPatient, addPatient);

router
  .route("/allPendingPatient")
  .get(authorization, isTechnicalAdministrator, getAllPendingPatient);

router
  .route("/activatePatient/:id")
  .patch(authorization, isTechnicalAdministrator, activatePatient);

router
  .route("/allActivePatient")
  .get(authorization, isNotPatient, getAllActivePatient);

router
  .route("/blockPatient/:id")
  .patch(authorization, isTechnicalAdministrator, blockPatient);

router
  .route("/allBlockedPatient")
  .get(authorization, isTechnicalAdministrator, getAllBlockedPatient);

export default router;
