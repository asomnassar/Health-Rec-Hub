import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddPatient from "./pages/AddPatient";
import Appointments from "./pages/Appointments";
import EditPatient from "./pages/EditPatient";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MedicalRecord from "./pages/MedicalRecord";
import Patient from "./pages/Patient";
import Patients from "./pages/Patients";
import Prescriptions from "./pages/Prescriptions";
import Procedures from "./pages/Procedures";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import TestResults from "./pages/TestResults";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"reset-password/:id",
        element:<ResetPassword/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path:"add-patient",
        element:<AddPatient/>
      },
      {
        path:"edit-patient/:id",
        element:<EditPatient/>
      },
      {
        path:"medicalRecord/:id",
        element:<MedicalRecord/>
      },
      {
        path:"appointments",
        element:<Appointments/>
      },
      {
        path:"patient/:id",
        element:<Patient/>
      },
      {
        path:"test-results/:id",
        element:<TestResults/>
      },
      {
        path:"procedures/:id",
        element:<Procedures/>
      },
      {
        path:"prescriptions/:id",
        element:<Prescriptions/>
      },
      {
        path:"patients",
        element:<Patients/>
      },
      {
        path:"active-patients",
        element:<Patients/>
      },
      {
        path:"pending-patients",
        element:<Patients/>
      },
      {
        path:"blocked-patients",
        element:<Patients/>
      }
    ]
  },
]);