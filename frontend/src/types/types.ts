export interface AuthForm {
  name?: string;
  email: string;
  password: string;
}

export interface Property {
  property_id: number;
  title: string;
  description: string;
  bed: number;
  price_per_night: number;
  images: [string];
  address: string;
  city: string;
  state: string;
  user_id: number;
  wifi: boolean;
  parking: boolean;
  pets: boolean;
  gym: boolean;
  pool: boolean;
  netflix: boolean;
}
