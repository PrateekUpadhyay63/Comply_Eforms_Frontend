import axios from 'axios';
import { getToken } from '.';

// const API_URL = 'http://122.176.101.76:8088/api/';
const API_URL = 'http://192.168.3.53:8088/api';

export const apiErrorCode = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 423,
  validationError: 400,
  emailNotVerified: 403,
  internalError: 500,
};
const apiSuccessCode = {
  success: 200,
  postSuccess: 201,
  putSuccess: 202,
};

export const $axios = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    platform: 3,
    timezone: 0,
    language: 'en',
    offset: 0,
    api_key: 1234,
  },
});

$axios.interceptors.request.use(
  (config: any) => {
    const token = getToken('accessToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers.Authorization = 'Basic c2xpY2U6c2xpY2VAMTIz';
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
const constants = {
  apiErrorCode,
  // API_URL: process.env.REACT_APP_API_URL,
  // API_URL:"http://122.176.101.76:8088/api",
  API_URL:'http://192.168.3.53:8088/api',
  apiSuccessCode,
  axios: $axios,
};
export default constants;
