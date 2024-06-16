import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ACCESS_TOKEN_MAX_AGE, REFRESH_TOKEN_MAX_AGE } from '@/constants/tokens.max.age';

dotenv.config();

const SECRET_KEY: string = process.env.JWT_SECRET as string;

const generateToken = (id: number, secret_key: string, lifeTime: number) => {
  const token = jwt.sign({ id }, secret_key as string, {
    expiresIn: lifeTime,
  });

  return `Bearer ${token}`;
};

export const generateAccessToken = (id: number): string => {
  return generateToken(id, SECRET_KEY, ACCESS_TOKEN_MAX_AGE);
};

export const generateRefreshToken = (id: number): string => {
  return generateToken(id, SECRET_KEY, REFRESH_TOKEN_MAX_AGE);
};

export const verifyToken = async (token: string): Promise<any> => {
  try {
    const decoded = await jwt.verify(token.replace('Bearer ', ''), SECRET_KEY as string);
    return decoded;
  } catch (error) {
    throw new Error('token verification failed');
  }
};
