import { NextFunction, Response } from "express";
import TestResult from "../models/testResult.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const isTestResultExist = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const testResult = await TestResult.findOne({ _id: req.params.id });
    if (testResult) {
      return next();
    }
    return res.status(404).json({
      message: "الاختبار غير موجود",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { isTestResultExist };
