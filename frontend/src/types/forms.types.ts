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

interface FormTypes {
  register: UseFormRegister<
    | LoginFormTypes
    | ResetPasswordFormTypes
    | ForgotPasswordFormTypes
    | SearchForActivePatientsFormTypes
    | AddPatientFormTypes
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
  >;
  errors: {
    [key: string]: { message?: string } | undefined;
  };
  name:
    | "username"
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
    | "address";
  label?: string;
  type?: string;
  select?: boolean;
  data?: Array<string>;
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
  | AddPatientFormTypes;

export type {
  AddPatientFormTypes,
  CatchErrorTypes,
  ForgotPasswordFormTypes,
  FormInputTypes,
  FormTypes,
  FormsTypes,
  LoginFormTypes,
  ResetPasswordFormTypes,
  SubmitDataTypes,
};
