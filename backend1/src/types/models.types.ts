import { Document } from "mongoose";

interface UserTypes extends Document {
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  address?: string;
  email?: string;
  phone?: string;
  age: string;
  status?: "pending" | "active" | "blocked";
  gender: "male" | "female";
  specialization?: string;
  type: "patient" | "doctor" | "systemManager" | "technicalAdministrator";
  password: string;
  avatar?: string;
  createdBy?: object;
}

interface TestResultTypes extends Document {
  patient: object;
  type: string;
  pdf: string;
  doctor: object;
}

interface AppointmentTypes extends Document {
  patient: object;
  status: "waiting" | "ended";
  notes?: string;
  date: String;
  time: string;
  createdBy: object;
}

interface ProcedureTypes extends Document {
  patient: object;
  details: string;
  doctor: object;
}

interface PrescriptionTypes extends Document {
  patient: object;
  medication: object[];
  dosage: string[];
  doctor: object;
}

interface MedicalRecordTypes extends Document {
  patient: object;
  currentHealthIssuses: string[];
  allergies: string[];
  age: string;
  bloodPressure: string;
  bloodSugarLevel: string;
  diseases: string[];
  surgeries: string[];
  respiratoryRate: string;
  weigth: string;
  height: string;
  bloodType: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  medicines: string[];
  doctor: object;
}

interface MedicationTypes extends Document {
  name: string;
  notes?: string;
}

interface CountersTypes extends Document {
  status: string;
  activePatients: number;
  pendingPatients: number;
  blockedPatients: number;
}

export {
  AppointmentTypes,
  CountersTypes,
  MedicalRecordTypes,
  MedicationTypes,
  PrescriptionTypes,
  ProcedureTypes,
  TestResultTypes,
  UserTypes,
};
