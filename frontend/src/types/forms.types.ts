import { UseFormRegister } from "react-hook-form";

interface FormsTypes {
  type: string;
}

interface LoginFormTypes {
  username: string;
  password: string;
}

interface ResetPasswordFormTypes {
  password: string;
  confirmPassword: string;
}

interface ForgotPasswordFormTypes {
  email: string;
}

interface SearchForActivePatientsFormTypes {
  search: string;
}

interface AddAppointmentFormTypes {
  date: string;
  time: string;
  notes: string;
}

interface EditAppointmentFormTypes {
  date: string;
  time: string;
  notes: string;
}

interface AddPatientFormTypes {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: string;
  address: string;
  dateOfBirth: string;
  phone: string;
  password: string;
}

interface EditPateintFormTypes {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: string;
  address: string;
  dateOfBirth: string;
  phone: string;
}

interface EditProfileFormTypes {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: string;
  address: string;
  dateOfBirth: string;
  phone: string;
  specialization?: string;
}

interface ChangePasswordFormTypes {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface FormTypes {
  register: UseFormRegister<
    | LoginFormTypes
    | ResetPasswordFormTypes
    | ForgotPasswordFormTypes
    | SearchForActivePatientsFormTypes
    | AddPatientFormTypes
    | ChangePasswordFormTypes
    | EditPateintFormTypes
    | EditProfileFormTypes
    | AddAppointmentFormTypes
    | EditAppointmentFormTypes
  >;
  errors: {
    [key: string]: { message?: string } | undefined;
  };
}

interface FormInputTypes {
  register: UseFormRegister<
    | LoginFormTypes
    | ResetPasswordFormTypes
    | ForgotPasswordFormTypes
    | SearchForActivePatientsFormTypes
    | AddPatientFormTypes
    | ChangePasswordFormTypes
    | EditPateintFormTypes
    | EditProfileFormTypes
    | AddAppointmentFormTypes
    | EditAppointmentFormTypes
  >;
  errors: {
    [key: string]: { message?: string } | undefined;
  };
  name:
    | "username"
    | "newPassword"
    | "oldPassword"
    | "password"
    | "confirmPassword"
    | "email"
    | "search"
    | "firstName"
    | "lastName"
    | "phone"
    | "age"
    | "gender"
    | "dateOfBirth"
    | "address"
    | "specialization"
    | "date"
    | "time"
    | "notes";
  label?: string;
  type?: string;
  select?: boolean;
  data?: Array<string>;
  ac?: string;
}

interface CatchErrorTypes {
  response: {
    data: {
      message: string;
    };
  };
}

type SubmitDataTypes =
  | LoginFormTypes
  | ResetPasswordFormTypes
  | ForgotPasswordFormTypes
  | SearchForActivePatientsFormTypes
  | AddPatientFormTypes
  | ChangePasswordFormTypes
  | EditPateintFormTypes
  | EditProfileFormTypes
  | AddAppointmentFormTypes
  | EditAppointmentFormTypes;

export type {
  AddAppointmentFormTypes,
  AddPatientFormTypes,
  CatchErrorTypes,
  ChangePasswordFormTypes,
  EditAppointmentFormTypes,
  EditProfileFormTypes,
  ForgotPasswordFormTypes,
  FormInputTypes,
  FormsTypes,
  FormTypes,
  LoginFormTypes,
  ResetPasswordFormTypes,
  SubmitDataTypes,
};
