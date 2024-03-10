import { NextFunction, Response } from "express";
import User from "../models/user.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const isUserExist = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ _id: req.userData });
    if (user) {
      return next();
    }
    return res.status(404).json({
      message: "المستخدم غير موجود",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { isUserExist };
