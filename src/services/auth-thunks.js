import { createAsyncThunk } from '@reduxjs/toolkit'
import * as userService from './auth-service'

export const registerThunk = createAsyncThunk(
  "users/register",
  async (user) => {
    const registeredUser = await userService.register(user);
    return registeredUser;
  }
);

export const loginThunk = createAsyncThunk(
  "users/login",
  async (credentials) => {
    return await userService.login(credentials);
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
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/updateUser",
  async (user) => {
    await userService.updateUser(user);
    return user;
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