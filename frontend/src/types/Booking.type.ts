import { Property } from './property.type';

export interface Booking extends Property {
  booking_id: number;
  property_id: number;
  user_id: number;
  start_date: string;
  end_date: string;
  total_price: number;
}
