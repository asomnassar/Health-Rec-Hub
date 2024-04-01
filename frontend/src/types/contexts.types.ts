import {
  AppointmentTypes,
  PrescriptionTypes,
  ProcedureTypes,
  TestResultTypes,
} from "./store.types";

interface AppContextTypes {}

interface FormsContextTypes {
  uploadImage: File | string | null;
  setUploadImage: (uploadImage: File | string | null) => void;
  testResultFile: File | undefined;
  setTestResultFile: (file: File | undefined) => void;
  editableAppointmentData: AppointmentTypes | null;
  setEditableAppointmentData: (appointment: AppointmentTypes | null) => void;

  editablePrescriptionData: PrescriptionTypes | null;
  setEditablePrescriptionData: (prescription: PrescriptionTypes | null) => void;

  editableProcedureData: ProcedureTypes | null;
  setEditableProcedureData: (procedure: ProcedureTypes | null) => void;

  editableTestResultData: TestResultTypes | null;
  setEditableTestResultData: (appointment: TestResultTypes | null) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
  openForgotPasswordModal: boolean;
  handleOpenForgotPasswordModal: () => void;
  handleCloseForgotPasswordModal: () => void;
  openEditProfileModal: boolean;
  handleOpenEditProfileModal: () => void;
  handleCloseEditProfileModal: () => void;
  openChangePasswordModal: boolean;
  handleOpenChangePasswordModal: () => void;
  handleCloseChangePasswordModal: () => void;
  openEditPatientModal: boolean;
  handleOpenEditPatientModal: () => void;
  handleCloseEditPatientModal: () => void;
  openAddAppointmentModal: boolean;
  handleOpenAddAppointmentModal: () => void;
  handleCloseAddAppointmentModal: () => void;
  openEditAppointmentModal: boolean;
  handleOpenEditAppointmentModal: () => void;
  handleCloseEditAppointmentModal: () => void;
  openAddProcedureModal: boolean;
  handleOpenAddProcedureModal: () => void;
  handleCloseAddProcedureModal: () => void;
  openEditProcedureModal: boolean;
  handleOpenEditProcedureModal: () => void;
  handleCloseEditProcedureModal: () => void;
  openAddPrescriptionModal: boolean;
  handleOpenAddPrescriptionModal: () => void;
  handleCloseAddPrescriptionModal: () => void;
  openEditPrescriptionModal: boolean;
  handleOpenEditPrescriptionModal: () => void;
  handleCloseEditPrescriptionModal: () => void;
  openAddTestResultModal: boolean;
  handleOpenAddTestResultModal: () => void;
  handleCloseAddTestResultModal: () => void;
  openEditTestResultModal: boolean;
  handleOpenEditTestResultModal: () => void;
  handleCloseEditTestResultModal: () => void;
}

export type { AppContextTypes, FormsContextTypes };
