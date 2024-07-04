import { Property, PropertyWithImages } from '@/types';

/**
 * Transforms an array of Property objects into an array of PropertyWithImages objects,
 * where each property may have multiple images.
 * @param rows An array of Property objects to transform.
 * @returns An array of PropertyWithImages objects.
 */
export const formatPropertiesData = (rows: Property[]): PropertyWithImages[] => {
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
        wifi: row?.wifi,
        parking: row?.parking,
        pets: row?.pets,
        gym: row?.gym,
        pool: row?.pool,
        netflix: row?.netflix,
        user_id: row?.user_id,
        images: [row?.image_url],
      };
    } else {
      properties[propertyId]?.images?.push(row?.image_url);
    }
  }

  const response = Object.values(properties);
  return response;
};
