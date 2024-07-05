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

export const createListing = async (req: Request, res: Response) => {
  const { property } = req.body;
  const images = req.files as Express.Multer.File[];
  const propertyData = { ...property, images: images.map((image) => image.filename) };
  try {
    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>('INSERT INTO properties SET ?', [[propertyData]]);
    const response = formatPropertiesData(rows);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
