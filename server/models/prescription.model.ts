import mongoose, { Schema } from "mongoose";
import { PrescriptionTypes } from "../types/models.types";

const PrescriptionSchema: Schema<PrescriptionTypes> =
  new Schema<PrescriptionTypes>(
    {
      patient: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Patient is required"],
      },
      medications: {
        type: [Map],
        required: [true, "Medications is required"],
      },
      doctor: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Doctor is required"],
      },
    },
    { timestamps: true }
  );

export default mongoose.model("Prescription", PrescriptionSchema);
