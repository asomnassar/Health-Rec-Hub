import mongoose, { Schema } from "mongoose";
import { AppointmentTypes } from "../types/models.types";

const AppointmentSchema: Schema<AppointmentTypes> =
  new Schema<AppointmentTypes>(
    {
      status: {
        type: String,
        required: [true, "status is required"],
      },
      notes: {
        type: [String],
        required: [true, "notes is required"],
      },
      doctor: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Doctor is required"],
      },
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Appointment", AppointmentSchema);
