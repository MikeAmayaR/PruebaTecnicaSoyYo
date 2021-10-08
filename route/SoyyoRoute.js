import { Router } from 'express';
import soyyoController from '../controller/SoyyoController.js'; 

const router = Router();

router.post('/filter', soyyoController.getEntities);

export default router;