import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import db from '@db';

dotenv.config();

const ACCESS_TOKEN_lIFETIME = '120s';
const REFRESH_TOKEN_LIFETIME = '60s';

export const generateAccessToken = (id: number): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: ACCESS_TOKEN_lIFETIME,
  });
};

export const generateRefreshToken = (id: number): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: REFRESH_TOKEN_LIFETIME,
  });
};

export const verifyToken = async (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};
