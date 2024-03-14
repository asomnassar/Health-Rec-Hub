import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";

const authorization = async (
  req: AuthorizationRequestTypes,
  _: any,
  next: NextFunction
) => {
  try {
    const headers = req.headers;
    if (
      headers &&
      headers.authorization &&
      headers.authorization.startsWith("Bearer")
    ) {
      const token = headers.authorization.split(" ")[1];
      const decode: any = jwt.verify(token, `${process.env.SECRET_KEY}`);
      if (decode) {
        req.userData = decode.userData;
        return next();
      }
    }
    const err = new CustomError("صلاحية تسجيل الدخول انتهت", 401);
    next(err);
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    next(err);
  }
};

export { authorization };
