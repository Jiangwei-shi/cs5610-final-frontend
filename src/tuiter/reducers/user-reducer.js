import { createSlice } from '@reduxjs/toolkit';
import { findAllUsersThunk } from '../../services/auth-thunks';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(findAllUsersThunk.pending, state => {
        state.loading = true;
      })
      .addCase(findAllUsersThunk.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(findAllUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
