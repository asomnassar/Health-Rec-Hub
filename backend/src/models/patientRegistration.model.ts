import mongoose, { Schema } from "mongoose";
import { PatientRegistrationTypes } from "../types/models.types";

const PatientRegistrationSchema: Schema<PatientRegistrationTypes> =
  new Schema<PatientRegistrationTypes>(
    {
      patient: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: [true, "patient is required"],
      },
      creator: {
        type: String,
        required: [true, "dosage is required"],
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model(
  "PatientRegistration",
  PatientRegistrationSchema
);
