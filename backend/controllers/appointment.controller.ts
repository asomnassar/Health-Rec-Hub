import { PrismaClient } from "@prisma/client";
import { NextFunction, Response } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const prisma = new PrismaClient();

const addAppointment = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: patientId } = req.params;
    const { notes, date, time } = req.body;

    await prisma.appointment.create({
      data: {
        notes,
        date,
        time,
        patient: { connect: { id: patientId } },
        creator: { connect: { id: req.userData } },
      },
    });

    res.status(202).json({
      message: "تم انشاء الموعد بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const updateAppointment = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { notes, time, date } = req.body;

    await prisma.appointment.update({
      where: { id },
      data: {
        notes,
        date,
        time,
      },
    });

    res.status(202).json({
      message: "تم تعديل الموعد بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const deleteAppointment = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    await prisma.appointment.delete({
      where: { id },
    });

    res.status(202).json({
      message: "تم حذف الموعد بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllAppointments = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { search }: { search?: string } = req.query;
    let appointments;

    if (req.userType === "doctor" || req.userType === "systemManager") {
      appointments = await prisma.appointment.findMany({
        where: {
          notes: {
            contains: search || "",
          },
        },
        include: { patient: true },
      });
    } else if (req.userType === "patient") {
      appointments = await prisma.appointment.findMany({
        where: {
          AND: [
            { notes: { contains: search || "" } },
            { patientId: req.userData },
          ],
        },
        include: { patient: true },
      });
    } else {
      res.status(400).json({
        message: "Not Authorized",
      });
      return;
    }

    res.status(202).json({
      data: appointments,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getPatientAppointments = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: { patientId: req.userData },
      include: { patient: true },
    });

    res.status(202).json({
      data: appointments,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export {
  addAppointment,
  deleteAppointment,
  getAllAppointments,
  getPatientAppointments,
  updateAppointment,
};
