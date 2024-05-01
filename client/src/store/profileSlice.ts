import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { ProfileTypes } from "../types/store.types";

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
  const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
  const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data;
});

const initialState = {
  isLoading: true,
  profile: null as ProfileTypes | null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.profile = payload;
    });
    builder.addCase(getProfile.rejected, (_, action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log(action.error);
      }
    });
  },
});

export default profileSlice.reducer;
