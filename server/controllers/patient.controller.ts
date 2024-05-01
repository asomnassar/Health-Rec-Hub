import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import Appointment from "../models/appointment.model";
import Counters from "../models/counters.model";
import MedicalRecord from "../models/medicalRecord.model";
import Prescription from "../models/prescription.model";
import Procedure from "../models/procedure.model";
import TestResult from "../models/testResult.model";
import User from "../models/user.model";
import GetAllPatientsQueryParams from "../types/controllers.types";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";
import { uploadImage } from "../utils/upload.util";

const addPatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, phone, password } = req.body;
    const user = await User.findOne({
      $or: [{ username }, { email }, { phone }],
    });
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      if (req.file) {
        const image = await uploadImage(req.file);
        req.body.avatar = image;
      }
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
        status: "pending",
        createdBy: req.userData,
      });
      if (newUser) {
        const counters = await Counters.findOne({ status: "original" });
        if (counters) {
          Counters.updateOne(
            { status: "original" },
            { pendingPatients: +counters.pendingPatients + 1 }
          );
        }
        return res.status(201).json({
          message: "تم انشاء مريض جديد بنجاح",
        });
      }
    }
    const err = new CustomError("المستخدم موجود بالفعل", 404);
    return next(err);
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const editPatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, phone } = req.body;
    const { id } = req.params;
    const user = await User.findOne({
      _id: id,
    });
    if (user) {
      if (req.file) {
        const image = await uploadImage(req.file);
        req.body.avatar = image;
      }
      await User.updateOne(
        { _id: id },
        {
          ...req.body,
        }
      );
      return res.status(201).json({
        message: "تم تعديل مريض بنجاح",
      });
    }
    const err = new CustomError("المستخدم غير موجود", 404);
    return next(err);
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const activatePatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await User.updateOne({ _id: id }, { status: "active" });
    const counters = await Counters.findOne({ status: "original" });
    if (counters) {
      let updates: any = { activePatients: +counters.activePatients + 1 };
      if (req.patientStatus === "pending") {
        updates.pendingPatients = +counters.pendingPatients - 1;
      } else if (req.patientStatus === "blocked") {
        updates.blockedPatients = +counters.blockedPatients - 1;
      }
      Counters.updateOne({ status: "original" }, updates);
    }
    res.status(206).json({
      message: "تم تفعيل المريض بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const blockPatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await User.updateOne({ _id: id }, { status: "blocked" });
    const counters = await Counters.findOne({ status: "original" });
    if (counters) {
      let updates: any = { blockedPatients: +counters.blockedPatients + 1 };
      if (req.patientStatus === "pending") {
        updates.pendingPatients = +counters.pendingPatients - 1;
      } else if (req.patientStatus === "active") {
        updates.activePatients = +counters.activePatients - 1;
      }
      Counters.updateOne({ status: "original" }, updates);
    }
    res.status(206).json({
      message: "تم اغلاق حساب المريض بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllPatients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status, search, page }: GetAllPatientsQueryParams = req.query;
    let queries: any = { type: "patient" };

    if (search && search !== "") {
      queries.username = { $regex: new RegExp(search, "i") };
    }

    if (status && status !== "") {
      queries.status = status;
    }

    let skipped = 0;

    // if (page) {
    //   skipped =
    //     parseInt(`${process.env.PAGINATION_NUMBER}`) *
    //     (parseInt(`${page}`) - 1);
    // }

    // allPatients = await User.find(queries)
    //   .skip(skipped)
    //   .limit(parseInt(`${process.env.PAGINATION_NUMBER}`));
    const allPatients = await User.find(queries);

    res.status(200).json({
      data: allPatients,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getPatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: any = {};
    const patient = await User.findOne({ _id: req.params.id }).populate({
      path: "createdBy",
    });
    data.data = patient;
    if (req.userType === "systemManager" || req.userType === "doctor") {
      const appointments = await Appointment.find({
        patient: req.params.id,
      }).populate("patient");
      data.appointments = appointments;
    }
    if (req.userType === "doctor") {
      const procedures = await Procedure.find({
        patient: req.params.id,
      }).populate("patient");
      const prescriptions = await Prescription.find({
        patient: req.params.id,
      }).populate("patient");
      const testResults = await TestResult.find({
        patient: req.params.id,
      }).populate("patient");
      const medicalRecord = await MedicalRecord.findOne({
        patient: req.params.id,
      }).populate("patient");
      data.procedures = procedures;
      data.prescriptions = prescriptions;
      data.testResults = testResults;
      data.medicalRecord = medicalRecord;
    }
    res.status(200).json(data);
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export {
  activatePatient,
  addPatient,
  blockPatient,
  editPatient,
  getAllPatients,
  getPatient,
};
