import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  AppointmentTypes,
  MedicalRecordTypes,
  PatientTypes,
  PrescriptionTypes,
  ProcedureTypes,
  TestResultTypes,
} from "../types/store.types";

export const getPatient = createAsyncThunk(
  "patient/getPatient",
  async (args: { id?: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/patient/getPatient/${args.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState = {
  isLoading: true,
  patient: null as PatientTypes | null,
  appointments: null as [AppointmentTypes] | null,
  procedures: null as [ProcedureTypes] | null,
  prescriptions: null as [PrescriptionTypes] | null,
  testResults: null as [TestResultTypes] | null,
  medicalRecord: null as MedicalRecordTypes | null,
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatient.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPatient.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.patient = payload.data;
      state.appointments = payload?.appointments;
      state.procedures = payload?.procedures;
      state.prescriptions = payload?.prescriptions;
      state.testResults = payload?.testResults;
      state.medicalRecord = payload?.medicalRecord;
    });
    builder.addCase(getPatient.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default patientSlice.reducer;
