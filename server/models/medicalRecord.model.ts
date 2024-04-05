import mongoose, { Schema } from "mongoose";
import { MedicalRecordTypes } from "../types/models.types";

const MedicalRecordSchema: Schema<MedicalRecordTypes> =
  new Schema<MedicalRecordTypes>(
    {
      patient: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Patient is required"],
      },
      currentHealthIssuses: {
        type: String,
        required: [true, "current health issues is required"],
      },
      heartRate: {
        type: String,
        required: [true, "Heart Rate is required"],
      },
      bloodPressure: {
        type: String,
        required: [true, "blood pressure is required"],
      },
      respiratoryRate: {
        type: String,
        required: [true, "respiratory rate is required"],
      },
      weigth: {
        type: String,
        required: [true, "weigth is required"],
      },
      height: {
        type: String,
        required: [true, "height is required"],
      },
      bloodType: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        required: [true, "blood type is required"],
      },
      bloodSugarLevel: {
        type: String,
        required: [true, "blood sugar level is required"],
      },
      surgeries: {
        type: [String],
      },
      medicines: {
        type: [String],
      },
      diseases: {
        type: [String],
      },
      allergies: {
        type: [String],
      },
      doctor: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor",
        required: [true, "Doctor is required"],
      },
    },
    { timestamps: true }
  );

export default mongoose.model<MedicalRecordTypes>(
  "MedicalRecord",
  MedicalRecordSchema
);
