import mongoose, { Schema } from "mongoose";
import { MedicalRecordTypes } from "../types/models.types";

const MedicalRecordSchema: Schema<MedicalRecordTypes> =
  new Schema<MedicalRecordTypes>(
    {
      patient: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        reXquired: [true, "Patient is required"],
      },
      currentHealthIssuses: {
        type: String,
        required: [true, "current health issues is required"],
      },
      allergies: {
        type: [String],
        required: [true, "allergies is required"],
      },
      age: {
        type: String,
        required: [true, "age is required"],
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
        required: [true, "surgeries is required"],
      },
      medicines: {
        type: [String],
        required: [true, "medicines is required"],
      },
      diseases: {
        type: [String],
        required: [true, "diseases is required"],
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("MedicalRecord", MedicalRecordSchema);
