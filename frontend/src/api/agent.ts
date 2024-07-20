import { AxiosInstance, AxiosResponse } from 'axios';
import { Login, Register, CreateBooking } from '@/types';
import { privateInstance, publicInstance } from './config';

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
  getById: (id: number) => publicRequests.get(`/properties/get-by-id/${id}`),
  filter: (query: { city: string; minPrice: number; maxPrice: number; bed: number | string }) => publicRequests.get(`/properties/filter`, query),
};

const ListingsAPI = {
  list: () => privateRequests.get('/listings/get-all'),
  create: (listing: FormData) => privateRequests.post(`/listings/create`, listing, formHeader),
  update: (listing: FormData, listingId: number) => privateRequests.put(`/listings/update/${listingId}`, listing, formHeader),
  delete: (listingId: number) => privateRequests.delete(`/listings/delete/${listingId}`),
  getById: (id: number) => privateRequests.get(`/listings/get-by-id/${id}`),
};

const BookingsAPI = {
  list: () => privateRequests.get('/bookings/get-all'),
  create: (booking: CreateBooking) => privateRequests.post(`/bookings/create`, booking),
  delete: (bookingId: number) => privateRequests.delete(`/bookings/delete/${bookingId}`),
};

const AuthAPI = {
  register: (data: Register) => publicRequests.post(`/auth/register`, data),
  login: (data: Login) => publicRequests.post(`/auth/login`, data),
  logout: () => publicRequests.post(`/auth/logout`, {}),
  refresh: () => privateRequests.get(`/auth/refresh`),
};

const agent = {
  Properties: PropertiesAPI,
  Listings: ListingsAPI,
  Bookings: BookingsAPI,
  Auth: AuthAPI,
};

export default agent;
