import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { MedicalRecordTypes } from "../types/store.types";

export const getMedicalRecord = createAsyncThunk(
  "medicalRecord/getMedicalRecord",
  async () => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
    const userId = Cookies.get(`${import.meta.env.VITE_USERID_NAME}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/medicalRecord/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

const initialState: {
  isLoading: boolean;
  medicalRecord: MedicalRecordTypes | null;
} = {
  isLoading: true,
  medicalRecord: null,
};

export const medicalRecordSlice = createSlice({
  name: "medicalRecord",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMedicalRecord.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMedicalRecord.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.medicalRecord = payload.data;
    });
    builder.addCase(getMedicalRecord.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default medicalRecordSlice.reducer;
