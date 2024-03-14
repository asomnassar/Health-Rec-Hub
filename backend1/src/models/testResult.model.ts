import mongoose, { Schema } from "mongoose";
import { TestResultTypes } from "../types/models.types";

const TestResultSchema: Schema<TestResultTypes> = new Schema<TestResultTypes>(
  {
    patient: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Patient is required"],
    },
    type: {
      type: String,
      required: [true, "test type is required"],
    },
    pdf: {
      type: String,
      required: [true, "result pdf is required"],
    },
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Doctor is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("TestResult", TestResultSchema);
