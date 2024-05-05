import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import GetAllPatientsQueryParams from "../types/controllers.types";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";
import { uploadImage } from "../utils/upload.util";

const prisma = new PrismaClient();

const addPatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, phone, password, dateOfBirth } = req.body;
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }, { phone }],
      },
    });
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      let avatar;
      if (req.file) {
        avatar = await uploadImage(req.file);
        req.body.avatar = avatar;
      }
      delete req.body.image;
      if (dateOfBirth) {
        req.body.dateOfBirth = new Date(dateOfBirth);
      }
      const newUser = await prisma.user.create({
        data: {
          ...req.body,
          password: hashedPassword,
          status: "pending",
          creator: req.userData,
        },
      });
      if (newUser) {
        return res.status(201).json({
          message: "تم انشاء مريض جديد بنجاح",
        });
      }
    }
    const err = new CustomError("المستخدم موجود بالفعل", 404);
    return next(err);
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const editPatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { dateOfBirth } = req.body;
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (user) {
      if (req.file) {
        const image = await uploadImage(req.file);
        req.body.avatar = image;
      } else {
        req.body.avatar = req.body.image;
      }
      delete req.body.image;
      if (dateOfBirth) {
        req.body.dateOfBirth = new Date(dateOfBirth);
      }
      await prisma.user.update({
        where: { id },
        data: req.body,
      });
      return res.status(201).json({
        message: "تم تعديل مريض بنجاح",
      });
    }
    const err = new CustomError("المستخدم غير موجود", 404);
    return next(err);
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const activatePatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await prisma.user.update({
      where: { id },
      data: { status: "active" },
    });
    res.status(206).json({
      message: "تم تفعيل المريض بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const blockPatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await prisma.user.update({
      where: { id },
      data: { status: "blocked" },
    });
    res.status(206).json({
      message: "تم اغلاق حساب المريض بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAllPatients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { search }: GetAllPatientsQueryParams = req.query;
    let queries: any = { type: "patient", status: "active" };

    if (search && search !== "") {
      queries.username = { contains: search, mode: "insensitive" };
    }

    const allPatients = await prisma.user.findMany({
      where: queries,
    });

    res.status(200).json({
      data: allPatients,
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getPatient = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const patient = await prisma.user.findUnique({
      where: { id },
    });
    const data: any = { data: patient };

    if (req.userType === "systemManager" || req.userType === "doctor") {
      const appointments = await prisma.appointment.findMany({
        where: { patientId: id },
        include: { patient: true },
      });
      data.appointments = appointments;
    }

    if (req.userType === "doctor") {
      const procedures = await prisma.procedure.findMany({
        where: { patientId: id },
        include: { patient: true },
      });
      const prescriptions = await prisma.prescription.findMany({
        where: { patientId: id },
        include: { patient: true },
      });
      const testResults = await prisma.testResult.findMany({
        where: { patientId: id },
        include: { patient: true },
      });
      const medicalRecord = await prisma.medicalRecord.findFirst({
        where: { patientId: id },
        include: { patient: true },
      });
      data.procedures = procedures;
      data.prescriptions = prescriptions;
      data.testResults = testResults;
      data.medicalRecord = medicalRecord;
    }

    res.status(200).json(data);
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export {
  activatePatient,
  addPatient,
  blockPatient,
  editPatient,
  getAllPatients,
  getPatient,
};
