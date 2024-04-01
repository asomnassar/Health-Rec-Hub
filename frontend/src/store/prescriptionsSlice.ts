import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  PrescriptionsArgsTypes,
  PrescriptionsValuesTypes,
} from "../types/store.types";

export const getPrescriptions = createAsyncThunk(
  "prescriptions/getPrescriptions",
  async (args: PrescriptionsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);

    const { page, search } = args;

    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/prescription?page=${
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

const initialState: PrescriptionsValuesTypes = {
  isLoading: true,
  prescriptions: [],
};

export const prescriptionsSlice = createSlice({
  name: "prescriptions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPrescriptions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPrescriptions.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.prescriptions = payload;
    });
    builder.addCase(getPrescriptions.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default prescriptionsSlice.reducer;
