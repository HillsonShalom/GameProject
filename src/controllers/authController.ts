import jwt, { Jwt } from "jsonwebtoken"
import { Request, Response, Router } from "express"
// internal
import service from "../services/authService"
import { authDTO } from "../models/DTOmodels/interfaces";



const router = Router();


router.post('/register', async (
    req: Request<any, any, authDTO>,
    res: Response
) => {
    
});

router.post('/login', async (
    req: Request<any, any, authDTO>,
    res: Response
) => {

});

export default router