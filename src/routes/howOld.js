import { Router } from 'express';
import howoldController from "../controllers/howOld";
import { validateDob } from "../middlewares";

const router = Router();

router.get('/', validateDob, howoldController);

export default router;
