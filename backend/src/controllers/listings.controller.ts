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
  const property = {
    user_id: parseInt(req.body.user_id),
    title: req.body.title,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    description: req.body.description,
    extraInfo: req.body.extraInfo,
    price_per_night: parseInt(req.body.price_per_night),
    bed: parseInt(req.body.bed),
    wifi: req.body.wifi === 'true',
    parking: req.body.parking === 'true',
    pets: req.body.pets === 'true',
    netflix: req.body.netflix === 'true',
    gym: req.body.gym === 'true',
    pool: req.body.pool === 'true',
  };
  const images = req.files as Express.Multer.File[];

  if (isNaN(property.user_id) || isNaN(property.price_per_night) || isNaN(property.bed)) {
    return res.status(400).json({ error: 'Invalid numeric input' });
  }

  try {
    // const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>('INSERT INTO properties SET ?', [[property]]);
    const [propertyResult]: [any, FieldPacket[]] = await db.query('INSERT INTO properties SET ?', [property]);

    const property_id = propertyResult.insertId;

    await Promise.all(
      images.map(async (image) => {
        await db.query('INSERT INTO images SET ?', [{ property_id, image_url: image.filename }]);
      })
    );
    const query = `
    SELECT p.*, i.image_url
    FROM properties p
    LEFT JOIN images i ON p.property_id = i.property_id
  `;

    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>(query, [property_id]);

    const response = formatPropertiesData(rows);
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(`Error creating listing controller: ${error}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};
