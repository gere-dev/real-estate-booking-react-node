import { Request } from 'express';

export interface Property {
  property_id: number;
  title: string;
  description: string;
  bed: number;
  address: string;
  city: string;
  state: string;
  price_per_night: number;
  wifi: boolean;
  parking: boolean;
  pets: boolean;
  gym: boolean;
  pool: boolean;
  netflix: boolean;
  user_id: number;
  image_url: string;
}

export interface Image {
  property_id: number;
  image_url: string;
}

export interface PropertyWithImages extends Omit<Property, 'image_url'> {
  images?: [string];
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface CustomRequest extends Request {
  userId?: number;
}
