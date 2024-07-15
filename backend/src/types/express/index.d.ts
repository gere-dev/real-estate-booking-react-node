import { UserRole } from '@/constants/user.role';
import express from 'express';

declare global {
  namespace Express {
    interface Request {
      user: {
        id: number;
        role: UserRole;
      };
    }
  }
}
