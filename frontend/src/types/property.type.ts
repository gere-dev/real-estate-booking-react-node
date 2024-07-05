export interface Property {
  property_id: number;
  title: string;
  description: string;
  bed: number;
  price_per_night: number;
  images: string[]; // Array of strings representing image URLs
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

export interface NewProperty extends Omit<Property, 'property_id' | 'images'> {
  images: File[]; // Array of File objects for new property images
}
