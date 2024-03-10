import { NextFunction, Response } from "express";
import TestResult from "../models/testResult.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";
import { uploadPDF } from "../utils/upload.util";

const addTestResult = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.doctor = req.userData;
    req.body.patient = req.params.id;
    if (req.file && typeof req.file === "object") {
      const result = await uploadPDF(req.file);
      req.body.pdf = result;
    }
    await TestResult.create(req.body);
    res.status(200).json({
      message: "تم انشاء الاختبار بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const updateTestResult = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (req.file && typeof req.file === "object") {
      const result = await uploadPDF(req.file);
      req.body.pdf = result;
    }
    await TestResult.updateOne({ _id: id }, req.body);
    res.status(200).json({
      message: "تم تعديل الاختبار بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const deleteTestResult = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await TestResult.deleteOne({ _id: id });
    res.status(200).json({
      message: "تم حذف الاختبار بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllTestResults = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    let testResults;
    if (id) {
      testResults = await TestResult.find({
        doctor: req.userData,
        patient: id,
      });
    } else {
      testResults = await TestResult.find({
        patient: req.userData,
      });
    }
    res.status(202).json({
      data: testResults,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { addTestResult, deleteTestResult, getAllTestResults, updateTestResult };
