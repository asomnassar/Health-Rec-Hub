import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  AppointmentsArgsTypes,
  AppointmentsValuesTypes,
} from "../types/store.types";

export const getAppointments = createAsyncThunk(
  "appointments/getAppointments",
  async (args: AppointmentsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);

    const { page, search } = args;

    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/appointment/all?page=${
        page || 1
      }&search=${search || ""}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.data;
  }
);

const initialState: AppointmentsValuesTypes = {
  isLoading: true,
  appointments: [],
};

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAppointments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAppointments.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.appointments = payload;
    });
    builder.addCase(getAppointments.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default appointmentsSlice.reducer;
