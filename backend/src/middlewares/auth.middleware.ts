import { NextFunction, Request, Response } from 'express';
import validator from 'email-validator';
import { errorMessages, EndPointPaths } from '@/constants';
import { verifyToken } from '@/utils/jwt.utils';
import { CustomRequest } from '@/types';
import { UserRole } from '@/constants/user.role';
import db from '@/database/config/db';
export const validateCredentials = (req: Request, res: Response, next: NextFunction) => {
  const MIN_PASSWORD_LENGTH = 6;

  const { name, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: errorMessages.requiredEmailPassword });
  }
  if (!validator.validate(email)) {
    return res.status(400).json({ message: errorMessages.invalidEmail });
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return res.status(400).json({ message: errorMessages.invalidPasswordLength });
  }

  // for registration end point only
  if (req.path === EndPointPaths.REGISTER) {
    if (!name) {
      return res.status(400).json({ message: errorMessages.invalidName });
    }
  }
  next();
};

export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: errorMessages.unauthorized });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: errorMessages.unauthorized });
  }
  try {
    const decoded = verifyToken(token) as { id: number; role: UserRole };

    if (!decoded) {
      return res.status(401).json({ message: errorMessages.invalidToken });
    }

    const user = db.query('SELECT * FROM users WHERE id = ?', [decoded.id]);

    if (!user) {
      return res.status(401).json({ message: errorMessages.userNotFound });
    }

    req.user.id = decoded.id;
    req.user.role = decoded.role;
  } catch (error) {
    console.log(error, 'auth error');
    return res.status(401).json({ message: errorMessages.invalidToken });
  }

  next();
};
