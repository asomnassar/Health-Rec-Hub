import mongoose, { Schema } from "mongoose";
import { MedicationTypes } from "../types/models.types";

const MedicationSchema:Schema<MedicationTypes> = new Schema<MedicationTypes>(
  {
   medicalName:{
    type:String,
    required:[true,"medication name is required"]
   },
   dosage:{
    type:String,
    required:[true,"medication dosage is required"]
   },
   notes:{
    type:String,
    required:[true,"medication notes is required"]
   }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedicalRecord", MedicationSchema);