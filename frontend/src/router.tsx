import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Account from "./pages/Account";
import ActivePatients from "./pages/ActivePatients";
import AddPatient from "./pages/AddPatient";
import Appointments from "./pages/Appointments";
import BlockedPatients from "./pages/BlockedPatients";
import EditPatient from "./pages/EditPatient";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MedicalRecord from "./pages/MedicalRecord";
import Patient from "./pages/Patient";
import PendingPatients from "./pages/PendingPatients";
import Prescriptions from "./pages/Prescriptions";
import Procedures from "./pages/Procedures";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import TestResults from "./pages/TestResults";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "resetPassword/:id",
        element: <ResetPassword />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "account/:id",
        element: <Account />,
      },
      {
        path: "addPatient",
        element: <AddPatient />,
      },
      {
        path: "editPatient/:id",
        element: <EditPatient />,
      },
      {
        path: "medicalRecord/:id",
        element: <MedicalRecord />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "patient/:id",
        element: <Patient />,
      },
      {
        path: "activePatients",
        element: <ActivePatients />,
      },
      {
        path: "pendingPatients",
        element: <PendingPatients />,
      },
      {
        path: "blockedPatients",
        element: <BlockedPatients />,
      },
      {
        path: "testResults",
        element: <TestResults />,
      },
      {
        path: "procedures",
        element: <Procedures />,
      },
      {
        path: "prescriptions/",
        element: <Prescriptions />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
