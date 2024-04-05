import {
  AppointmentTypes,
  MedicalRecordTypes,
  MedicationTypes,
  PrescriptionTypes,
  ProcedureTypes,
  TestResultTypes,
} from "./store.types";

interface FormsContextTypes {
  uploadImage: File | string | null;
  setUploadImage: (uploadImage: File | string | null) => void;
  allergeryIndex: number;
  setAllergeryIndex: (index: number) => void;
  surgeryIndex: number;
  setSurgeryIndex: (index: number) => void;
  medicineIndex: number;
  setMedicineIndex: (index: number) => void;
  diseaseIndex: number;
  setDiseaseIndex: (index: number) => void;
  editMedication: { data: MedicationTypes; index: number } | null;
  setEditMedication: (
    medication: { data: MedicationTypes; index: number } | null
  ) => void;
  testResultFile: File | undefined;
  setTestResultFile: (file: File | undefined) => void;
  editableAppointmentData: AppointmentTypes | null;
  setEditableAppointmentData: (appointment: AppointmentTypes | null) => void;
  editableMedicalRecordData: MedicalRecordTypes | null;
  setEditableMedicalRecordData: (
    medicalRecord: MedicalRecordTypes | null
  ) => void;
  editablePrescriptionData: PrescriptionTypes | null;
  setEditablePrescriptionData: (prescription: PrescriptionTypes | null) => void;

  editableProcedureData: ProcedureTypes | null;
  setEditableProcedureData: (procedure: ProcedureTypes | null) => void;

  editableTestResultData: TestResultTypes | null;
  setEditableTestResultData: (appointment: TestResultTypes | null) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;
  openAddMedicineModal: boolean;
  handleOpenAddMedicineModal: () => void;
  handleCloseAddMedicineModal: () => void;
  openEditMedicineModal: boolean;
  handleOpenEditMedicineModal: () => void;
  handleCloseEditMedicineModal: () => void;
  openEditSurgeryModal: boolean;
  handleOpenEditSurgeryModal: () => void;
  handleCloseEditSurgeryModal: () => void;
  openAddSurgeryModal: boolean;
  handleOpenAddSurgeryModal: () => void;
  handleCloseAddSurgeryModal: () => void;
  openEditAllergeryModal: boolean;
  handleOpenEditAllergeryModal: () => void;
  handleCloseEditAllergeryModal: () => void;
  openAddAllergeryModal: boolean;
  handleOpenAddAllergeryModal: () => void;
  handleCloseAddAllergeryModal: () => void;
  openAddDiseaseModal: boolean;
  handleOpenAddDiseaseModal: () => void;
  handleCloseAddDiseaseModal: () => void;
  openEditDiseaseModal: boolean;
  handleOpenEditDiseaseModal: () => void;
  handleCloseEditDiseaseModal: () => void;
  openForgotPasswordModal: boolean;
  handleOpenForgotPasswordModal: () => void;
  handleCloseForgotPasswordModal: () => void;
  openAddMedicalRecordModal: boolean;
  handleOpenAddMedicalRecordModal: () => void;
  handleCloseAddMedicalRecordModal: () => void;
  openEditMedicalRecordModal: boolean;
  handleOpenEditMedicalRecordModal: () => void;
  handleCloseEditMedicalRecordModal: () => void;
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
  openViewAppointmentModal: boolean;
  handleOpenViewAppointmentModal: () => void;
  handleCloseViewAppointmentModal: () => void;
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
  medications: MedicationTypes[] | null;
  setMedications: (medications: MedicationTypes[] | null) => void;
  handleAddMedication: (data: MedicationTypes) => void;
  handleEditMedication: (data: MedicationTypes, index: number) => void;
  handleDeleteMedication: (index: number) => void;
}

interface AppContextTypes {
  openViewPrescriptionModal: boolean;
  handleOpenViewPrescriptionModal: () => void;
  handleCloseViewPrescriptionModal: () => void;
}

export type { AppContextTypes, FormsContextTypes };
