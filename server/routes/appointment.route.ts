import express, { Router } from "express";
import {
  addAppointment,
  deleteAppointment,
  getAllAppointments,
  getPatientAppointments,
  updateAppointment,
} from "../controllers/appointment.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { isPatientExist } from "../middlewares/isPatientExist.middleware";
import { isUserExist } from "../middlewares/isUserExist.middleware";
import { isDoctorOrSystemManager } from "../middlewares/roles.middleware";

const router: Router = express.Router();

router
  .route("/:id")
  .post(
    authorization,
    isUserExist,
    isDoctorOrSystemManager,
    isPatientExist,
    addAppointment
  );

router
  .route("/:id")
  .put(authorization, isUserExist, isDoctorOrSystemManager, updateAppointment);

router
  .route("/:id")
  .delete(
    authorization,
    isUserExist,
    isDoctorOrSystemManager,
    deleteAppointment
  );

router.route("/all").get(authorization, isUserExist, getAllAppointments);

router
  .route("/patient")
  .get(authorization, isUserExist, getPatientAppointments);

export default router;
