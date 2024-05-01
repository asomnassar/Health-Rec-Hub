import { NextFunction, Response } from "express";
import Medication from "../models/medication.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const addMedication = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    await Medication.create(req.body);
    res.status(202).json({
      message: "تم اضافة الدواء بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const updateMedication = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    await Medication.updateOne({ _id: req.params.id }, req.body);
    res.status(202).json({
      message: "تم تعديل الدواء بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const deleteMedication = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    await Medication.deleteOne({ _id: req.params.id });
    res.status(202).json({
      message: "تم حذف الدواء بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllMedications = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const medications = await Medication.find();
    res.status(202).json({
      data: medications,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { addMedication, deleteMedication, getAllMedications, updateMedication };
