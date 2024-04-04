import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { z } from "zod";
import { FormsContext } from "../context/FormsContext";
import { addAppointmentSchema } from "../forms/AddAppointmentForm/AddAppointmentSchema";
import { addPatientSchema } from "../forms/AddPatientForm/AddPatientSchema";
import { addPrescriptionSchema } from "../forms/AddPrescriptionForm/AddPrescriptionSchema";
import { addProcedureSchema } from "../forms/AddProcedureForm/AddProcedureSchema";
import { addTestResultSchema } from "../forms/AddTestResultForm/AddTestResultSchema";
import { changePasswordSchema } from "../forms/ChangePasswordForm/ChangePasswordSchema";
import { editAppointmentSchema } from "../forms/EditAppointmentForm/EditAppointmentSchema";
import { editPatientSchema } from "../forms/EditPatientForm/EditPatientSchema";
import { editPrescriptionSchema } from "../forms/EditPrescriptionForm/EditPrescriptionSchema";
import { editProcedureSchema } from "../forms/EditProcedureForm/EditProcedureSchema";
import { editProfileSchema } from "../forms/EditProfileForm/EditProfileSchema";
import { editTestResultSchema } from "../forms/EditTestResultForm/EditTestResultSchema";
import { forgotPasswordSchema } from "../forms/ForgotPasswordForm/ForgotPasswordSchema";
import { loginSchema } from "../forms/LoginForm/LoginSchema";
import { resetPasswordSchema } from "../forms/ResetPasswordForm/ResetPasswordSchema";
import { searchForActivePatientsSchema } from "../forms/SearchForActivePatientsForm/SearchForActivePatientsSchema";
import { searchForAppointmentsSchema } from "../forms/SearchForAppointmentsForm/SearchForAppointmentsSchema";
import { handleDateForInput } from "../functions/handleDateForInput";
import { RootState } from "../store/store";
import useSubmit from "./useSubmit";

const useForms = (type: string) => {
  const { profile } = useSelector((state: RootState) => state.profile);
  const { patient } = useSelector((state: RootState) => state.patient);
  const {
    editableAppointmentData,
    editableTestResultData,
    editableProcedureData,
    setUploadImage,
  } = useContext(FormsContext);

  useEffect(() => {
    if (type === "editProfile") {
      setUploadImage(profile && profile.avatar);
    } else if (type === "editPatient") {
      setUploadImage(patient && patient.avatar);
    }
  }, [type, patient, profile, setUploadImage]);

  const schema = useMemo(() => {
    switch (type) {
      case "addPatient":
        return addPatientSchema;
      case "editPatient":
        return editPatientSchema;
      case "addAppointment":
        return addAppointmentSchema;
      case "editAppointment":
        return editAppointmentSchema;
      case "addPrescription":
        return addPrescriptionSchema;
      case "editPrescription":
        return editPrescriptionSchema;
      case "addProcedure":
        return addProcedureSchema;
      case "editProcedure":
        return editProcedureSchema;
      case "addTestResult":
        return addTestResultSchema;
      case "editTestResult":
        return editTestResultSchema;
      case "editProfile":
        return editProfileSchema;
      case "changePassword":
        return changePasswordSchema;
      case "searchForActivPatients":
        return searchForActivePatientsSchema;
      case "searchForAppointments":
        return searchForAppointmentsSchema;
      case "login":
        return loginSchema;
      case "resetPassword":
        return resetPasswordSchema;
      default:
        return forgotPasswordSchema;
    }
  }, [type]);

  const initialValues = useMemo(() => {
    switch (type) {
      case "editProfile":
        return profile
          ? {
              username: profile.username,
              firstName: profile.firstName,
              lastName: profile.lastName,
              address: profile.address,
              age: profile.age,
              dateOfBirth: handleDateForInput(profile.dateOfBirth),
              phone: profile.phone,
              gender: profile.gender === "male" ? "ذكر" : "انثى",
              email: profile.email,
              specialization: profile?.specialization,
            }
          : {};
      case "editPatient":
        return patient
          ? {
              username: patient.username,
              firstName: patient.firstName,
              lastName: patient.lastName,
              address: patient.address,
              age: patient.age,
              dateOfBirth: handleDateForInput(patient.dateOfBirth),
              phone: patient.phone,
              gender: patient.gender === "male" ? "ذكر" : "انثى",
              email: patient.email,
            }
          : {};
      case "editAppointment":
        return editableAppointmentData
          ? {
              date: handleDateForInput(editableAppointmentData.date),
              time: editableAppointmentData.time,
              notes: editableAppointmentData.notes,
            }
          : {};
      case "editProcedure":
        return editableProcedureData
          ? {
              details: editableProcedureData.details,
            }
          : {};
      case "editTestResult":
        return editableTestResultData
          ? {
              type: editableTestResultData.type,
              pdf: editableTestResultData.pdf,
            }
          : {};
      default:
        return {};
    }
  }, [
    type,
    profile,
    patient,
    editableAppointmentData,
    editableProcedureData,
    editableTestResultData,
  ]);

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  const { submit } = useSubmit(type);

  const onSubmit = (data: FormData) => {
    submit(data);
  };

  return { handleSubmit, onSubmit, register, errors };
};

export default useForms;
