import axios from 'axios';

// const USERS_API = 'http://localhost:4000/api/users';
const USERS_API = "https://tuiter-node-backend-41ea.onrender.com/api/users";

// online part
// const API_BASE = process.env.REACT_APP_API_BASE
// const USERS_API = `${API_BASE}/users`;

const api = axios.create({
  withCredentials: true,
});

export const register = async user => {
  const response = await api.post(`${USERS_API}/register`, user);
  return response.data;
};

export const login = async ({ username, password }) => {
  const response = await api.post(`${USERS_API}/login`, {
    username,
    password,
  });
  return response.data;
};

export const logout = async () => {
  const response = await api.post(`${USERS_API}/logout`);
  return response.data;
};

export const profile = async () => {
  const response = await api.post(`${USERS_API}/profile`);
  return response.data;
};

export const findProfileById = async user_id => {
  try {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userIdToFetch = user_id || currentUser._id;

    console.log(userIdToFetch);
    const response = await api.get(`${USERS_API}/${userIdToFetch}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserService = async user => {
  const response = await api.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await api.get(USERS_API);
  return response.data;
};

export const findUserById = async uid => {
  const response = await api.get(`${USERS_API}/${uid}`);
  return response.data;
};

export const deleteUser = async uid => {
  const response = await api.delete(`${USERS_API}/${uid}`);
  return response.data;
};
