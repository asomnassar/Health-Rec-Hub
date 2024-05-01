import mongoose, { Schema } from "mongoose";
import { CountersTypes } from "../types/models.types";

const CountersSchema: Schema<CountersTypes> = new Schema<CountersTypes>(
  {
    status: {
      type: String,
      default: "original",
    },
    activePatients: {
      type: Number,
      default: 0,
    },
    pendingPatients: {
      type: Number,
      default: 0,
    },
    blockedPatients: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Counters", CountersSchema);
