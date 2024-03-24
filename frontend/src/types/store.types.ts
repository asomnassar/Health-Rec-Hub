interface patientsArgsTypes {
  page?: number;
  search?: string;
}

interface appointmentsArgsTypes {
  page?: number;
  search?: string;
}

interface activePatientsValuesTypes {
  isLoading: boolean;
  activePatients: PatientTypes[];
}

interface pendingPatientsValuesTypes {
  isLoading: boolean;
  pendingPatients: PatientTypes[];
}

interface blockedPatientsValuesTypes {
  isLoading: boolean;
  blockedPatients: PatientTypes[];
}

interface appointmentsValuesTypes {
  isLoading: boolean;
  appointments: AppointmentsTypes[];
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

interface AppointmentsTypes {
  _id: string;
  patient: string;
  status: "waiting" | "ended";
  notes?: string;
  date: string;
  time: string;
  createdBy?: object;
}

interface ProceduresTypes {
  _id: string;
  patient: string;
  details?: string;
  doctor: string;
}

interface PrescriptionsTypes {
  _id: string;
  patient: string;
  medication: [string];
  dosage: [string];
  doctor: object;
}

interface TestResultsTypes {
  _id: string;
  patient: string;
  type: string;
  pdf: string;
  doctor: object;
}
export type {
  AppointmentsTypes,
  AuthStateTypes,
  PatientTypes,
  PrescriptionsTypes,
  ProceduresTypes,
  ProfileTypes,
  TestResultsTypes,
  activePatientsValuesTypes,
  appointmentsArgsTypes,
  appointmentsValuesTypes,
  blockedPatientsValuesTypes,
  patientsArgsTypes,
  pendingPatientsValuesTypes,
};
