import { getProperty } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.get('/:id', getProperty);
export default router;
