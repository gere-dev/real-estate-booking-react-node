import axios, { AxiosInstance } from 'axios';

// Base URL for api requests
export const BASE_URL = import.meta.env.NODE === 'production' ? import.meta.env.VITE_API_URL : 'http://localhost:5000/api';

// Axios instances for private API requests
export const privateInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

//Axios instance for public requests
export const publicInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
