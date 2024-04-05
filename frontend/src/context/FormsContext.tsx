import { ReactNode, createContext, useState } from "react";
import { FormsContextTypes } from "../types/contexts.types";
import {
  AppointmentTypes,
  MedicalRecordTypes,
  MedicationTypes,
  PrescriptionTypes,
  ProcedureTypes,
  TestResultTypes,
} from "../types/store.types";

export const FormsContext = createContext<FormsContextTypes>({
  uploadImage: null,
  setUploadImage: function (): void {
    throw new Error("Function not implemented.");
  },
  medicineIndex: 0,
  setMedicineIndex: function (): void {
    throw new Error("Function not implemented.");
  },
  surgeryIndex: 0,
  setSurgeryIndex: function (): void {
    throw new Error("Function not implemented.");
  },
  allergeryIndex: 0,
  setAllergeryIndex: function (): void {
    throw new Error("Function not implemented.");
  },
  diseaseIndex: 0,
  setDiseaseIndex: function (): void {
    throw new Error("Function not implemented.");
  },
  editMedication: null,
  setEditMedication: function (): void {
    throw new Error("Function not implemented.");
  },
  editableAppointmentData: null,
  setEditableAppointmentData: function (): void {
    throw new Error("Function not implemented.");
  },
  editablePrescriptionData: null,
  setEditablePrescriptionData: function (): void {
    throw new Error("Function not implemented.");
  },
  editableProcedureData: null,
  setEditableProcedureData: function (): void {
    throw new Error("Function not implemented.");
  },
  editableTestResultData: null,
  setEditableTestResultData: function (): void {
    throw new Error("Function not implemented.");
  },
  editableMedicalRecordData: null,
  setEditableMedicalRecordData: function (): void {
    throw new Error("Function not implemented.");
  },
  loading: false,
  setLoading: function (): void {
    throw new Error("Function not implemented.");
  },
  testResultFile: undefined,
  setTestResultFile: function (): void {
    throw new Error("Function not implemented.");
  },
  openForgotPasswordModal: false,
  handleOpenForgotPasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseForgotPasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openAddMedicalRecordModal: false,
  handleOpenAddMedicalRecordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseAddMedicalRecordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditMedicalRecordModal: false,
  handleOpenEditMedicalRecordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditMedicalRecordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openAddMedicineModal: false,
  handleOpenAddMedicineModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseAddMedicineModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditMedicineModal: false,
  handleOpenEditMedicineModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditMedicineModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditSurgeryModal: false,
  handleOpenEditSurgeryModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditSurgeryModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openAddSurgeryModal: false,
  handleOpenAddSurgeryModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseAddSurgeryModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditAllergeryModal: false,
  handleOpenEditAllergeryModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditAllergeryModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openAddAllergeryModal: false,
  handleOpenAddAllergeryModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseAddAllergeryModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openAddDiseaseModal: false,
  handleOpenAddDiseaseModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseAddDiseaseModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditDiseaseModal: false,
  handleOpenEditDiseaseModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditDiseaseModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditProfileModal: false,
  handleOpenEditProfileModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditProfileModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openChangePasswordModal: false,
  handleOpenChangePasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseChangePasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditPatientModal: false,
  handleOpenEditPatientModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditPatientModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openAddAppointmentModal: false,
  handleOpenAddAppointmentModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseAddAppointmentModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openViewAppointmentModal: false,
  handleOpenViewAppointmentModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseViewAppointmentModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditAppointmentModal: false,
  handleOpenEditAppointmentModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditAppointmentModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openAddProcedureModal: false,
  handleOpenAddProcedureModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseAddProcedureModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditProcedureModal: false,
  handleOpenEditProcedureModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditProcedureModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openAddPrescriptionModal: false,
  handleOpenAddPrescriptionModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseAddPrescriptionModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditPrescriptionModal: false,
  handleOpenEditPrescriptionModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditPrescriptionModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openAddTestResultModal: false,
  handleOpenAddTestResultModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseAddTestResultModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditTestResultModal: false,
  handleOpenEditTestResultModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditTestResultModal: function (): void {
    throw new Error("Function not implemented.");
  },
  medications: null,
  setMedications: () => {},
  handleAddMedication: function (): void {
    throw new Error("Function not implemented.");
  },
  handleEditMedication: function (): void {
    throw new Error("Function not implemented.");
  },
  handleDeleteMedication: function (): void {
    throw new Error("Function not implemented.");
  },
});

const FormsProvider = ({ children }: { children: ReactNode }) => {
  const [uploadImage, setUploadImage] = useState<File | string | null>(null);

  const [medicineIndex, setMedicineIndex] = useState<number>(0);
  const [surgeryIndex, setSurgeryIndex] = useState<number>(0);
  const [allergeryIndex, setAllergeryIndex] = useState<number>(0);
  const [diseaseIndex, setDiseaseIndex] = useState<number>(0);

  const [editMedication, setEditMedication] = useState<{
    data: MedicationTypes;
    index: number;
  } | null>(null);

  const [editableAppointmentData, setEditableAppointmentData] =
    useState<AppointmentTypes | null>(null);

  const [testResultFile, setTestResultFile] = useState<File | undefined>(
    undefined
  );

  const [editablePrescriptionData, setEditablePrescriptionData] =
    useState<PrescriptionTypes | null>(null);

  const [editableProcedureData, setEditableProcedureData] =
    useState<ProcedureTypes | null>(null);

  const [editableTestResultData, setEditableTestResultData] =
    useState<TestResultTypes | null>(null);

  const [editableMedicalRecordData, setEditableMedicalRecordData] =
    useState<MedicalRecordTypes | null>(null);

  const [loading, setLoading] = useState(false);

  //Forgot Password
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);

  const handleOpenForgotPasswordModal = () => {
    setOpenForgotPasswordModal(true);
  };

  const handleCloseForgotPasswordModal = () => {
    setOpenForgotPasswordModal(false);
  };

  //Add Medical Record
  const [openAddMedicalRecordModal, setOpenAddMedicalRecordModal] =
    useState(false);

  const handleOpenAddMedicalRecordModal = () => {
    setOpenAddMedicalRecordModal(true);
  };

  const handleCloseAddMedicalRecordModal = () => {
    setOpenAddMedicalRecordModal(false);
  };

  //Edit Medical Record
  const [openEditMedicalRecordModal, setOpenEditMedicalRecordModal] =
    useState(false);

  const handleOpenEditMedicalRecordModal = () => {
    setOpenEditMedicalRecordModal(true);
  };
  const handleCloseEditMedicalRecordModal = () => {
    setOpenEditMedicalRecordModal(false);
  };

  //Add Medicine
  const [openAddMedicineModal, setOpenAddMedicineModal] = useState(false);

  const handleOpenAddMedicineModal = () => {
    setOpenAddMedicineModal(true);
  };
  const handleCloseAddMedicineModal = () => {
    setOpenAddMedicineModal(false);
  };

  //Edit Medicine
  const [openEditMedicineModal, setOpenEditMedicineModal] = useState(false);

  const handleOpenEditMedicineModal = () => {
    setOpenEditMedicineModal(true);
  };

  const handleCloseEditMedicineModal = () => {
    setOpenEditMedicineModal(false);
  };

  //Add Surgery
  const [openAddSurgeryModal, setOpenAddSurgeryModal] = useState(false);

  const handleOpenAddSurgeryModal = () => {
    setOpenAddSurgeryModal(true);
  };
  const handleCloseAddSurgeryModal = () => {
    setOpenAddSurgeryModal(false);
  };
  //Edit Surgery
  const [openEditSurgeryModal, setOpenEditSurgeryModal] = useState(false);

  const handleOpenEditSurgeryModal = () => {
    setOpenEditSurgeryModal(true);
  };
  const handleCloseEditSurgeryModal = () => {
    setOpenEditSurgeryModal(false);
  };
  //Add Allergery
  const [openAddAllergeryModal, setOpenAddAllergeryModal] = useState(false);

  const handleOpenAddAllergeryModal = () => {
    setOpenAddAllergeryModal(true);
  };
  const handleCloseAddAllergeryModal = () => {
    setOpenAddAllergeryModal(false);
  };
  //Edit Allergery
  const [openEditAllergeryModal, setOpenEditAllergeryModal] = useState(false);

  const handleOpenEditAllergeryModal = () => {
    setOpenEditAllergeryModal(true);
  };
  const handleCloseEditAllergeryModal = () => {
    setOpenEditAllergeryModal(false);
  };
  //Add Disease
  const [openAddDiseaseModal, setOpenAddDiseaseModal] = useState(false);

  const handleOpenAddDiseaseModal = () => {
    setOpenAddDiseaseModal(true);
  };
  const handleCloseAddDiseaseModal = () => {
    setOpenAddDiseaseModal(false);
  };
  //Edit Disease
  const [openEditDiseaseModal, setOpenEditDiseaseModal] = useState(false);

  const handleOpenEditDiseaseModal = () => {
    setOpenEditDiseaseModal(true);
  };

  const handleCloseEditDiseaseModal = () => {
    setOpenEditDiseaseModal(false);
  };

  //Edit Profile
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);

  const handleOpenEditProfileModal = () => {
    setOpenEditProfileModal(true);
  };

  const handleCloseEditProfileModal = () => {
    setOpenEditProfileModal(false);
  };

  //Change Password
  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);

  const handleOpenChangePasswordModal = () => {
    setOpenChangePasswordModal(true);
  };

  const handleCloseChangePasswordModal = () => {
    setOpenChangePasswordModal(false);
  };

  //Edit Patient
  const [openEditPatientModal, setOpenEditPatientModal] = useState(false);

  const handleOpenEditPatientModal = () => {
    setOpenEditPatientModal(true);
  };

  const handleCloseEditPatientModal = () => {
    setOpenEditPatientModal(false);
  };

  //Add Appointment
  const [openAddAppointmentModal, setOpenAddAppointmentModal] = useState(false);

  const handleOpenAddAppointmentModal = () => {
    setOpenAddAppointmentModal(true);
  };

  const handleCloseAddAppointmentModal = () => {
    setOpenAddAppointmentModal(false);
  };

  //View Appointment
  const [openViewAppointmentModal, setOpenViewAppointmentModal] =
    useState(false);

  const handleOpenViewAppointmentModal = () => {
    setOpenViewAppointmentModal(true);
  };

  const handleCloseViewAppointmentModal = () => {
    setOpenViewAppointmentModal(false);
  };

  //Edit Appointment
  const [openEditAppointmentModal, setOpenEditAppointmentModal] =
    useState(false);

  const handleOpenEditAppointmentModal = () => {
    setOpenEditAppointmentModal(true);
  };

  const handleCloseEditAppointmentModal = () => {
    setOpenEditAppointmentModal(false);
  };

  //Add Procedure
  const [openAddProcedureModal, setOpenAddProcedureModal] = useState(false);

  const handleOpenAddProcedureModal = () => {
    setOpenAddProcedureModal(true);
  };

  const handleCloseAddProcedureModal = () => {
    setOpenAddProcedureModal(false);
  };

  //Edit Procedure
  const [openEditProcedureModal, setOpenEditProcedureModal] = useState(false);

  const handleOpenEditProcedureModal = () => {
    setOpenEditProcedureModal(true);
  };

  const handleCloseEditProcedureModal = () => {
    setOpenEditProcedureModal(false);
  };

  //Add Prescription
  const [openAddPrescriptionModal, setOpenAddPrescriptionModal] =
    useState(false);

  const handleOpenAddPrescriptionModal = () => {
    setOpenAddPrescriptionModal(true);
    setMedications(null);
  };

  const handleCloseAddPrescriptionModal = () => {
    setOpenAddPrescriptionModal(false);
  };

  //Edit Prescription
  const [openEditPrescriptionModal, setOpenEditPrescriptionModal] =
    useState(false);

  const handleOpenEditPrescriptionModal = () => {
    setOpenEditPrescriptionModal(true);
  };

  const handleCloseEditPrescriptionModal = () => {
    setOpenEditPrescriptionModal(false);
  };

  //Add TestResult
  const [openAddTestResultModal, setOpenAddTestResultModal] = useState(false);

  const handleOpenAddTestResultModal = () => {
    setOpenAddTestResultModal(true);
  };

  const handleCloseAddTestResultModal = () => {
    setOpenAddTestResultModal(false);
  };

  //Edi TestResult
  const [openEditTestResultModal, setOpenEditTestResultModal] = useState(false);

  const handleOpenEditTestResultModal = () => {
    setOpenEditTestResultModal(true);
  };

  const handleCloseEditTestResultModal = () => {
    setOpenEditTestResultModal(false);
  };

  //Medication Table
  const [medications, setMedications] = useState<MedicationTypes[] | null>(
    null
  );

  const handleAddMedication = (data: MedicationTypes) => {
    if (medications) {
      setMedications([...medications, data]);
    } else {
      setMedications([data]);
    }
  };

  const handleEditMedication = (data: MedicationTypes, index: number) => {
    if (medications) {
      const newMed: MedicationTypes[] = medications;
      for (let i = 0; i < medications.length; i++) {
        if (i === index) {
          newMed[i] = data;
        }
      }
      setMedications(newMed);
    }
  };

  const handleDeleteMedication = (index: number) => {
    if (medications) {
      setMedications(medications?.filter((_, i) => i !== index));
    }
    setEditMedication(null);
  };

  const values = {
    handleAddMedication,
    handleDeleteMedication,
    handleEditMedication,
    medications,
    uploadImage,
    setUploadImage,
    openForgotPasswordModal,
    handleOpenForgotPasswordModal,
    handleCloseForgotPasswordModal,
    openEditProfileModal,
    handleOpenEditProfileModal,
    handleCloseEditProfileModal,
    openChangePasswordModal,
    setMedications,
    editablePrescriptionData,
    setEditablePrescriptionData,
    openAddMedicineModal,
    handleOpenAddMedicineModal,
    handleCloseAddMedicineModal,
    openAddAllergeryModal,
    handleOpenAddAllergeryModal,
    handleCloseAddAllergeryModal,
    openEditAllergeryModal,
    handleOpenEditAllergeryModal,
    handleCloseEditAllergeryModal,
    openEditMedicineModal,
    handleOpenEditMedicineModal,
    handleCloseEditMedicineModal,
    openAddSurgeryModal,
    handleOpenAddSurgeryModal,
    handleCloseAddSurgeryModal,
    openEditSurgeryModal,
    handleOpenEditSurgeryModal,
    handleCloseEditSurgeryModal,
    setEditMedication,
    openEditDiseaseModal,
    handleOpenEditDiseaseModal,
    handleCloseEditDiseaseModal,
    openAddDiseaseModal,
    handleCloseAddDiseaseModal,
    handleOpenAddDiseaseModal,
    editableProcedureData,
    openViewAppointmentModal,
    handleOpenViewAppointmentModal,
    handleCloseViewAppointmentModal,
    setEditableProcedureData,
    editableTestResultData,
    setEditableTestResultData,
    handleOpenChangePasswordModal,
    handleCloseChangePasswordModal,
    editMedication,
    editableMedicalRecordData,
    setEditableMedicalRecordData,
    testResultFile,
    setTestResultFile,
    openEditPatientModal,
    handleOpenEditPatientModal,
    handleCloseEditPatientModal,
    openAddAppointmentModal,
    editableAppointmentData,
    setEditableAppointmentData,
    handleOpenAddAppointmentModal,
    handleCloseAddAppointmentModal,
    openEditAppointmentModal,
    handleOpenEditAppointmentModal,
    handleCloseEditAppointmentModal,
    openEditTestResultModal,
    handleCloseEditTestResultModal,
    handleOpenEditTestResultModal,
    openAddTestResultModal,
    handleOpenAddTestResultModal,
    handleCloseAddTestResultModal,
    openEditPrescriptionModal,
    openAddMedicalRecordModal,
    handleOpenAddMedicalRecordModal,
    handleCloseAddMedicalRecordModal,
    medicineIndex,
    setMedicineIndex,
    surgeryIndex,
    setSurgeryIndex,
    allergeryIndex,
    setAllergeryIndex,
    diseaseIndex,
    setDiseaseIndex,
    openEditMedicalRecordModal,
    handleOpenEditMedicalRecordModal,
    handleCloseEditMedicalRecordModal,
    handleOpenEditPrescriptionModal,
    handleCloseEditPrescriptionModal,
    openAddProcedureModal,
    handleOpenAddProcedureModal,
    handleCloseAddProcedureModal,
    openEditProcedureModal,
    handleOpenEditProcedureModal,
    handleCloseEditProcedureModal,
    openAddPrescriptionModal,
    handleOpenAddPrescriptionModal,
    handleCloseAddPrescriptionModal,
    loading,
    setLoading,
  };
  return (
    <FormsContext.Provider value={values}>{children}</FormsContext.Provider>
  );
};

export default FormsProvider;
