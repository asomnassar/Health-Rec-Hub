import mongoose, { Schema } from "mongoose";
import { AppointmentTypes } from "../types/models.types";

const AppointmentSchema: Schema<AppointmentTypes> =
  new Schema<AppointmentTypes>(
    {
      patient: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Patient is required"],
      },
      status: {
        type: String,
        required: [true, "status is required"],
        default: "waiting",
        enum: ["waiting", "ended"],
      },
      notes: {
        type: String,
        default: "",
      },
      date: {
        type: String,
        required: [true, "appointment date is required"],
      },
      time: {
        type: String,
        required: [true, "appointment time is required"],
      },
      createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Creator is required"],
      },
    },
    { timestamps: true }
  );

export default mongoose.model("Appointment", AppointmentSchema);
