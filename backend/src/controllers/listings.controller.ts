import db from '@/database/config/db';
import { Property, PropertyWithImages } from '@/types';
import { formatPropertiesData } from '@/utils';
import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const getListings = async (req: Request, res: Response) => {
  const query = `
        SELECT p.*, i.image_url
        FROM properties p
        LEFT JOIN images i ON p.property_id = i.property_id
      `;
  try {
    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>(query);

    const response = formatPropertiesData(rows);

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
