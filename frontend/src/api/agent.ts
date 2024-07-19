import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Login, Register, Property as PropertyType, NewProperty, CreateBooking } from '@/types';

// Base URL based on environment
export const apiUrl = import.meta.env.NODE === 'production' ? import.meta.env.VITE_API_URL : 'http://localhost:5000/api';

// Axios instances
export const privateInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const publicInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

// Axios response handler
const responseBody = (response: AxiosResponse) => response.data;

// Axios request headers
const formHeader = {
  'Content-Type': 'multipart/form-data',
};

// Function to create request methods
const createRequests = (instance: AxiosInstance) => ({
  get: <T>(url: string, query?: T) => instance.get(url, { params: query }).then(responseBody),
  post: <T>(url: string, body: T, headers?: object) => instance.post(url, body, { headers }).then(responseBody),
  put: <T>(url: string, body: T, headers?: object) => instance.put(url, body, { headers }).then(responseBody),
  delete: (url: string, headers?: object) => instance.delete(url, { headers }).then(responseBody),
});

// Create request functions for private and public instances
const privateRequests = createRequests(privateInstance);
const publicRequests = createRequests(publicInstance);

// APIs
const PropertiesAPI = {
  list: () => publicRequests.get('/properties/get-all'),
  create: (property: PropertyType) => privateRequests.post(`/properties/create`, property),
  update: (property: PropertyType) => privateRequests.put(`/properties/update/${property.property_id}`, property),
  delete: (propertyId: number) => privateRequests.delete(`/properties/delete/${propertyId}`),
  getById: (id: number) => publicRequests.get(`/properties/get-by-id/${id}`),
  filter: (query: { city: string; minPrice: number; maxPrice: number; bed: number | string }) => publicRequests.get(`/properties/filter`, query),
};

const ListingsAPI = {
  list: () => privateRequests.get('/listings/fetch'),
  create: (listing: FormData) => privateRequests.post(`/listings/create`, listing, { headers: formHeader }),
  update: (listing: FormData, listingId: number) => privateRequests.put(`/listings/update-listings/${listingId}`, listing, { headers: formHeader }),
  delete: (listingId: number) => privateRequests.delete(`/listings/delete/${listingId}`),
  getById: (id: number) => privateRequests.get(`/listings/get-by-id/${id}`),
};

const BookingsAPI = {
  list: () => privateRequests.get('/bookings/get-all-bookings'),
  create: (booking: CreateBooking) => privateRequests.post(`/bookings/create`, booking),
  delete: (bookingId: number) => privateRequests.delete(`/bookings/delete/${bookingId}`),
};

const AuthAPI = {
  register: (data: Register) => publicRequests.post(`/auth/register`, data),
  login: (data: Login) => publicRequests.post(`/auth/login`, data),
  logout: () => publicRequests.post(`/auth/logout`, {}),
  refresh: () => privateRequests.get(`/auth/refresh`),
};

// Exporting agent object
const agent = {
  Properties: PropertiesAPI,
  Listings: ListingsAPI,
  Bookings: BookingsAPI,
  Auth: AuthAPI,
};

export default agent;
