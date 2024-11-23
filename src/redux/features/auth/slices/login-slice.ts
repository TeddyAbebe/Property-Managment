/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  value: {
    accessToken: string;
    refreshToken: string;
  };
}

const initialState: LoginState = {
  value: {
    accessToken: "",
    refreshToken: "",
  },
};

export const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginInfo: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setLoginInfo, logout } = login.actions;
export default login.reducer;
