import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";
// const USERS_API = "https://tuiter-node-server-app-7hat.onrender.com/api/users";

// online part
// const API_BASE = process.env.REACT_APP_API_BASE
// const USERS_API = `${API_BASE}/users`;

const api = axios.create({
  withCredentials: true
});

export const followUser = async (userId, followUserId) => {
  const response = await api.post(`${USERS_API}/${userId}/follow/${followUserId}`);
  return response.data;
};

export const unfollowUser = async (userId, unfollowUserId) => {
  const response = await api.delete(`${USERS_API}/${userId}/unfollow/${unfollowUserId}`);
  return response.data;
};

export const getUserFollowers = async (userId) => {
  const response = await api.get(`${USERS_API}/${userId}/followers`);
  return response.data;
};

export const getUserFollowings = async (userId) => {
  const response = await api.get(`${USERS_API}/${userId}/followings`);
  return response.data;
};