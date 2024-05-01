import { PrismaClient } from "@prisma/client";
import { NextFunction, Response } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const prisma = new PrismaClient();

const isProcedureExist = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const procedure = await prisma.procedure.findUnique({
      where: { id },
    });

    if (procedure) {
      return next();
    }

    return res.status(404).json({
      message: "الاجراء غير موجود",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { isProcedureExist };
