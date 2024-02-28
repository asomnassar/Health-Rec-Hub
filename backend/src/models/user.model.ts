import mongoose, { Schema } from "mongoose";
import { UserTypes } from "../types/models.types";

const UserSchema: Schema<UserTypes> = new Schema<UserTypes>(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: [true, "firstName is required"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "lastName is required"],
    },
    type: {
      type: String,
      default: "patient",
      enum: ["patient", "doctor", "systemManager", "technicalAdministrator"],
      required: [true, "user type is required"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "gender is required"],
    },
    age: {
      type: String,
      required: [true, "age is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    dateOfBirth: {
      type: Date,
      required: [
        function () {
          return this.type === "patient";
        },
        "date of birth is required",
      ],
    },
    phone: {
      type: String,
      required: [
        function () {
          return this.type === "doctor";
        },
        "phone is required",
      ],
    },
    address: {
      type: String,
      required: [
        function () {
          return this.type === "patient" || this.type === "doctor";
        },
        "address is required",
      ],
    },
    specialization: {
      type: String,
      required: [
        function () {
          return this.type === "doctor";
        },
        "specialization is required",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: function (value: any) {
          return value.length >= 8;
        },
        message: "Password must be at least 8 characters long",
      },
    },
    status: {
      type: String,
      enum: ["pending", "active", "blocked"],
      default: "pending",
      required: [true, "status is required"],
    },
    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
    },
  },
  { timestamps: true }
);

export default mongoose.model<UserTypes>("User", UserSchema);
