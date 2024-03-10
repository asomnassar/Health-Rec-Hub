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

interface FormTypes {
  register: UseFormRegister<
    LoginFormTypes | ResetPasswordFormTypes | ForgotPasswordFormTypes
  >;
  errors: {
    [key: string]: { message?: string } | undefined;
  };
}

interface FormInputTypes {
  register: UseFormRegister<
    LoginFormTypes | ResetPasswordFormTypes | ForgotPasswordFormTypes
  >;
  errors: {
    [key: string]: { message?: string } | undefined;
  };
  name: "username" | "password" | "confirmPassword" | "email";
  label?: string;
  type?: string;
}

export type {
  ForgotPasswordFormTypes,
  FormInputTypes,
  FormTypes,
  FormsTypes,
  LoginFormTypes,
  ResetPasswordFormTypes,
};
