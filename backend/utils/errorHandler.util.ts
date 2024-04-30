import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/customError.util";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal Server Error";
  if (error instanceof CustomError) {
    statusCode = error.statusCode;
    message = error.message;
  }
  res.status(statusCode);
  res.json({ message });
};

export default errorHandler;
