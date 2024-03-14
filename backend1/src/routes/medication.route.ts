import express, { Router } from "express";
import {
  addMedication,
  deleteMedication,
  getAllMedications,
  updateMedication,
} from "../controllers/medication.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { isUserExist } from "../middlewares/isUserExist.middleware";
import { isNotPatient } from "../middlewares/roles.middleware";

const router: Router = express.Router();

router.route("/").post(authorization, isUserExist, isNotPatient, addMedication);

router
  .route("/:id")
  .put(authorization, isUserExist, isNotPatient, updateMedication);

router
  .route("/:id")
  .delete(authorization, isUserExist, isNotPatient, deleteMedication);

router
  .route("/")
  .get(authorization, isUserExist, isNotPatient, getAllMedications);

export default router;
