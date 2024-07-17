import { Booking, Property, PropertyWithImages } from '@/types';

/**
 * Transforms an array of Property objects into an array of PropertyWithImages objects,
 * where each property may have multiple images.
 * @param rows An array of Property objects to transform.
 * @returns An array of PropertyWithImages objects.
 */
export const formatPropertiesData = (rows: Property[]) => {
  const properties: Record<number, PropertyWithImages> = {};

  for (const row of rows) {
    const propertyId = row.property_id;

    if (!properties[propertyId]) {
      properties[propertyId] = {
        property_id: row.property_id,
        title: row.title,
        description: row.description,
        bed: row.bed,
        address: row.address,
        city: row.city,
        state: row.state,
        price_per_night: row.price_per_night,
        wifi: row?.wifi === 1,
        parking: row?.parking === 1,
        pets: row?.pets === 1,
        gym: row?.gym === 1,
        pool: row?.pool === 1,
        netflix: row?.netflix === 1,
        user_id: row?.user_id,
        images: [],
      };
    }

    if (row.image_url !== null) {
      properties[propertyId].images.push(row.image_url);
    }
  }

  const response = Object.values(properties);
  return response;
};

export const formatBookingData = (rows: Booking[]) => {
  const bookings: Record<number, Booking> = {};

  for (const row of rows) {
    const bookingId = row.booking_id;
    if (!bookings[bookingId]) {
      bookings[bookingId] = {
        booking_id: row.booking_id,
        user_id: row.user_id,
        guests: row.guests,
        start_date: row.start_date,
        end_date: row.end_date,
        total_price: row.total_price,
        property_id: row.property_id,
        title: row.title,
        city: row.city,
        state: row.state,
        price_per_night: row.price_per_night,
        bed: row.bed,
        description: row.description,
        address: row.address,
        wifi: row?.wifi === 1,
        parking: row?.parking === 1,
        pets: row?.pets === 1,
        gym: row?.gym === 1,
        pool: row?.pool === 1,
        netflix: row?.netflix === 1,
        images: [],
        image_url: row.image_url,
      };
    }
    if (row.image_url !== null) {
      bookings[bookingId].images.push(row.image_url);
    }
  }

  const response = Object.values(bookings);
  return response;
};
