export interface Booking {
  id: number;
  property_id: number;
  user_id: number;
  start_date: string;
  end_date: string;
  total_price: number;
  status: string;
  image_url: string[] | [];
  title: string;
  city: string;
  state: string;
  bed: number;
}
