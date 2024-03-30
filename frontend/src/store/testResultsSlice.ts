import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  AppointmentsArgsTypes,
  TestResultsValuesTypes,
} from "../types/store.types";

export const getTestResults = createAsyncThunk(
  "testResults/getTestResults",
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

const initialState: TestResultsValuesTypes = {
  isLoading: true,
  testResults: [],
};

export const testResultsSlice = createSlice({
  name: "testResults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTestResults.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTestResults.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.testResults = payload;
    });
    builder.addCase(getTestResults.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default testResultsSlice.reducer;
