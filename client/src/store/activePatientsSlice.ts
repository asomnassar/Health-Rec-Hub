import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  ActivePatientsValuesTypes,
  PatientsArgsTypes,
} from "../types/store.types";

export const getActivePatients = createAsyncThunk(
  "activePatients/getActivePatients",
  async (args: PatientsArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);

    const { page, search } = args;

    const res = await axios.get(
      `${
        import.meta.env.VITE_SERVER_URL
      }/patient/getAllPatients?status=active&page=${page || 1}&search=${
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

const initialState: ActivePatientsValuesTypes = {
  isLoading: true,
  activePatients: [],
};

export const activePatientsSlice = createSlice({
  name: "pendingPatients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActivePatients.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getActivePatients.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.activePatients = payload;
    });
    builder.addCase(getActivePatients.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default activePatientsSlice.reducer;
