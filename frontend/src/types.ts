export interface AuthForm {
  name?: string;
  email: string;
  password: string;
}

export interface Property {
  property_id: number;
  title: string;
  description: string;
  price_per_night: number;
  image: string;
  location: string;
  user_id: number;
  wifi: boolean;
  parking: boolean;
  pets: boolean;
  gym: boolean;
  pool: boolean;
  netflix: boolean;
}
