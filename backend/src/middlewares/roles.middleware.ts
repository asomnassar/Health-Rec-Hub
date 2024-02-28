import { NextFunction } from "express";
import User from "../models/user.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

//Check if Role is Right or not
const checkRole = async (
  next: NextFunction,
  userData?: string,
  ...roles: string[]
) => {
  const user = await User.findOne({ _id: userData });
  if (user) {
    if (roles.includes(user.type)) {
      return next();
    } else {
      const err = new CustomError("غير مسموح لك بهذا الاجراء", 401);
      return next(err);
    }
  } else {
    const err = new CustomError("المستخدم غير موجود", 401);
    return next(err);
  }
};

//Roles Types

const isNotPatient = async (
  req: AuthorizationRequestTypes,
  _: any,
  next: NextFunction
) => {
  try {
    const { userData } = req;
    if (userData) {
      checkRole(
        next,
        userData,
        "doctor",
        "systemManager",
        "technicalAdministrator"
      );
    } else {
      const err = new CustomError("صلاحية تسجيل الدخول انتهت", 401);
      next(err);
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    next(err);
  }
};

const isDoctor = async (
  req: AuthorizationRequestTypes,
  _: any,
  next: NextFunction
) => {
  try {
    const { userData } = req;
    if (userData) {
      checkRole(next, userData, "doctor");
    } else {
      const err = new CustomError("صلاحية تسجيل الدخول انتهت", 401);
      next(err);
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    next(err);
  }
};

const isSystemManager = async (
  req: AuthorizationRequestTypes,
  _: any,
  next: NextFunction
) => {
  try {
    const { userData } = req;
    if (userData) {
      checkRole(next, userData, "systemManager");
    } else {
      const err = new CustomError("صلاحية تسجيل الدخول انتهت", 401);
      next(err);
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    next(err);
  }
};

const isTechnicalAdministrator = async (
  req: AuthorizationRequestTypes,
  _: any,
  next: NextFunction
) => {
  try {
    const { userData } = req;
    checkRole(next, userData, "technicalAdministrator");
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    next(err);
  }
};

export { isDoctor, isNotPatient, isSystemManager, isTechnicalAdministrator };
