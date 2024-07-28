import { db } from '@db/index';
import { Property, PropertyWithImages } from '@/types';
import { formatPropertiesData } from '@/utils';
import { Request, Response } from 'express';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const getAllProperties = async (req: Request, res: Response) => {
  const query = `
      SELECT p.*, i.image_url
      FROM properties p
      LEFT JOIN images i ON p.property_id = i.property_id
    `;
  try {
    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>(query);

    const properties = formatPropertiesData(rows);

    const response = Object.values(properties);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const filterProperties = async (req: Request, res: Response) => {
  try {
    const { city, minPrice, maxPrice, bed } = req.query;

    let params: any[] = [];
    let sql = `
      SELECT p.*, i.image_url
      FROM properties p
      LEFT JOIN images i ON p.property_id = i.property_id
      WHERE 1=1
    `;

    if (city) {
      sql += ` AND (p.city LIKE ? OR SOUNDEX(p.city) = SOUNDEX(?))`;
      params.push(`%${city}%`, city);
    }

    if (minPrice) {
      sql += ` AND p.price_per_night >= ?`;
      params.push(parseInt(minPrice as string));
    }

    if (maxPrice) {
      sql += ` AND p.price_per_night <= ?`;
      params.push(parseInt(maxPrice as string));
    }

    if (bed) {
      if (bed === '1' || bed === '2') {
        sql += ` AND p.bed = ?`;
        params.push(parseInt(bed));
      } else if (bed === '3+') {
        sql += ` AND p.bed >= ?`;
        params.push(3);
      }
    }

    sql += `
      ORDER BY p.price_per_night ASC
    `;

    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>(sql, params);

    const response = formatPropertiesData(rows);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getPropertyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const query = `
    SELECT properties.*, images.image_url
    FROM properties
    LEFT JOIN images ON properties.property_id = images.property_id
    WHERE properties.property_id = ?
    `;
    const [rows]: [Property[], FieldPacket[]] = await db.query<Property[] & RowDataPacket[]>(query, [id]);

    let property: PropertyWithImages[] = [];

    if (rows.length > 0) {
      property = formatPropertiesData(rows);
    }

    const response = property[0] || {};
    res.status(201).json(response);
  } catch (error) {
    console.log(`Error at getProperty controller: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};
