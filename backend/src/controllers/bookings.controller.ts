import { UserRole } from '@/constants/user.role';
import db from '@/database/config/db';
import { Property } from '@/types';
import { formatPropertiesData } from '@/utils';
import { Request, Response } from 'express';
import { FieldPacket } from 'mysql2';

export const getAllBookings = async (req: Request, res: Response) => {
  // (SELECT image_url FROM images WHERE property_id = p.property_id LIMIT 1) AS image_url
  let query = `SELECT b.*, p.title, p.price_per_night, p.bed, b.start_date, b.end_date
    FROM bookings b
    LEFT JOIN properties p ON b.property_id = p.property_id
    LEFT JOIN images i ON p.property_id = i.property_id
  `;

  if (req.user.role === UserRole.ADMIN) {
    query += `
        ORDER BY b.created_at DESC
    `;
  } else {
    query += `
        WHERE b.user_id = ${req.user.id}
        ORDER BY b.created_at DESC
    `;
  }

  try {
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error(`Error at getAllBookings controller: ${error}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createBooking = async (req: Request, res: Response) => {
  const { property_id, start_date, end_date } = req.body;
  const { id } = req.user;

  if (typeof property_id !== 'number' || !start_date || !end_date) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    const [rows]: [any, FieldPacket[]] = await db.query('INSERT INTO bookings (user_id, property_id, start_date, end_date) VALUES (?, ?, ?, ?)', [
      id,
      property_id,
      start_date,
      end_date,
    ]);

    const booking_id = rows.insertId;
    const query = `
      SELECT * FROM properties 
      WHERE property_id = ${property_id}
      LEFT JOIN images ON properties.property_id = images.property_id
    `;

    const [property] = await db.query(query);
    const formattedProperty = formatPropertiesData(property as Property[]);
    const response = { ...formattedProperty, booking_id, start_date, end_date };

    res.status(200).json(response);
  } catch (error) {
    console.error(`Error at createBooking controller: ${error}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};
