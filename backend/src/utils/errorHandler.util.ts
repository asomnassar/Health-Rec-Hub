import { Response } from "express";
import CustomError from "../utils/customError.util";

const errorHandler = (error: Error, _: any, res: Response) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (error instanceof CustomError) {
    statusCode = error.statusCode;
    message = error.message;
  }

  res.status(statusCode).json({ message });
};

export default errorHandler;
