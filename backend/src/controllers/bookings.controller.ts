import { UserRole } from '@/constants/user.role';
import db from '@/database/config/db';
import { CustomRequest, Property } from '@/types';
import { Response } from 'express';
import { FieldPacket } from 'mysql2';

export const getAllBookings = async (req: CustomRequest, res: Response) => {
  // (SELECT image_url FROM images WHERE property_id = p.property_id LIMIT 1) AS image_url
  let query = `SELECT b.*, p.title, p.price_per_night, p.bed, b.start_date, b.end_date,
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
