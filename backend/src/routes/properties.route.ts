import { getProperties } from '@/controllers';
import { validateUser } from '@/middlewares';
import { Router } from 'express';

const router = Router();

router.get('/', getProperties);

export default router;
