import { PrismaClient } from "@prisma/client";
import { NextFunction, Response } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";
import { uploadPDF } from "../utils/upload.util";

const prisma = new PrismaClient();

const addTestResult = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { userData, file, body } = req;
    const result = file ? await uploadPDF(file) : null;
    await prisma.testResult.create({
      data: {
        doctor: { connect: { id: userData } },
        patient: { connect: { id } },
        pdf: result,
        ...body,
      },
    });
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
    const { file, body } = req;
    if (file && typeof file === "object") {
      const result = await uploadPDF(file);
      body.pdf = result;
    } else {
      body.pdf = body.file;
      delete body.file;
    }
    await prisma.testResult.update({
      where: { id },
      data: body,
    });
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
    await prisma.testResult.delete({ where: { id } });
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
    let testResults;
    if (req.userType === "patient") {
      testResults = await prisma.testResult.findMany({
        where: { patientId: req.userData },
        include: { patient: true },
      });
    } else if (req.userType === "doctor") {
      testResults = await prisma.testResult.findMany({
        where: { doctorId: req.userData },
        include: { patient: true },
      });
    } else {
      return res.status(400).json({ message: "Not Authorized" });
    }
    return res.status(202).json({ data: testResults });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { addTestResult, deleteTestResult, getAllTestResults, updateTestResult };
