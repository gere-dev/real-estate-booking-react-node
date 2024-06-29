import db from '@/database/config/db';
import { Property, PropertyWithImages } from '@/types';
import { Request, Response } from 'express';

export const getProperty = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // get the property and all its images
    const query = `
    SELECT properties.*, images.image_url
    FROM properties
    LEFT JOIN images ON properties.property_id = images.property_id
    WHERE properties.property_id = ?
    `;
    const [result] = await db.query<any>(query, [id]);

    let property: PropertyWithImages = {} as PropertyWithImages;

    if (result.length > 0) {
      property = { ...property, ...result[0] };
      property.images = result.map((row: Property) => row.image_url);
    }
    res.status(201).json(property);
  } catch (error) {
    console.log(`Error at getProperty controller: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};
