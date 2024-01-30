import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginResponse {
  token: string;
  _id: string;
  email: string;
  favorites: string[];
}
export interface IAuthState {
  isAuth: boolean;
  user: LoginResponse;
}

const initialState: IAuthState = {
  isAuth: false,
  user: {
    token: "",
    _id: "",
    email: "",
    favorites: [],
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;