import { Property } from '@/types';

export interface Booking extends Property {
  booking_id: number;
  user_id: number;
  guests: number;
  start_date: string;
  end_date: string;
  total_price: number;
  images: string[];
}
