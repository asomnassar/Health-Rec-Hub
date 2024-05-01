import useForms from "../hooks/useForms";
import { FormsTypes } from "../types/forms.types";
import AddAppointmentForm from "./AddAppointmentForm/AddAppointmentForm";
import AddAllergeryForm from "./AddMedicalRecordForm/AddAllergeryForm";
import AddDiseaseForm from "./AddMedicalRecordForm/AddDiseaseForm";
import AddMedicalRecordForm from "./AddMedicalRecordForm/AddMedicalRecordForm";
import AddMedicineForm from "./AddMedicalRecordForm/AddMedicineForm";
import AddSugeryForm from "./AddMedicalRecordForm/AddSurgeryForm";
import AddPatientForm from "./AddPatientForm/AddPatientForm";
import AddPrescriptionForm from "./AddPrescriptionForm/AddPrescriptionForm";
import AddProcedureForm from "./AddProcedureForm/AddProcedureForm";
import AddTestResultForm from "./AddTestResultForm/AddTestResultForm";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import EditAppointmentForm from "./EditAppointmentForm/EditAppointmentForm";
import EditAllergeryForm from "./EditMedicalRecordForm/EditAllergeryForm";
import EditDiseaseForm from "./EditMedicalRecordForm/EditDiseaseForm";
import EditMedicalRecordForm from "./EditMedicalRecordForm/EditMedicalRecordForm";
import EditMedicineForm from "./EditMedicalRecordForm/EditMedicineForm";
import EditSurgeryForm from "./EditMedicalRecordForm/EditSurgeryForm";
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
    type === "addMedicalRecord" ? (
      <AddMedicalRecordForm register={register} errors={errors} />
    ) : type === "addSurgery" ? (
      <AddSugeryForm register={register} errors={errors} />
    ) : type === "addMedicine" ? (
      <AddMedicineForm register={register} errors={errors} />
    ) : type === "addDisease" ? (
      <AddDiseaseForm register={register} errors={errors} />
    ) : type === "addAllergery" ? (
      <AddAllergeryForm register={register} errors={errors} />
    ) : type === "editMedicalRecord" ? (
      <EditMedicalRecordForm register={register} errors={errors} />
    ) : type === "editSurgery" ? (
      <EditSurgeryForm register={register} errors={errors} />
    ) : type === "editMedicine" ? (
      <EditMedicineForm register={register} errors={errors} />
    ) : type === "editAllergery" ? (
      <EditAllergeryForm register={register} errors={errors} />
    ) : type === "editDisease" ? (
      <EditDiseaseForm register={register} errors={errors} />
    ) : type === "addPatient" ? (
      <AddPatientForm register={register} errors={errors} />
    ) : type === "editPatient" ? (
      <EditPatientForm register={register} errors={errors} />
    ) : type === "addPrescription" ? (
      <AddPrescriptionForm />
    ) : type === "editPrescription" ? (
      <EditPrescriptionForm />
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
