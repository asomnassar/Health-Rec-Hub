import { Box } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AddAllergeryModal from "./modals/AddAllergeryModal";
import AddAppointmentModal from "./modals/AddAppointmentModal";
import AddDiseaseModal from "./modals/AddDiseaseModal";
import AddMedicalRecordModal from "./modals/AddMedicalRecordModal";
import AddMedicineModal from "./modals/AddMedicineModal";
import AddPrescriptionModal from "./modals/AddPrescriptionModal";
import AddProcedureModal from "./modals/AddProcedureModal";
import AddSurgeryModal from "./modals/AddSurgeryModal";
import AddTestResultModal from "./modals/AddTestResultModal";
import ChangePasswordModal from "./modals/ChangePasswordModal";
import EditAllergeryModal from "./modals/EditAllergeryModal";
import EditAppointmentModal from "./modals/EditAppointmentModal";
import EditDiseaseModal from "./modals/EditDiseaseModal";
import EditMedicalRecordModal from "./modals/EditMedicalRecordModal";
import EditMedicineModal from "./modals/EditMedicineModal";
import EditPatientModal from "./modals/EditPatientModal";
import EditPrescriptionModal from "./modals/EditPrescriptionModal";
import EditProcedureModal from "./modals/EditProcedureModal";
import EditProfileModal from "./modals/EditProfileModal";
import EditSurgeryModal from "./modals/EditSurgeryModal";
import EditTestResultModal from "./modals/EditTestResultModal";
import ForgotPasswordModal from "./modals/ForgotPasswordModal";
import ViewAppointmentModal from "./modals/ViewAppointmentModal";
import ViewPrescriptionModal from "./modals/ViewPrescriptionModal";
import { getAuth } from "./store/authSlice";
import { getProfile } from "./store/profileSlice";
import { AppDispatch } from "./store/store";

function App() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const authPaths = [
    `${import.meta.env.VITE_LOGIN_ROUTE}`,
    `${import.meta.env.VITE_RESET_PASSWORD_ROUTE}/${id}`,
  ];

  useEffect(() => {
    try {
      const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
      if (!token) {
        if (!authPaths.includes(pathname)) {
          navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`);
        }
      } else {
        dispatch(getAuth());
        dispatch(getProfile());
      }
    } catch (error) {
      console.log(error);
    }
  }, [authPaths, dispatch, navigate, pathname]);

  return authPaths.includes(pathname) ? (
    <Box
      component={"main"}
      className="!h-[100vh] !w-[100vw] bg-primary-bg font-ubuntu"
    >
      <ForgotPasswordModal />
      <Toaster />
      <Outlet />
    </Box>
  ) : (
    <Box
      component={"main"}
      className="!min-h-[100vh] !min-w-[100vw] bg-primary-bg pt-[80px] md:pt-[70px] sm:pt-[60px] font-ubuntu grid grid-rows-[auto,auto,1fr,auto] justify-stretch items-end !overflow-x-hidden"
    >
      <Header />
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer />
      <EditPatientModal />
      <EditProfileModal />
      <ChangePasswordModal />
      <AddAppointmentModal />
      <ViewAppointmentModal />
      <EditAppointmentModal />
      <AddProcedureModal />
      <EditProcedureModal />
      <AddPrescriptionModal />
      <EditPrescriptionModal />
      <ViewPrescriptionModal />
      <AddTestResultModal />
      <EditTestResultModal />
      <AddMedicalRecordModal />
      <EditMedicalRecordModal />
      <AddMedicineModal />
      <EditMedicineModal />
      <AddSurgeryModal />
      <EditSurgeryModal />
      <AddDiseaseModal />
      <EditDiseaseModal />
      <AddAllergeryModal />
      <EditAllergeryModal />
    </Box>
  );
}

export default App;
