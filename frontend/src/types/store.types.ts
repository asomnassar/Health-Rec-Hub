interface PatientsArgsTypes {
  page?: number;
  search?: string;
}

interface AppointmentsArgsTypes {
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
  patient: string;
  details?: string;
  doctor: string;
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
  PatientTypes,
  PatientsArgsTypes,
  PendingPatientsValuesTypes,
  PrescriptionTypes,
  PrescriptionsValuesTypes,
  ProcedureTypes,
  ProceduresValuesTypes,
  ProfileTypes,
  TestResultTypes,
  TestResultsValuesTypes,
};
