import { PrismaClient } from "@prisma/client";
import { NextFunction, Response } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const prisma = new PrismaClient();

const addPrescription = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { medications } = req.body;
    if (req.userData) {
      await prisma.prescription.create({
        data: {
          patientId: req.params.id,
          doctorId: req.userData,
          medications: medications.map((medication: any) => ({
            name: medication.name,
            dosage: medication.dosage,
          })),
        },
      });
    }
    res.status(202).json({
      message: "تم انشاء الروشتة بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const updatePrescription = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { medications } = req.body;
    await prisma.prescription.update({
      where: { id: req.params.id },
      data: { medications },
    });
    res.status(202).json({
      message: "تم تعديل الروشتة بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const deletePrescription = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    await prisma.prescription.delete({
      where: { id: req.params.id },
    });
    res.status(202).json({
      message: "تم حذف الروشتة بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllPrescriptions = async (
  _: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const prescriptions = await prisma.prescription.findMany({
      include: { patient: true },
    });
    res.status(202).json({
      data: prescriptions,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export {
  addPrescription,
  deletePrescription,
  getAllPrescriptions,
  updatePrescription,
};
