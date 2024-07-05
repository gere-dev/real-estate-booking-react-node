export interface Property {
  property_id: number;
  user_id: number;
  title: string;
  description: string;
  bed: number;
  price_per_night: number;
  images: (string | File)[];
  address: string;
  city: string;
  state: string;
  wifi: boolean;
  parking: boolean;
  pets: boolean;
  gym: boolean;
  pool: boolean;
  netflix: boolean;
  extraInfo: string;
}

export interface NewProperty extends Omit<Property, 'property_id'> {}
