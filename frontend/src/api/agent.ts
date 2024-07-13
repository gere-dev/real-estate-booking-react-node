import { Login, Register, Property as PropertyType, NewProperty } from '@/types';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export const apiUrl = import.meta.env.NODE === 'production' ? import.meta.env.VITE_API_URL : 'http://localhost:5000/api';

export const privateInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const publicInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;

// const publicRequests = {
//   get: (url: string) => publicInstance.get(url).then(responseBody),
//   post: (url: string, body: object) => publicInstance.post(url, body).then(responseBody),
//   put: (url: string, body: object) => publicInstance.put(url, body).then(responseBody),
//   delete: (url: string) => publicInstance.delete(url).then(responseBody),
// };
// const privateRequests = {
//   get: (url: string) => privateInstance.get(url).then(responseBody),
//   post: (url: string, body: object) => privateInstance.post(url, body).then(responseBody),
//   put: (url: string, body: object) => privateInstance.put(url, body).then(responseBody),
//   delete: (url: string) => privateInstance.delete(url).then(responseBody),
// };

const createRequests = (instance: AxiosInstance) => ({
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: object) => instance.post(url, body).then(responseBody),
  put: (url: string, body: object) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
});
const privateRequests = createRequests(privateInstance);
const publicRequests = createRequests(publicInstance);

const Properties = {
  list: () => privateRequests.get('/properties'),
  create: (property: PropertyType) => privateRequests.post(`/properties/`, property),
  update: (property: PropertyType) => privateRequests.put(`/properties/${property.property_id}`, property),
  delete: (propertyId: number) => privateRequests.delete(`/properties/${propertyId}`),
};

const Property = {
  get: (id: number) => privateRequests.get(`/property/fetch/${id}`),
};

const Listings = {
  list: () => privateRequests.get('/listings/fetch'),
  create: (listing: FormData) => privateRequests.post(`/listings/create`, listing),
  update: (property: FormData, propertyId: number) => privateRequests.put(`/listings/update-listings/${propertyId}`, property),
  delete: (propertyId: number) => privateRequests.delete(`/listings/delete/${propertyId}`),
  getById: (id: number) => privateRequests.get(`/listings/${id}`),
};

const Auth = {
  register: (data: Register) => publicRequests.post(`/auth/register`, data),
  login: (data: Login) => publicRequests.post(`/auth/login`, data),
  logout: () => publicRequests.post(`/auth/logout`, {}),
  refresh: () => privateRequests.get(`/auth/refresh`),
};

const agent = {
  Properties,
  Property,
  Auth,
  Listings,
};

export default agent;
