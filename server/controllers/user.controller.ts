import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";
import { uploadImage } from "../utils/upload.util";

const prisma = new PrismaClient();

const getProfile = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userData },
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        type: true,
        gender: true,
        age: true,
        email: true,
        dateOfBirth: true,
        phone: true,
        address: true,
        specialization: true,
        avatar: true,
        creator: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (user) {
      res.status(200).json({
        data: user,
      });
    } else {
      throw new CustomError("User not found", 404);
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const getAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        type: true,
        gender: true,
        age: true,
        email: true,
        dateOfBirth: true,
        phone: true,
        address: true,
        specialization: true,
        avatar: true,
        creator: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (user) {
      res.status(200).json({
        data: user,
      });
    } else {
      throw new CustomError("User not found", 404);
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const updateUserData = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    let userData = { ...req.body };
    if (req.file) {
      const image = await uploadImage(req.file);
      userData.avatar = image;
      delete userData.image;
    } else {
      userData.avatar = userData.image;
      delete userData.image;
    }
    if (userData.dateOfBirth) {
      userData.dateOfBirth = new Date(userData.dateOfBirth);
    }
    delete userData.anyOtherInvalidField;
    await prisma.user.update({
      where: { id: req.userData },
      data: userData,
    });
    res.status(202).json({
      message: "تم التعديل بنجاح",
    });
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

const changePassword = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await prisma.user.findUnique({ where: { id: req.userData } });
    if (user) {
      const comparePassword = await bcrypt.compare(oldPassword, user.password);
      if (comparePassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await prisma.user.update({
          where: { id: req.userData },
          data: { password: hashedPassword },
        });
        return res.status(200).json({
          message: "تم تغير رمزك السرى بنجاح",
        });
      } else {
        return res.status(401).json({
          message: "الرمز السرى خطا",
        });
      }
    } else {
      return res.status(404).json({
        message: "المستخدم غير موجود",
      });
    }
  } catch (error: any) {
    const err = new CustomError(error.message, 500);
    return next(err);
  }
};

export { changePassword, getAccount, getProfile, updateUserData };
