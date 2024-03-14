import express, { Router } from "express";
import {
  addMedicalRecord,
  deleteMedicalRecord,
  getMedicalRecord,
  updateMedicalRecord,
} from "../controllers/medicalRecord.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { isMedicalRecordExist } from "../middlewares/isMedicalRecordExist.middleware";
import { isPatientExist } from "../middlewares/isPatientExist.middleware";
import { isUserExist } from "../middlewares/isUserExist.middleware";
import { isDoctor } from "../middlewares/roles.middleware";

const router: Router = express.Router();

router
  .route("/:id")
  .post(authorization, isUserExist, isDoctor, isPatientExist, addMedicalRecord);

router
  .route("/:id")
  .put(
    authorization,
    isUserExist,
    isDoctor,
    isMedicalRecordExist,
    updateMedicalRecord
  );

router
  .route("/:id")
  .delete(
    authorization,
    isUserExist,
    isDoctor,
    isMedicalRecordExist,
    deleteMedicalRecord
  );

router
  .route("/:id")
  .get(authorization, isUserExist, isDoctor, getMedicalRecord);

export default router;
