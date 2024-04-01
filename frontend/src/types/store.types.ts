interface PatientsArgsTypes {
  page?: number;
  search?: string;
}

interface AppointmentsArgsTypes {
  page?: number;
  search?: string;
}

interface TestResultsArgsTypes {
  page?: number;
  search?: string;
}

interface ProceduresArgsTypes {
  page?: number;
  search?: string;
}
interface PrescriptionsArgsTypes {
  page?: number;
  search?: string;
}

interface TestResultsArgsTypes {
  page?: number;
  search?: string;
}

interface ActivePatientsValuesTypes {
  isLoading: boolean;
  activePatients: PatientTypes[];
}

interface PendingPatientsValuesTypes {
  isLoading: boolean;
  pendingPatients: PatientTypes[];
}

interface BlockedPatientsValuesTypes {
  isLoading: boolean;
  blockedPatients: PatientTypes[];
}

interface AppointmentsValuesTypes {
  isLoading: boolean;
  appointments: AppointmentTypes[];
}

interface TestResultsValuesTypes {
  isLoading: boolean;
  testResults: TestResultTypes[];
}

interface MedicationsValuesTypes {
  isLoading: boolean;
  medications: MedicationTypes[];
}

interface PrescriptionsValuesTypes {
  isLoading: boolean;
  prescriptions: PrescriptionTypes[];
}

interface ProceduresValuesTypes {
  isLoading: boolean;
  procedures: ProcedureTypes[];
}

interface AuthStateTypes {
  token: string | undefined;
  userId: string | undefined;
  type: string | undefined;
}

interface ProfileTypes {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: string;
  email: string;
  phone: string;
  age: string;
  status: "pending" | "active" | "blocked";
  gender: "male" | "female";
  specialization?: string;
  type: "patient" | "doctor" | "systemManager" | "technicalAdministrator";
  password: string;
  avatar: string;
  createdBy?: object;
}

interface PatientTypes {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  address: string;
  email: string;
  phone: string;
  age: string;
  status: "pending" | "active" | "blocked";
  gender: "male" | "female";
  type: "patient" | "doctor" | "systemManager" | "technicalAdministrator";
  avatar: string;
  createdBy?: object;
}

interface MedicationTypes {
  _id: string;
  patient: string | PatientTypes;
  name: string;
  notes: string;
  doctor: string;
}

interface AppointmentTypes {
  _id: string;
  patient: string | PatientTypes;
  status: "waiting" | "ended";
  notes?: string;
  date: Date;
  time: string;
  createdBy?: object;
}

interface ProcedureTypes {
  _id: string;
  patient: PatientTypes;
  details: string;
  doctor: string;
  updatedAt: Date;
}

interface PrescriptionTypes {
  _id: string;
  patient: string;
  medication: [string];
  dosage: [string];
  doctor: object;
}

interface TestResultTypes {
  _id: string;
  patient: string;
  type: string;
  pdf: string;
  doctor: object;
}

interface MedicalRecordTypes {
  _id: string;
  patient: string;
  currentHealthIssuses: string[];
  age: string;
  bloodPressure: string;
  respiratoryRate: string;
  weigth: string;
  height: string;
  bloodType: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  bloodSugarLevel: string;
  surgeries: string[];
  medicines: string[];
  diseases: string[];
  allergies: string[];
  doctor: string;
}

export type {
  ActivePatientsValuesTypes,
  AppointmentTypes,
  AppointmentsArgsTypes,
  AppointmentsValuesTypes,
  AuthStateTypes,
  BlockedPatientsValuesTypes,
  MedicalRecordTypes,
  MedicationTypes,
  MedicationsValuesTypes,
  PatientTypes,
  PatientsArgsTypes,
  PendingPatientsValuesTypes,
  PrescriptionTypes,
  PrescriptionsArgsTypes,
  PrescriptionsValuesTypes,
  ProcedureTypes,
  ProceduresArgsTypes,
  ProceduresValuesTypes,
  ProfileTypes,
  TestResultTypes,
  TestResultsArgsTypes,
  TestResultsValuesTypes,
};
