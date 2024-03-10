import { NextFunction, Response } from "express";
import MedicalRecord from "../models/medicalRecord.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const isMedicalRecordExist = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const medicalRecord = await MedicalRecord.findOne({ _id: req.params.id });
    if (medicalRecord) {
      return next();
    }
    return res.status(404).json({
      message: "السجل الطبى غير موجود",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { isMedicalRecordExist };
