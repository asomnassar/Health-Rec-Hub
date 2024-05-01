import { NextFunction, Response } from "express";
import MedicalRecord from "../models/medicalRecord.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const addMedicalRecord = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const medicalRecord = await MedicalRecord.findOne({ patient: id });
    if (medicalRecord) {
      return res.status(401).json({
        message: "المريض لديه بالفعل سجل طبى",
      });
    } else {
      req.body.patient = id;
      req.body.doctor = req.userData;
      await MedicalRecord.create(req.body);
      return res.status(200).json({
        message: "تم انشاء السجل طبى بنجاح",
      });
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const updateMedicalRecord = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await MedicalRecord.updateOne({ _id: id }, req.body);
    return res.status(200).json({
      message: "تم تعديل السجل طبى بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const deleteMedicalRecord = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await MedicalRecord.deleteOne({ _id: id });
    return res.status(200).json({
      message: "تم حذف السجل طبى بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getMedicalRecord = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (req.userType === "patient" || req.userType === "doctor") {
      const medicalRecord = await MedicalRecord.findOne({ patient: id });
      return res.status(200).json({
        data: medicalRecord,
      });
    }
    return res.status(400).json({
      message: "Not Authorized",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export {
  addMedicalRecord,
  deleteMedicalRecord,
  getMedicalRecord,
  updateMedicalRecord,
};
