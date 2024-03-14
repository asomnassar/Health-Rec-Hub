import bcrypt from "bcryptjs";
import { NextFunction, Response } from "express";
import User from "../models/user.model";
import AuthorizationRequestTypes from "../types/middlewares.types";
import CustomError from "../utils/customError.util";
import { uploadImage } from "../utils/upload.util";

const getUserData = async (
  req: AuthorizationRequestTypes,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ _id: req.userData })
      .select("-password")
      .exec();
    res.status(200).json({
      data: user,
    });
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
    if (req.file) {
      const image = await uploadImage(req.file);
      req.body.avatar = image;
    }
    await User.updateOne({ _id: req.userData }, req.body);
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
    const { oldPassword, password } = req.body;
    const user = await User.findOne({ _id: req.userData });
    if (user) {
      const comparePassword = await bcrypt.compare(oldPassword, user.password);
      if (comparePassword) {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.updateOne(
          { _id: req.userData },
          { password: hashedPassword }
        );
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

export { changePassword, getUserData, updateUserData };
