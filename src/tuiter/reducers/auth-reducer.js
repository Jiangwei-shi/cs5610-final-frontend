import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  registerThunk,
  profileThunk,
  updateUserThunk,
  findUserByIdThunk,
  deleteUserThunk,
} from '../../services/auth-thunks'

const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser: null, profileUpdated: false },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
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
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
      })
      .addCase(findUserByIdThunk.fulfilled, (state, { payload }) => {
        state.selectedUser = payload;
      })
      .addCase(deleteUserThunk.fulfilled, (state, { payload }) => {
        state.allUsers = state.allUsers.filter((user) => user.id !== payload);
      });
  },
});
export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;