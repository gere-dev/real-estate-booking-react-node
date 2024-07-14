import { filterProperties, getProperty } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.get('/fetch/:id', getProperty);

export default router;
