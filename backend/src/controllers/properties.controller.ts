import db from '@/database/config/db';
import { Image, Property, PropertyWithImages } from '@/types';
import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const getProperties = async (req: Request, res: Response) => {
  const query = `
      SELECT p.*, i.image_url
      FROM properties p
      LEFT JOIN images i ON p.property_id = i.property_id
    `;
  try {
    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>(query);

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
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
