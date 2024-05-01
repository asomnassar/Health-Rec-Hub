import { PrismaClient } from "@prisma/client";
import { NextFunction, Response } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const prisma = new PrismaClient();

const isTestResultExist = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const testResult = await prisma.testResult.findUnique({
      where: { id },
    });

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
