import { configureStore } from "@reduxjs/toolkit";
import activePatientsReducer from "./activePatientsSlice";
import authReducer from "./authSlice";
import blockedPatientsReducer from "./blockedPatientsSlice";
import pendingPatientsReducer from "./pendingPatientsSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    pendingPatients: pendingPatientsReducer,
    activePatients: activePatientsReducer,
    blockedPatients: blockedPatientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
