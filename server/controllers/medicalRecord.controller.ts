import { PrismaClient } from "@prisma/client";
import { NextFunction, Response } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const prisma = new PrismaClient();

const addMedicalRecord = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const existingMedicalRecord = await prisma.medicalRecord.findFirst({
      where: { patientId: id },
    });
    if (existingMedicalRecord) {
      return res.status(401).json({
        message: "المريض لديه بالفعل سجل طبى",
      });
    } else {
      if (req.userData) {
        await prisma.medicalRecord.create({
          data: {
            patientId: id,
            doctorId: req.userData,
            ...req.body,
          },
        });
        return res.status(200).json({
          message: "تم انشاء السجل طبى بنجاح",
        });
      }
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
    await prisma.medicalRecord.update({
      where: { id },
      data: { ...req.body },
    });
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
    await prisma.medicalRecord.delete({ where: { id } });
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
      const medicalRecord = await prisma.medicalRecord.findFirst({
        where: { patientId: id },
      });
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
