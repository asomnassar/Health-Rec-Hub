import useForms from "../hooks/useForms";
import { FormsTypes } from "../types/forms.types";
import AddAppointmentForm from "./AddAppointmentForm/AddAppointmentForm";
import AddPatientForm from "./AddPatientForm/AddPatientForm";
import AddPrescriptionForm from "./AddPrescriptionForm/AddPrescriptionForm";
import AddProcedureForm from "./AddProcedureForm/AddProcedureForm";
import AddTestResultForm from "./AddTestResultForm/AddTestResultForm";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import EditAppointmentForm from "./EditAppointmentForm/EditAppointmentForm";
import EditPatientForm from "./EditPatientForm/EditPatientForm";
import EditPrescriptionForm from "./EditPrescriptionForm/EditPrescriptionForm";
import EditProcedureForm from "./EditProcedureForm/EditProcedureForm";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import EditTestResultForm from "./EditTestResultForm/EditTestResultForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import LoginForm from "./LoginForm/LoginForm";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";
import SearchForActivePatientsForm from "./SearchForActivePatientsForm/SearchForActivePatientsForm";
import SearchForAppointmentsForm from "./SearchForAppointmentsForm/SearchForAppointmentsForm";

const Forms = ({ type }: FormsTypes) => {
  const { handleSubmit, onSubmit, register, errors } = useForms(type);

  const chosenForm =
    type === "addPatient" ? (
      <AddPatientForm register={register} errors={errors} />
    ) : type === "editPatient" ? (
      <EditPatientForm register={register} errors={errors} />
    ) : type === "addPrescription" ? (
      <AddPrescriptionForm register={register} errors={errors} />
    ) : type === "editPrescription" ? (
      <EditPrescriptionForm register={register} errors={errors} />
    ) : type === "addProcedure" ? (
      <AddProcedureForm register={register} errors={errors} />
    ) : type === "editProcedure" ? (
      <EditProcedureForm register={register} errors={errors} />
    ) : type === "addTestResult" ? (
      <AddTestResultForm register={register} errors={errors} />
    ) : type === "editTestResult" ? (
      <EditTestResultForm register={register} errors={errors} />
    ) : type === "editProfile" ? (
      <EditProfileForm register={register} errors={errors} />
    ) : type === "changePassword" ? (
      <ChangePasswordForm register={register} errors={errors} />
    ) : type === "addAppointment" ? (
      <AddAppointmentForm register={register} errors={errors} />
    ) : type === "editAppointment" ? (
      <EditAppointmentForm register={register} errors={errors} />
    ) : type === "searchForActivePatients" ? (
      <SearchForActivePatientsForm register={register} errors={errors} />
    ) : type === "searchForAppointments" ? (
      <SearchForAppointmentsForm register={register} errors={errors} />
    ) : type === "login" ? (
      <LoginForm register={register} errors={errors} />
    ) : type === "resetPassword" ? (
      <ResetPasswordForm register={register} errors={errors} />
    ) : (
      type === "forgotPassword" && (
        <ForgotPasswordForm register={register} errors={errors} />
      )
    );

  return <form onSubmit={handleSubmit(onSubmit)}>{chosenForm}</form>;
};

export default Forms;
