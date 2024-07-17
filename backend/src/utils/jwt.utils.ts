import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ACCESS_TOKEN_MAX_AGE, REFRESH_TOKEN_MAX_AGE } from '@/constants/tokens.max.age';
import { error } from 'console';

dotenv.config();

const SECRET_KEY: string = process.env.JWT_SECRET!!;

const generateToken = (id: number, role: string = 'user', secret_key: string, lifeTime: number) => {
  const token = jwt.sign({ id, role }, secret_key as string, {
    expiresIn: lifeTime,
  });

  return token;
};

export const generateAccessToken = (id: number, role: string): string => {
  const token = generateToken(id, role, SECRET_KEY, ACCESS_TOKEN_MAX_AGE);
  return token;
};

export const generateRefreshToken = (id: number, role: string): string => {
  const token = generateToken(id, role, SECRET_KEY, REFRESH_TOKEN_MAX_AGE);
  return token;
};

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded;
};
