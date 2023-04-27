import { createAsyncThunk } from '@reduxjs/toolkit'
import * as userService from './auth-service'

export const registerThunk = createAsyncThunk(
  "users/register",
  async (user) => {
    return await userService.register(user);
  }
);

export const loginThunk = createAsyncThunk(
  "users/login",
  async (credentials) => {
    const loggedInUser = await userService.login(credentials);
    localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
    return loggedInUser;
  }
);

export const profileThunk = createAsyncThunk(
  "users/profile",
  async () => {
    return await userService.profile();
  }
);

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async () => {
    await userService.logout();
    localStorage.removeItem("currentUser");
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/updateUser",
  async (user, thunkAPI) => {
    const response = await userService.updateUserService(user);
    const updatedUser = response.data;
    return updatedUser;
  }
);

export const findAllUsersThunk = createAsyncThunk(
  "users/findAllUsers",
  async () => {
    return await userService.findAllUsers();
  }
);

export const findUserByIdThunk = createAsyncThunk(
  "users/findUserById",
  async (userId) => {
    return await userService.findUserById(userId);
  }
);

export const deleteUserThunk = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    await userService.deleteUser(userId);
    return userId;
  }
);