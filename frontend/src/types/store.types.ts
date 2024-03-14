interface patientsArgsTypes {
  page?: number;
  search?: string;
}

interface AuthStateTypes {
  token: string | undefined;
  userId: string | undefined;
  type: string | undefined;
}

interface ProfileTypes {
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

export type { AuthStateTypes, ProfileTypes, patientsArgsTypes };
