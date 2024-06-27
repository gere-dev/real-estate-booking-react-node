import { getProperties } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.get('/', getProperties);

export default router;
