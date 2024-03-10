import mongoose, { Schema } from "mongoose";
import { MedicationTypes } from "../types/models.types";

const MedicationSchema: Schema<MedicationTypes> = new Schema<MedicationTypes>(
  {
    name: {
      type: String,
      required: [true, "medication name is required"],
      unique: true,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Medication", MedicationSchema);
