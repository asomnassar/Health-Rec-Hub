import useForms from "../hooks/useForms";
import { FormsTypes } from "../types/forms.types";
import AddPatientForm from "./AddPatientForm/AddPatientForm";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import LoginForm from "./LoginForm/LoginForm";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";
import SearchForActivePatientsForm from "./SearchForActivePatientsForm/SearchForActivePatientsForm";

const Forms = ({type}:FormsTypes) => {
  const { handleSubmit, onSubmit, register, errors} =useForms(type)

  const chosenForm=(
    type==="addPatient" ? <AddPatientForm register={register} errors={errors}  />  :type === "searchForActivePatients" ? <SearchForActivePatientsForm register={register} errors={errors} /> :type === "login" ? <LoginForm register={register} errors={errors} /> : type === "resetPassword" ? <ResetPasswordForm register={register} errors={errors}  /> : type === "forgotPassword" && <ForgotPasswordForm register={register} errors={errors} /> 
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {chosenForm}
    </form>
  )
}

export default Forms