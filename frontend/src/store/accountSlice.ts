import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { ProfileTypes } from "../types/store.types";

export const getAccount = createAsyncThunk(
  "account/getAccount",
  async (args: { id?: string }) => {
    const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/user/${args.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.data;
  }
);

const initialState = {
  isLoading: true,
  account: null as ProfileTypes | null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAccount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAccount.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.account = payload;
    });
    builder.addCase(getAccount.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default accountSlice.reducer;
