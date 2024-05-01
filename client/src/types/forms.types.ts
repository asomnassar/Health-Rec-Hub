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

interface SearchForAppointmentsFormTypes {
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

interface AddPrescriptionFormTypes {}

interface EditPrescriptionFormTypes {}

interface AddProcedureFormTypes {
  details: string;
}

interface EditProcedureFormTypes {
  details: string;
}

interface AddTestResultFormTypes {
  type: string;
}

interface EditTestResultFormTypes {
  type: string;
}

interface AddSurgeryFormTypes {
  surgery: string;
}

interface AddDiseaseFormTypes {
  disease: string;
}

interface AddAllergeryFormTypes {
  allergery: string;
}

interface AddMedicineFormTypes {
  medicine: string;
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

interface EditPatientFormTypes {
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

interface AddMedicalRecordFormTypes {
  currentHealthIssues: string;
  bloodPressure: string;
  respiratoryRate: string;
  weight: string;
  height: string;
  bloodType: string;
  bloodSugarLevel: string;
  heartRate: string;
}

interface EditMedicalRecordFormTypes {
  currentHealthIssues: string;
  bloodPressure: string;
  respiratoryRate: string;
  weight: string;
  height: string;
  bloodType: string;
  bloodSugarLevel: string;
  heartRate: string;
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
    | EditPatientFormTypes
    | ChangePasswordFormTypes
    | EditProfileFormTypes
    | AddAppointmentFormTypes
    | EditAppointmentFormTypes
    | AddPrescriptionFormTypes
    | EditPrescriptionFormTypes
    | SearchForAppointmentsFormTypes
    | AddProcedureFormTypes
    | AddMedicineFormTypes
    | AddAllergeryFormTypes
    | AddDiseaseFormTypes
    | AddSurgeryFormTypes
    | EditProcedureFormTypes
    | AddTestResultFormTypes
    | EditTestResultFormTypes
    | AddMedicalRecordFormTypes
    | EditMedicalRecordFormTypes
  >;
  errors: {
    [key: string]: { message?: string } | undefined;
  };
}

interface FormInputTypes {
  register?: UseFormRegister<
    | LoginFormTypes
    | ResetPasswordFormTypes
    | ForgotPasswordFormTypes
    | SearchForActivePatientsFormTypes
    | AddPatientFormTypes
    | EditPatientFormTypes
    | ChangePasswordFormTypes
    | EditProfileFormTypes
    | SearchForAppointmentsFormTypes
    | AddAppointmentFormTypes
    | EditAppointmentFormTypes
    | AddPrescriptionFormTypes
    | EditPrescriptionFormTypes
    | AddProcedureFormTypes
    | EditProcedureFormTypes
    | AddTestResultFormTypes
    | EditTestResultFormTypes
    | AddMedicalRecordFormTypes
    | EditMedicalRecordFormTypes
    | AddMedicineFormTypes
    | AddAllergeryFormTypes
    | AddDiseaseFormTypes
    | AddSurgeryFormTypes
  >;
  errors?: {
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
    | "notes"
    | "details"
    | "type"
    | "currentHealthIssues"
    | "bloodPressure"
    | "respiratoryRate"
    | "weight"
    | "height"
    | "bloodType"
    | "bloodSugarLevel"
    | "heartRate"
    | "disease"
    | "allergery"
    | "medicine"
    | "surgery";
  label?: string;
  type?: string;
  select?: boolean;
  data?: Array<string>;
  ac?: string;
  multiline?: boolean;
  rows?: number;
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
  | EditPatientFormTypes
  | AddPatientFormTypes
  | ChangePasswordFormTypes
  | EditProfileFormTypes
  | AddAppointmentFormTypes
  | EditAppointmentFormTypes
  | AddPrescriptionFormTypes
  | EditPrescriptionFormTypes
  | AddProcedureFormTypes
  | EditProcedureFormTypes
  | SearchForAppointmentsFormTypes
  | AddTestResultFormTypes
  | EditTestResultFormTypes
  | AddMedicineFormTypes
  | AddAllergeryFormTypes
  | AddDiseaseFormTypes
  | AddSurgeryFormTypes
  | AddMedicalRecordFormTypes
  | EditMedicalRecordFormTypes;

export type {
  AddAllergeryFormTypes,
  AddAppointmentFormTypes,
  AddDiseaseFormTypes,
  AddMedicalRecordFormTypes,
  AddMedicineFormTypes,
  AddPatientFormTypes,
  AddPrescriptionFormTypes,
  AddProcedureFormTypes,
  AddSurgeryFormTypes,
  AddTestResultFormTypes,
  CatchErrorTypes,
  ChangePasswordFormTypes,
  EditAppointmentFormTypes,
  EditMedicalRecordFormTypes,
  EditPatientFormTypes,
  EditPrescriptionFormTypes,
  EditProcedureFormTypes,
  EditProfileFormTypes,
  EditTestResultFormTypes,
  ForgotPasswordFormTypes,
  FormInputTypes,
  FormsTypes,
  FormTypes,
  LoginFormTypes,
  ResetPasswordFormTypes,
  SearchForAppointmentsFormTypes,
  SubmitDataTypes,
};
