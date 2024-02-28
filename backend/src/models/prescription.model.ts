import mongoose, { Schema } from "mongoose";
import { PrescriptionTypes } from "../types/models.types";

const PrescriptionSchema: Schema<PrescriptionTypes> =
  new Schema<PrescriptionTypes>(
    {
      medicalName: {
        type: String,
        required: [true, "medical name is required"],
      },
      dosage: {
        type: String,
        required: [true, "dosage is required"],
      },
      doctor: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Doctor is required"],
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Prescription", PrescriptionSchema);
