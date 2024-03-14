import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AuthStateTypes } from "../types/store.types";

const initialState: AuthStateTypes = {
  token: undefined,
  userId: undefined,
  type: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<AuthStateTypes>) => {
      const { token, userId, type } = payload;
      state.token = token;
      state.userId = userId;
      state.type = type;
      if (token && userId && type) {
        Cookies.set(`${import.meta.env.VITE_TOKEN_NAME}`, token);
        Cookies.set(`${import.meta.env.VITE_TYPE_NAME}`, type);
        Cookies.set(`${import.meta.env.VITE_USERID_NAME}`, userId);
      }
    },
    getAuth: (state) => {
      const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
      const userId = Cookies.get(`${import.meta.env.VITE_USERID_NAME}`);
      const type = Cookies.get(`${import.meta.env.VITE_TYPE_NAME}`);
      state.token = token;
      state.userId = userId;
      state.type = type;
    },
    resetAuth: (state) => {
      Cookies.remove(`${import.meta.env.VITE_TOKEN_NAME}`);
      Cookies.remove(`${import.meta.env.VITE_USERID_NAME}`);
      Cookies.remove(`${import.meta.env.VITE_TYPE_NAME}`);
      state.token = undefined;
      state.userId = undefined;
      state.type = undefined;
    },
  },
});

export const { setAuth, getAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
