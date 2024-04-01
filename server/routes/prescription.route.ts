import express, { Router } from "express";
import {
  addPrescription,
  deletePrescription,
  getAllPrescriptions,
  updatePrescription,
} from "../controllers/prescription.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { isPatientExist } from "../middlewares/isPatientExist.middleware";
import { isUserExist } from "../middlewares/isUserExist.middleware";
import { isDoctor } from "../middlewares/roles.middleware";

const router: Router = express.Router();

router
  .route("/:id")
  .post(authorization, isUserExist, isDoctor, isPatientExist, addPrescription);

router
  .route("/:id")
  .put(authorization, isUserExist, isDoctor, updatePrescription);

router
  .route("/:id")
  .delete(authorization, isUserExist, isDoctor, deletePrescription);

router
  .route("/")
  .get(authorization, isUserExist, isDoctor, getAllPrescriptions);

router.route("/").get(authorization, isUserExist, getAllPrescriptions);

export default router;
