import { createAsyncThunk } from '@reduxjs/toolkit'
import * as followService from './follow-service'

export const followUserThunk = createAsyncThunk(
  "follow/followUser",
  async ({ userId, followUserId }) => {
    console.log(userId);
    console.log(followUserId);
    return await followService.followUser(userId, followUserId);
  }
);

export const unfollowUserThunk = createAsyncThunk(
  "follow/unfollowUser",
  async ({ userId, followUserId }) => {
    const updatedUser = await followService.unfollowUser(userId, followUserId);
    return updatedUser;
  }
);

export const getUserFollowersThunk = createAsyncThunk(
  "users/getUserFollowers",
  async (userId) => {
    return await followService.getUserFollowers(userId);
  }
);

export const getUserFollowingsThunk = createAsyncThunk(
  "users/getUserFollowings",
  async (userId) => {
    return await followService.getUserFollowings(userId);
  }
);