import db from '@/database/config/db';
import { generateAccessToken, generateRefreshToken } from '@/utils/jwt.utils';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { ResultSetHeader } from 'mysql2';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // hash the password
    const SALT = 10;
    const hashedPassword = await bcrypt.hash(password, SALT);

    // insert into database
    const values = [name, email, hashedPassword];
    const [result] = await db.query<ResultSetHeader>('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', values);

    // generate access token and refresh token
    const userId = result.insertId;
    const accessToken = generateAccessToken(userId);
    const refreshToken = generateRefreshToken(userId);

    // save refresh token in database
    await db.query<ResultSetHeader>('INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)', [userId, refreshToken]);

    // set cookie
    res.cookie('access_token', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000, //24 hours in milliseconds
      secure: true,
      sameSite: 'none',
    });

    const user = {
      id: userId,
      name,
      email,
    };

    res.status(201).json(user);
  } catch (error) {
    console.log(`Error at register controller: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};
