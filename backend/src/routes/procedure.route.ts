import express, { Router } from "express";
import {
  addProcedure,
  deleteProcedure,
  getAllProcedures,
  updateProcedure,
} from "../controllers/procedure.controller";
import { authorization } from "../middlewares/authorization.middleware";
import { isPatientExist } from "../middlewares/isPatientExist.middleware";
import { isProcedureExist } from "../middlewares/isProcedureExist.middleware";
import { isUserExist } from "../middlewares/isUserExist.middleware";
import { isDoctor } from "../middlewares/roles.middleware";

const router: Router = express.Router();

router
  .route("/:id")
  .post(authorization, isUserExist, isDoctor, isPatientExist, addProcedure);

router
  .route("/:id")
  .put(authorization, isUserExist, isDoctor, isProcedureExist, updateProcedure);

router
  .route("/:id")
  .delete(
    authorization,
    isUserExist,
    isDoctor,
    isProcedureExist,
    deleteProcedure
  );

router
  .route("/:id")
  .get(authorization, isUserExist, isDoctor, isPatientExist, getAllProcedures);

router.route("/").get(authorization, isUserExist, getAllProcedures);

export default router;
