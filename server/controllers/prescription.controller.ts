import { NextFunction, Response } from "express";
import Prescription from "../models/prescription.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const addPrescription = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.patient = req.params.id;
    req.body.doctor = req.userData;
    await Prescription.create(req.body);
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
    await Prescription.updateOne({ _id: req.params.id }, { medications });
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
    await Prescription.deleteOne({ _id: req.params.id });
    res.status(202).json({
      message: "تم حذف الروشتة بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllPrescriptions = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    let queries: any;
    const { search }: { search?: string } = req.query;
    if (search && search !== "") {
      queries.medications.name = { $regex: new RegExp(search, "i") };
    }
    if (req.userType === "patient") {
      const prescriptions = await Prescription.find({
        patient: req.userData,
        ...queries,
      }).populate("patient");
      return res.status(202).json({
        data: prescriptions,
      });
    } else if (req.userType === "doctor") {
      const prescriptions = await Prescription.find({
        doctor: req.userData,
        ...queries,
      }).populate("patient");
      return res.status(202).json({
        data: prescriptions,
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
  addPrescription,
  deletePrescription,
  getAllPrescriptions,
  updatePrescription,
};
