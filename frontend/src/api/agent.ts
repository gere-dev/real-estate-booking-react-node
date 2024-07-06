import { logout } from '@/state/auth/authSlice';
import store from '@/state/store';
import { Login, Register, Property as PropertyType, NewProperty } from '@/types';
import axios, { AxiosResponse } from 'axios';

export const apiUrl = import.meta.env.NODE === 'production' ? import.meta.env.VITE_API_URL : 'http://localhost:5000/api';

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Properties = {
  list: () => requests.get('/properties'),
  create: (property: PropertyType) => requests.post(`/properties/`, property),
  update: (property: PropertyType) => requests.put(`/properties/${property.property_id}`, property),
  delete: (propertyId: number) => requests.delete(`/properties/${propertyId}`),
};

const Property = {
  get: (id: number) => requests.get(`/property/${id}`),
};

const Listings = {
  list: () => requests.get('/listings'),
  create: (listing: object) => requests.post(`/listings`, listing),
  update: (listing: PropertyType) => requests.put(`/listings/${listing.property_id}`, listing),
  delete: (propertyId: number) => requests.delete(`/listings/${propertyId}`),
  getById: (id: number) => requests.get(`/listings/${id}`),
};

const Auth = {
  register: (data: Register) => requests.post(`/auth/register`, data),
  login: (data: Login) => requests.post(`/auth/login`, data),
  logout: () => requests.post(`/auth/logout`, {}),
  refresh: () => requests.post(`/auth/refresh`, {}),
};

const agent = {
  Properties,
  Property,
  Auth,
  Listings,
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response;
    const originalRequest = error.config;
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await Auth.refresh();
        const newAccessToken = response.data.accessToken;

        // Update access token in Axios headers
        axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        // Retry original request with new access token
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (error) {
        console.log(error, 'refresh error');
        store.dispatch(logout());
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default agent;
