import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import activePatientsReducer from "./activePatientsSlice";
import appointmentsReducer from "./appointmentsSlice";
import authReducer from "./authSlice";
import blockedPatientsReducer from "./blockedPatientsSlice";
import medicalRecordReducer from "./medicalRecordSlice";
import patientReducer from "./patientSlice";
import pendingPatientsReducer from "./pendingPatientsSlice";
import prescriptionsReducer from "./prescriptionsSlice";
import proceduresReducer from "./proceduresSlice";
import profileReducer from "./profileSlice";
import testResultsReducer from "./testResultsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    pendingPatients: pendingPatientsReducer,
    activePatients: activePatientsReducer,
    blockedPatients: blockedPatientsReducer,
    appointments: appointmentsReducer,
    patient: patientReducer,
    account: accountReducer,
    testResults: testResultsReducer,
    prescriptions: prescriptionsReducer,
    procedures: proceduresReducer,
    medicalRecord: medicalRecordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
