import db from '@/database/config/db';
import { setCookies } from '@/utils/cookies.utils';
import { generateAccessToken, generateRefreshToken, verifyToken } from '@/utils/jwt.utils';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { ResultSetHeader } from 'mysql2';

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // check if user already user
    const [userData] = await db.query<any>('SELECT * FROM users WHERE email = ?', [email]);
    const userExists = userData[0]; // get the first element of the array

    if (userExists) {
      return res.status(401).json({ message: 'User already exists' });
    }

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
    setCookies(res, accessToken, refreshToken);

    const user = {
      id: userId,
      name,
      email,
    };

    res.status(201).json({ user, accessToken });
  } catch (error) {
    console.log(`Error at register controller: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const [result] = await db.query<any>('SELECT * FROM users WHERE email = ?', [email]);
    const user = result[0]; // get the first element of the array

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    await db.query<ResultSetHeader>('INSERT INTO refresh_tokens (user_id, token) VALUES (?, ?)', [user.id, refreshToken]);

    setCookies(res, accessToken, refreshToken);

    res.status(200).json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.log(`Error at signIn controller: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refresh_token;

    if (!refreshToken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const decoded = await verifyToken(refreshToken);
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const [result] = await db.query<any>('SELECT * FROM refresh_tokens WHERE token = ?', [refreshToken]);
    const user = result[0]; // get the first element of the array
    if (!user) {
      // check if user userExists
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const accessToken = generateAccessToken(user.user_id);
    res.cookie('access_token', accessToken, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000, secure: true, sameSite: 'none' });
    res.status(200).json({ user: { id: user.user_id, name: user.name, email: user.email } });
  } catch (error) {
    // check if user userExists
    console.log(`Error at refreshToken controller: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie('access_token', {
    maxAge: 0, // Expire immediately
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
  res.clearCookie('refresh_token', {
    maxAge: 0, // Expire immediately
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
  res.status(200).json({ message: 'Logged out successfully' });
};
