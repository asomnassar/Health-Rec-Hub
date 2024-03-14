import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  blockedPatientsValuesTypes,
  patientsArgsTypes,
} from "../types/store.types";

export const getBlockedPatients = createAsyncThunk(
  "blockedPatients/getBlockedPatients",
  async (args: patientsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);

    const { page, search } = args;

    const res = await axios.get(
      `${
        import.meta.env.VITE_SERVER_URL
      }/patient/getAllPatients?status=blocked&page=${page}&search=${search}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.data;
  }
);

const initialState: blockedPatientsValuesTypes = {
  isLoading: true,
  blockedPatients: [],
};

export const blockedPatientsSlice = createSlice({
  name: "blockedPatients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlockedPatients.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlockedPatients.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blockedPatients = payload;
    });
    builder.addCase(getBlockedPatients.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default blockedPatientsSlice.reducer;
