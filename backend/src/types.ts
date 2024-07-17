import { Request } from 'express';
import { UserRole } from './constants/user.role';

export interface Property {
  property_id: number;
  title: string;
  description: string;
  bed: number;
  address: string;
  city: string;
  state: string;
  price_per_night: number;
  wifi: boolean | number;
  parking: boolean | number;
  pets: boolean | number;
  gym: boolean | number;
  pool: boolean | number;
  netflix: boolean | number;
  user_id: number;
  image_url: string;
}

export interface Image {
  property_id: number;
  image_url: string;
}

export interface PropertyWithImages extends Omit<Property, 'image_url'> {
  images: string[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface CustomRequest extends Request {
  user: {
    id: number;
    role: UserRole;
  };
}

export interface Booking extends Property {
  booking_id: number;
  user_id: number;
  guests: number;
  start_date: string;
  end_date: string;
  total_price: number;
  images: string[];
}
