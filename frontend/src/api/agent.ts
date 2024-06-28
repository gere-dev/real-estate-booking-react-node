import { Property } from '@/types';
import axios, { AxiosResponse } from 'axios';

export const apiUrl = import.meta.env.NODE === 'production' ? import.meta.env.VITE_API_URL : 'http://localhost:5000/api';

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Properties = {
  list: () => requests.get('/properties'),
  create: (property: Property) => requests.post(`/properties/`, property),
  update: (property: Property) => requests.put(`/properties/${property.property_id}`, property),
  delete: (propertyId: number) => requests.delete(`/properties/${propertyId}`),
};

const agent = {
  Properties,
};

export default agent;
