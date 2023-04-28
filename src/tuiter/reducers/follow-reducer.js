import { createSlice } from "@reduxjs/toolkit";
import {
  followUserThunk,
  unfollowUserThunk,
  getUserFollowersThunk,
  getUserFollowingsThunk,
} from "../../services/follow-thunks";

const followSlice = createSlice({
  name: "follow",
  initialState: { followers: [], followings: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(followUserThunk.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(unfollowUserThunk.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(getUserFollowersThunk.fulfilled, (state, { payload }) => {
        state.followers = payload;
      })
      .addCase(getUserFollowingsThunk.fulfilled, (state, { payload }) => {
        state.followings = payload;
      });
  },
});

export default followSlice.reducer;