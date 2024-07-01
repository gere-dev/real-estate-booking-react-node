import { NextFunction, Request, Response } from 'express';
import validator from 'email-validator';
import { errorMessages } from '@/constants';
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
  if (req.path === '/register') {
    if (!name) {
      return res.status(400).json({ message: errorMessages.invalidName });
    }
  }
  next();
};
