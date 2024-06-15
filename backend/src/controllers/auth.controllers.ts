import db from '@/database/config/db';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const SALT = 10;
    const hashedPassword = await bcrypt.hash(password, SALT);

    const values = [name, email, hashedPassword];

    // await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', values);

    res.status(200).json(values);
  } catch (error) {
    console.log(`Error at register controller: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};
