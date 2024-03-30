import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  PatientsArgsTypes,
  PendingPatientsValuesTypes,
} from "../types/store.types";

export const getPendingPatients = createAsyncThunk(
  "pendingPatients/getPendingPatients",
  async (args: PatientsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);

    const { page, search } = args;

    const res = await axios.get(
      `${
        import.meta.env.VITE_SERVER_URL
      }/patient/getAllPatients?status=pending&page=${page || 1}&search=${
        search || ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.data;
  }
);

const initialState: PendingPatientsValuesTypes = {
  isLoading: true,
  pendingPatients: [],
};

export const pendingPatientsSlice = createSlice({
  name: "pendingPatients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPendingPatients.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPendingPatients.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.pendingPatients = payload;
    });
    builder.addCase(getPendingPatients.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default pendingPatientsSlice.reducer;
