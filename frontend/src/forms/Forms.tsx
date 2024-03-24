import useForms from "../hooks/useForms";
import { FormsTypes } from "../types/forms.types";
import AddPatientForm from "./AddPatientForm/AddPatientForm";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import EditPatientForm from "./EditPatientForm/EditPatientForm";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import LoginForm from "./LoginForm/LoginForm";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";
import SearchForActivePatientsForm from "./SearchForActivePatientsForm/SearchForActivePatientsForm";
import SearchForAppointmentsForm from "./SearchForAppointmentsForm/SearchForAppointmentsForm";

const Forms = ({ type }: FormsTypes) => {
  const { handleSubmit, onSubmit, register, errors } = useForms(type);

  const chosenForm =
    type === "editPatient" ? (
      <EditPatientForm register={register} errors={errors} />
    ) : type === "editProfile" ? (
      <EditProfileForm register={register} errors={errors} />
    ) : type === "changePassword" ? (
      <ChangePasswordForm register={register} errors={errors} />
    ) : type === "addPatient" ? (
      <AddPatientForm register={register} errors={errors} />
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
