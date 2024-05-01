import { PrismaClient } from "@prisma/client";
import { NextFunction, Response } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";
const prisma = new PrismaClient();

const addProcedure = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { details } = req.body;
    if (req.userData) {
      await prisma.procedure.create({
        data: {
          patientId: req.params.id,
          details,
          doctorId: req.userData,
        },
      });
    }
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
    await prisma.procedure.update({
      where: { id: req.params.id },
      data: { details },
    });
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
    await prisma.procedure.delete({ where: { id: req.params.id } });
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
    let procedures;
    if (req.userType === "patient") {
      procedures = await prisma.procedure.findMany({
        where: { patientId: req.userData },
        include: { patient: true },
      });
    } else if (req.userType === "doctor") {
      procedures = await prisma.procedure.findMany({
        where: { doctorId: req.userData },
        include: { patient: true },
      });
    } else {
      return res.status(400).json({ message: "Not Authorized" });
    }
    return res.status(202).json({ data: procedures });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { addProcedure, deleteProcedure, getAllProcedures, updateProcedure };
