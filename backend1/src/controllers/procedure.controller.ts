import { NextFunction, Response } from "express";
import Procedure from "../models/procedure.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const addProcedure = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.patient = req.params.id;
    req.body.doctor = req.userData;
    await Procedure.create(req.body);
    res.status(202).json({
      message: "تم انشاء الاجراء بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const updateProcedure = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { details } = req.body;
    await Procedure.updateOne({ _id: req.params.id }, { details });
    res.status(202).json({
      message: "تم تعديل الاجراء بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const deleteProcedure = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    await Procedure.deleteOne({ _id: req.params.id });
    res.status(202).json({
      message: "تم حذف الاجراء بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllProcedures = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id} = req.params
    let procedures
    if(id){
      procedures = await Procedure.find({
        patient: id,
        doctor: req.userData,
      });
    }else{
      procedures = await Procedure.find({
        patient: req.userData,
      });
    }
    res.status(202).json({
      data: procedures,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { addProcedure, deleteProcedure, getAllProcedures, updateProcedure };

