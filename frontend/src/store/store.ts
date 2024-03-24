import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import activePatientsReducer from "./activePatientsSlice";
import appointmentsReducer from "./appointmentsSlice";
import authReducer from "./authSlice";
import blockedPatientsReducer from "./blockedPatientsSlice";
import patientReducer from "./patientSlice";
import pendingPatientsReducer from "./pendingPatientsSlice";
import profileReducer from "./profileSlice";

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
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
