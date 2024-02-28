import { Document } from "mongoose";

interface UserTypes extends Document {
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  address?: string;
  email?: string;
  phone?: string;
  age: String;
  status: "pending" | "active" | "blocked";
  gender: "male" | "female";
  specialization?: string;
  type: "patient" | "doctor" | "systemManager" | "technicalAdministrator";
  password: string;
  avatar?: string;
}

interface TestResultTypes extends Document {
  testType: string;
  resultDetails: string;
  doctor: object;
}

interface AppointmentTypes extends Document {
  status: string;
  notes: string[];
  doctor: object;
}

interface ProcedureTypes extends Document {
  details: string;
  doctor: object;
}

interface PrescriptionTypes extends Document {
  medicalName: string;
  dosage: string;
  doctor: object;
}

interface MedicalRecordTypes extends Document {
  patient: object;
  currentHealthIssuses: string;
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
}

interface MedicationTypes extends Document {
  medicalName: string;
  dosage: string;
  notes: string;
}

interface PatientRegistrationTypes extends Document {
  patient: object;
  creator: object;
}

export {
  AppointmentTypes,
  MedicalRecordTypes,
  MedicationTypes,
  PatientRegistrationTypes,
  PrescriptionTypes,
  ProcedureTypes,
  TestResultTypes,
  UserTypes,
};
