import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import Counters from "../models/counters.model";
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
    const { username, password } = req.body;
    const user = await User.findOne({ username });
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
    let allPatients;
    let queries: any = { type: "patient" };

    if (search && search !== "") {
      queries.username = { $regex: new RegExp(search, "i") };
    }

    if (status && status !== "") {
      queries.status = status;
    }

    let skipped = 0;

    if (page) {
      skipped =
        parseInt(`${process.env.PAGINATION_NUMBER}`) *
        (parseInt(`${page}`) - 1);
    }

    allPatients = await User.find(queries)
      .skip(skipped)
      .limit(parseInt(`${process.env.PAGINATION_NUMBER}`));

    res.status(200).json({
      data: allPatients,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { activatePatient, addPatient, blockPatient, getAllPatients };
