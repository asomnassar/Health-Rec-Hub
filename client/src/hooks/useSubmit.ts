import axios from "axios";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FormsContext } from "../context/FormsContext";
import { handleAlert } from "../functions/handleAlert";
import { getAppointments } from "../store/appointmentsSlice";
import { setAuth } from "../store/authSlice";
import { getPatient } from "../store/patientSlice";
import { getPendingPatients } from "../store/pendingPatientsSlice";
import { getPrescriptions } from "../store/prescriptionsSlice";
import { getProcedures } from "../store/proceduresSlice";
import { getProfile } from "../store/profileSlice";
import { AppDispatch, RootState } from "../store/store";
import { getTestResults } from "../store/testResultsSlice";
import {
  AddAllergeryFormTypes,
  AddAppointmentFormTypes,
  AddDiseaseFormTypes,
  AddMedicalRecordFormTypes,
  AddMedicineFormTypes,
  AddPatientFormTypes,
  AddProcedureFormTypes,
  AddSurgeryFormTypes,
  AddTestResultFormTypes,
  CatchErrorTypes,
  ChangePasswordFormTypes,
  EditAppointmentFormTypes,
  EditMedicalRecordFormTypes,
  EditPatientFormTypes,
  EditProcedureFormTypes,
  EditProfileFormTypes,
  EditTestResultFormTypes,
  SubmitDataTypes,
} from "../types/forms.types";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const useSubmit = (type: string) => {
  const {
    setLoading,
    handleCloseChangePasswordModal,
    handleCloseForgotPasswordModal,
    handleCloseEditProfileModal,
    handleCloseAddAppointmentModal,
    handleCloseEditAppointmentModal,
    handleCloseEditPatientModal,
    handleCloseAddPrescriptionModal,
    handleCloseEditPrescriptionModal,
    handleCloseAddProcedureModal,
    handleCloseEditProcedureModal,
    handleCloseAddTestResultModal,
    handleCloseEditTestResultModal,
    editableAppointmentData,
    editablePrescriptionData,
    editableProcedureData,
    editableTestResultData,
    testResultFile,
    medications,
    setTestResultFile,
    handleCloseAddMedicalRecordModal,
    handleCloseEditMedicalRecordModal,
    editableMedicalRecordData,
    handleCloseAddSurgeryModal,
    handleCloseEditSurgeryModal,
    handleCloseAddMedicineModal,
    handleCloseEditMedicineModal,
    handleCloseEditAllergeryModal,
    handleCloseAddAllergeryModal,
    handleCloseAddDiseaseModal,
    handleCloseEditDiseaseModal,
    surgeryIndex,
    medicineIndex,
    allergeryIndex,
    diseaseIndex,
  } = useContext(FormsContext);
  const { uploadImage } = useContext(FormsContext);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams();

  const addMedicalRecordSubmit = async (data: AddMedicalRecordFormTypes) => {
    setLoading(true);
    await server
      .post(`/medicalRecord/${id}`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseAddMedicalRecordModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editMedicalRecordSubmit = async (data: EditMedicalRecordFormTypes) => {
    setLoading(true);
    await server
      .put(
        `/medicalRecord/${
          editableMedicalRecordData && editableMedicalRecordData.id
        }`,
        data,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseEditMedicalRecordModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const addSurgerySubmit = async (data: AddSurgeryFormTypes) => {
    if (!editableMedicalRecordData) {
      return "";
    }
    setLoading(true);
    await server
      .put(
        `/medicalRecord/${
          editableMedicalRecordData && editableMedicalRecordData.id
        }`,
        { surgeries: [...editableMedicalRecordData.surgeries, data.surgery] },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseAddSurgeryModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editSurgerySubmit = async (data: AddSurgeryFormTypes) => {
    if (!editableMedicalRecordData) {
      return "";
    }
    const d = [...editableMedicalRecordData.surgeries];
    d[surgeryIndex] = data.surgery;
    setLoading(true);
    await server
      .put(
        `/medicalRecord/${
          editableMedicalRecordData && editableMedicalRecordData.id
        }`,
        { surgeries: d },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseEditSurgeryModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const addMedicineSubmit = async (data: AddMedicineFormTypes) => {
    if (!editableMedicalRecordData) {
      return "";
    }
    setLoading(true);
    await server
      .put(
        `/medicalRecord/${
          editableMedicalRecordData && editableMedicalRecordData.id
        }`,
        { medicines: [...editableMedicalRecordData.medicines, data.medicine] },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseAddMedicineModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editMedicineSubmit = async (data: AddMedicineFormTypes) => {
    if (!editableMedicalRecordData) {
      return "";
    }
    const d = [...editableMedicalRecordData.medicines];
    d[medicineIndex] = data.medicine;
    setLoading(true);
    await server
      .put(
        `/medicalRecord/${
          editableMedicalRecordData && editableMedicalRecordData.id
        }`,
        { medicines: d },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseEditMedicineModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const addAllergerySubmit = async (data: AddAllergeryFormTypes) => {
    if (!editableMedicalRecordData) {
      return "";
    }
    setLoading(true);
    await server
      .put(
        `/medicalRecord/${
          editableMedicalRecordData && editableMedicalRecordData.id
        }`,
        { allergies: [...editableMedicalRecordData.allergies, data.allergery] },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseAddAllergeryModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editAllergerySubmit = async (data: AddAllergeryFormTypes) => {
    if (!editableMedicalRecordData) {
      return "";
    }
    const d = [...editableMedicalRecordData.allergies];
    d[allergeryIndex] = data.allergery;
    setLoading(true);
    await server
      .put(
        `/medicalRecord/${
          editableMedicalRecordData && editableMedicalRecordData.id
        }`,
        { allergies: d },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseEditAllergeryModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const addDiseaseSubmit = async (data: AddDiseaseFormTypes) => {
    if (!editableMedicalRecordData) {
      return "";
    }
    setLoading(true);
    await server
      .put(
        `/medicalRecord/${
          editableMedicalRecordData && editableMedicalRecordData.id
        }`,
        { diseases: [...editableMedicalRecordData.diseases, data.disease] },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseAddDiseaseModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editDiseaseSubmit = async (data: AddDiseaseFormTypes) => {
    if (!editableMedicalRecordData) {
      return "";
    }
    const d = [...editableMedicalRecordData.diseases];
    d[diseaseIndex] = data.disease;
    setLoading(true);
    await server
      .put(
        `/medicalRecord/${
          editableMedicalRecordData && editableMedicalRecordData.id
        }`,
        { diseases: d },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseEditDiseaseModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const addAppointmentSubmit = async (data: AddAppointmentFormTypes) => {
    setLoading(true);
    await server
      .post(`/appointment/${id}`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseAddAppointmentModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editAppointmentSubmit = async (data: EditAppointmentFormTypes) => {
    setLoading(true);
    await server
      .put(
        `/appointment/${editableAppointmentData && editableAppointmentData.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        if (id) {
          dispatch(getPatient({ id }));
        } else {
          dispatch(getAppointments({ page: 1 }));
        }
        handleCloseEditAppointmentModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const addPrescriptionSubmit = async () => {
    if (!medications || medications.length === 0) {
      handleAlert({ msg: "قم بادخال الدواء والجرعة" });
      return;
    }
    setLoading(true);
    await server
      .post(
        `/prescription/${id}`,
        { medications },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseAddPrescriptionModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editPrescriptionSubmit = async () => {
    if (!medications || medications.length === 0) {
      handleAlert({ msg: "قم بادخال الدواء والجرعة" });
      return;
    }
    setLoading(true);
    await server
      .put(
        `/prescription/${
          editablePrescriptionData && editablePrescriptionData.id
        }`,
        { medications },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        if (id) {
          dispatch(getPatient({ id }));
        } else {
          dispatch(getPrescriptions({ page: 1 }));
        }
        handleCloseEditPrescriptionModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const addProcedureSubmit = async (data: AddProcedureFormTypes) => {
    setLoading(true);
    await server
      .post(`/procedure/${id}`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseAddProcedureModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editProcedureSubmit = async (data: EditProcedureFormTypes) => {
    setLoading(true);
    await server
      .put(
        `/procedure/${editableProcedureData && editableProcedureData.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        if (id) {
          dispatch(getPatient({ id }));
        } else {
          dispatch(getProcedures({ page: 1 }));
        }
        handleCloseEditProcedureModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const addTestResultSubmit = async (data: AddTestResultFormTypes) => {
    const formData = new FormData();
    if (!testResultFile) {
      handleAlert({ msg: "ارفع ملف الاختبار", status: "error" });
      return;
    } else {
      formData.append("file", testResultFile);
    }
    formData.append("type", data.type);
    setLoading(true);
    await server
      .post(`/testResult/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        setTestResultFile("");
        dispatch(getPatient({ id }));
        handleCloseAddTestResultModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editTestResultSubmit = async (data: EditTestResultFormTypes) => {
    const formData = new FormData();
    if (!testResultFile) {
      handleAlert({ msg: "ارفع ملف الاختبار", status: "error" });
      return;
    } else {
      formData.append("file", testResultFile);
    }
    formData.append("type", data.type);
    setLoading(true);
    await server
      .put(
        `/testResult/${editableTestResultData && editableTestResultData.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        setTestResultFile("");
        if (id) {
          dispatch(getPatient({ id }));
        } else {
          dispatch(getTestResults({ page: 1 }));
        }
        handleCloseEditTestResultModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const addPatientSubmit = async (data: AddPatientFormTypes) => {
    setLoading(true);
    const formData = new FormData();
    if (uploadImage) {
      formData.append("image", uploadImage);
    }
    formData.append("username", data.username);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("age", data.age);
    formData.append("gender", data.gender === "ذكر" ? "male" : "female");
    formData.append("dateOfBirth", data.dateOfBirth);
    formData.append("password", data.password);
    await server
      .post("/patient/addPatient", formData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPendingPatients({ page: 1 }));
        if (auth.type === "technicalAdministrator") {
          navigate(`${import.meta.env.VITE_PENDING_PATIENTS_ROUTE}`);
        }
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editPatientSubmit = async (data: EditPatientFormTypes) => {
    setLoading(true);
    const formData = new FormData();
    if (uploadImage) {
      formData.append("image", uploadImage);
    }
    formData.append("username", data.username);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("age", data.age);
    formData.append("gender", data.gender === "ذكر" ? "male" : "female");
    formData.append("dateOfBirth", data.dateOfBirth);
    await server
      .put(`/patient/editPatient/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
        handleCloseEditPatientModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const editProfileSubmit = async (data: EditProfileFormTypes) => {
    setLoading(true);
    const formData = new FormData();
    if (uploadImage) {
      formData.append("image", uploadImage);
    }
    formData.append("username", data.username);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("age", data.age);
    formData.append("gender", data.gender === "ذكر" ? "male" : "female");
    formData.append("dateOfBirth", data.dateOfBirth);
    if (auth.type === "doctor" && data.specialization) {
      formData.append("specialization", data.specialization);
    }
    await server
      .put("/user", formData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getProfile());
        handleCloseEditProfileModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const changePasswordSubmit = async (data: unknown) => {
    setLoading(true);
    await server
      .patch(`/user`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        handleCloseChangePasswordModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoading(false);
  };

  const loginSubmit = async (data: unknown) => {
    setLoading(true);
    await server
      .post("/auth/login", data)
      .then((res) => {
        const { message, token, userId, type } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(setAuth({ token, userId, type }));
        navigate(`${import.meta.env.VITE_PROFILE_ROUTE}`);
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
        setLoading(false);
      });
    setLoading(false);
  };

  const resetPasswordSubmit = async (data: unknown) => {
    setLoading(true);
    await server
      .patch(`/auth/resetPassword`, data, {
        headers: {
          Authorization: `Bearer ${id}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoading(false);
  };

  const forgotPasswordSubmit = async (data: unknown) => {
    setLoading(true);
    await server
      .patch(`/auth/forgotPassword`, data)
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        handleCloseForgotPasswordModal();
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoading(false);
  };

  const submit = (data: SubmitDataTypes) => {
    switch (type) {
      case "addMedicalRecord":
        addMedicalRecordSubmit(data as AddMedicalRecordFormTypes);
        break;
      case "addSurgery":
        addSurgerySubmit(data as AddSurgeryFormTypes);
        break;
      case "addMedicine":
        addMedicineSubmit(data as AddMedicineFormTypes);
        break;
      case "addAllergery":
        addAllergerySubmit(data as AddAllergeryFormTypes);
        break;
      case "addDisease":
        addDiseaseSubmit(data as AddDiseaseFormTypes);
        break;
      case "editDisease":
        editDiseaseSubmit(data as AddDiseaseFormTypes);
        break;
      case "editAllergery":
        editAllergerySubmit(data as AddAllergeryFormTypes);
        break;
      case "editMedicine":
        editMedicineSubmit(data as AddMedicineFormTypes);
        break;
      case "editSurgery":
        editSurgerySubmit(data as AddSurgeryFormTypes);
        break;
      case "editMedicalRecord":
        editMedicalRecordSubmit(data as EditMedicalRecordFormTypes);
        break;
      case "addPatient":
        addPatientSubmit(data as AddPatientFormTypes);
        break;
      case "editPatient":
        editPatientSubmit(data as EditPatientFormTypes);
        break;
      case "addAppointment":
        addAppointmentSubmit(data as AddAppointmentFormTypes);
        break;
      case "editAppointment":
        editAppointmentSubmit(data as EditAppointmentFormTypes);
        break;
      case "addPrescription":
        addPrescriptionSubmit();
        break;
      case "editPrescription":
        editPrescriptionSubmit();
        break;
      case "addProcedure":
        addProcedureSubmit(data as AddProcedureFormTypes);
        break;
      case "editProcedure":
        editProcedureSubmit(data as EditProcedureFormTypes);
        break;
      case "addTestResult":
        addTestResultSubmit(data as AddTestResultFormTypes);
        break;
      case "editTestResult":
        editTestResultSubmit(data as EditTestResultFormTypes);
        break;
      case "editProfile":
        editProfileSubmit(data as EditProfileFormTypes);
        break;
      case "changePassword":
        changePasswordSubmit(data as ChangePasswordFormTypes);
        break;
      case "login":
        loginSubmit(data);
        break;
      case "resetPassword":
        return resetPasswordSubmit(data);
      default:
        return forgotPasswordSubmit(data);
    }
  };

  return { submit };
};

export default useSubmit;
