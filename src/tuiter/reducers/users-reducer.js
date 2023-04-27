import { createSlice } from "@reduxjs/toolkit";
import {
  findAllUsersThunk,
  findUserByIdThunk,
} from "../../services/auth-thunks";

const initialState = {
  users: [],
  loading: false,
  error: null,
  selectedUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findAllUsersThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(findAllUsersThunk.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })
      .addCase(findUserByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedUser = null;
      })
      .addCase(findUserByIdThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.selectedUser = payload;
      })
      .addCase(findUserByIdThunk.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.selectedUser = null;
      });
  },
});

export default usersSlice.reducer;