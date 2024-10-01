import { Request, Response, Router } from "express"

const router = Router();

// endpoints
router.get('/');
router.post('/start');

export default router