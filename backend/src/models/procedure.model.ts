import mongoose, { Schema } from "mongoose";
import { ProcedureTypes } from "../types/models.types";

const ProcedureSchema: Schema<ProcedureTypes> = new Schema<ProcedureTypes>(
  {
    details: {
      type: String,
      required: [true, "procedure details is required"],
    },
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Doctor is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Procedure", ProcedureSchema);
