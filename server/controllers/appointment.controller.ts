import { NextFunction, Response } from "express";
import Appointment from "../models/appointment.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const addAppointment = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.patient = req.params.id;
    req.body.createdBy = req.userData;
    await Appointment.create(req.body);
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
    const { notes, time, date } = req.body;
    await Appointment.updateOne(
      { _id: req.params.id },
      {
        notes,
        date,
        time,
      }
    );
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
    await Appointment.deleteOne({ _id: req.params.id });
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
    const appointments = await Appointment.find({
      createdBy: req.userData,
    }).populate("patient");
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
    const appointments = await Appointment.find({
      patient: req.userData,
    }).populate("patient");
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
