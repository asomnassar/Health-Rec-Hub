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
      medication: {
        type: [String],
        required: [true, "Medication is required"],
      },
      dosage: {
        type: [String],
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

export default mongoose.model("Prescription", PrescriptionSchema);
