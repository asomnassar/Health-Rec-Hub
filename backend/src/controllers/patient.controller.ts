import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import CustomError from "../utils/customError.util";

const addPatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
        status: "pending",
      });
      if (newUser) {
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

const getAllActivePatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allActivePatient = await User.find({
      status: "active",
      type: "patient",
    });
    console.log(allActivePatient);
    res.status(200).json({
      data: allActivePatient,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const activatePatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await User.updateOne({ _id: id }, { status: "active" });
    res.status(206).json({
      message: "تم تفعيل المريض بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllPendingPatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allPendingPatient = await User.find({
      status: "pending",
      type: "patient",
    });
    console.log(allPendingPatient);
    res.status(200).json({
      data: allPendingPatient,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllBlockedPatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allBlockedPatient = await User.find({
      status: "blocked",
      type: "patient",
    });
    console.log(allBlockedPatient);
    res.status(200).json({
      data: allBlockedPatient,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const blockPatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await User.updateOne({ _id: id }, { status: "blocked" });
    res.status(206).json({
      message: "تم اغلاق حساب المريض بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export {
  activatePatient,
  addPatient,
  blockPatient,
  getAllActivePatient,
  getAllBlockedPatient,
  getAllPendingPatient,
};
