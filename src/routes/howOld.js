import { Router } from 'express';
import howoldController from "../controllers/howOld";
import { validateDob } from "../middlewares";

const router = Router();

router.get('/howold', validateDob, howoldController);

export default router;
