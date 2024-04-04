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
  AddAppointmentFormTypes,
  AddPatientFormTypes,
  AddProcedureFormTypes,
  AddTestResultFormTypes,
  CatchErrorTypes,
  ChangePasswordFormTypes,
  EditAppointmentFormTypes,
  EditPatientFormTypes,
  EditPrescriptionFormTypes,
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
  } = useContext(FormsContext);
  const { uploadImage } = useContext(FormsContext);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams();

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
        `/appointment/${
          editableAppointmentData && editableAppointmentData._id
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

  const editPrescriptionSubmit = async (data: EditPrescriptionFormTypes) => {
    setLoading(true);
    await server
      .put(
        `/prescription/${
          editablePrescriptionData && editablePrescriptionData._id
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
        `/procedure/${editableProcedureData && editableProcedureData._id}`,
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
    setLoading(true);
    const formData = new FormData();
    if (!testResultFile) {
      handleAlert({ msg: "ارفع ملف الاختبار", status: "error" });
      return;
    } else {
      formData.append("file", testResultFile);
    }
    formData.append("type", data.type);
    await server
      .post(`/testResult/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
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
    setLoading(true);
    const formData = new FormData();
    if (!testResultFile) {
      handleAlert({ msg: "ارفع ملف الاختبار", status: "error" });
      return;
    } else {
      formData.append("file", testResultFile);
    }
    formData.append("type", data.type);
    await server
      .put(
        `/testResult/${editableTestResultData && editableTestResultData._id}`,
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
        editPrescriptionSubmit(data as EditPrescriptionFormTypes);
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
