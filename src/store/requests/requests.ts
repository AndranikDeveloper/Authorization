import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestsUrl } from '@utils/requests-urls';
import axios from 'axios';

const setPasswordBase = axios.create({
  baseURL: 'https://auth-qa.qencode.com/v1/auth/password-reset',
});

setPasswordBase.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

setPasswordBase.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 450 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const val = await axios.post(requestsUrl.refreshToken, { refresh_token: refreshToken });
        localStorage.setItem('accessToken', val.data.accessToken);
        localStorage.setItem('refreshToken', val.data.refreshToken);
        return setPasswordBase(originalRequest);
      } catch (error) {
        localStorage.removeItem('accessToken');
        window.location.replace('http://localhost:5173/');
      }
    }
    return Promise.reject(error);
  },
);

export const loginApi = createAsyncThunk<ILoginResponse, ILoginData, { rejectValue: string }>(
  'login/loginApi',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(requestsUrl.login, data);
      return response.data;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message as string);
    }
  },
);

export const resetPasswordApi = createAsyncThunk<
  IPasswordResetResponse,
  IPasswordResetData,
  { rejectValue: string }
>('resetPassword/resetPasswordApi', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(requestsUrl.resetPassword, data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message as string);
  }
});

export const setPasswordApi = createAsyncThunk<
  IPasswordSetResponse,
  IPasswordSetData,
  { rejectValue: string }
>('setPassword/setPasswordApi', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(requestsUrl.setPassword, data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message as string);
  }
});

export const healthCheckApi = createAsyncThunk<null, void, { rejectValue: string }>(
  'healthCheck/heathCheckApi',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(requestsUrl.healthCheck);
      return response.data;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message as string);
    }
  },
);
