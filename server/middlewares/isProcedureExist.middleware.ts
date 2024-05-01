import { NextFunction, Response } from "express";
import Procedure from "../models/procedure.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const isProcedureExist = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const procedure = await Procedure.findOne({ _id: req.params.id });
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
