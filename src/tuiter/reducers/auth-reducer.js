import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  registerThunk,
  profileThunk,
  updateUserThunk,
} from "../../services/auth-thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null, profileUpdated: false },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.currentUser = null;
      })
      .addCase(profileThunk.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {});
  },
});
export default authSlice.reducer;