import mongoose, { Schema } from "mongoose";
import { TestResultTypes } from "../types/models.types";

const TestResultSchema: Schema<TestResultTypes> = new Schema<TestResultTypes>(
  {
    testType: {
      type: String,
      required: [true, "test type is required"],
    },
    resultDetails: {
      type: String,
      required: [true, "result details is required"],
    },
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Doctor is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TestResult", TestResultSchema);
