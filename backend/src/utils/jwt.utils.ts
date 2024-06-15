import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const ACCESS_TOKEN_LIFETIME = '120s';
const REFRESH_TOKEN_LIFETIME = '60s';
const SECRET_KEY: string = process.env.JWT_SECRET as string;

const generateToken = (id: number, secret: string, lifeTime: string) => {
  const token = jwt.sign({ id }, secret as string, {
    expiresIn: lifeTime,
  });

  return `Bearer ${token}`;
};

export const generateAccessToken = (id: number): string => {
  return generateToken(id, SECRET_KEY, ACCESS_TOKEN_LIFETIME);
};

export const generateRefreshToken = (id: number): string => {
  return generateToken(id, SECRET_KEY, REFRESH_TOKEN_LIFETIME);
};

export const verifyToken = async (token: string): Promise<any> => {
  try {
    const decoded = await jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET as string);
    return decoded;
  } catch (error) {
    throw new Error('token verification failed');
  }
};
