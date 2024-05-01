import { PrismaClient } from "@prisma/client";
import { NextFunction } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const prisma = new PrismaClient();

// Check if Role is Right or not
const checkRole = async (
  next: NextFunction,
  userData?: string,
  ...roles: string[]
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userData },
      select: { type: true },
    });

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
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    next(err);
  }
};

// Roles Types

const isNotPatient = async (
  req: AuthorizationRequestTypes,
  _: any,
  next: NextFunction
) => {
  try {
    const { userData } = req;
    if (userData) {
      await checkRole(
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
      await checkRole(next, userData, "doctor");
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
      await checkRole(next, userData, "systemManager");
    } else {
      const err = new CustomError("صلاحية تسجيل الدخول انتهت", 401);
      next(err);
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    next(err);
  }
};

const isDoctorOrSystemManager = async (
  req: AuthorizationRequestTypes,
  _: any,
  next: NextFunction
) => {
  try {
    const { userData } = req;
    if (userData) {
      await checkRole(next, userData, "doctor", "systemManager");
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
    if (userData) {
      await checkRole(next, userData, "technicalAdministrator");
    } else {
      const err = new CustomError("صلاحية تسجيل الدخول انتهت", 401);
      next(err);
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    next(err);
  }
};

export {
  isDoctor,
  isDoctorOrSystemManager,
  isNotPatient,
  isSystemManager,
  isTechnicalAdministrator,
};
