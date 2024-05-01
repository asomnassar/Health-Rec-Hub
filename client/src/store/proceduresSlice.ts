import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {
  ProceduresArgsTypes,
  ProceduresValuesTypes,
} from "../types/store.types";

export const getProcedures = createAsyncThunk(
  "procedures/getProcedures",
  async (args: ProceduresArgsTypes) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);

    const { page, search } = args;

    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/procedure?page=${page || 1}&search=${
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

const initialState: ProceduresValuesTypes = {
  isLoading: true,
  procedures: [],
};

export const ProceduresSlice = createSlice({
  name: "Procedures",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProcedures.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProcedures.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.procedures = payload;
    });
    builder.addCase(getProcedures.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default ProceduresSlice.reducer;
