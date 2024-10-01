import { Request, Response, Router } from "express"
// internal
import service from "../services/authService"
import { authDTO } from "../models/DTOmodels/interfaces";
import 'dotenv/config'
import dbContext from "../DAL/dbContext";
import User from "../models/profileModel";

const data = new dbContext();

const router = Router();


router.post('/register', async (
    req: Request<any, any, authDTO>,
    res: Response
) => {
    try {
        const user = await service.dtoToUser(req.body);
        const id   = await data.add(user);
        if (!id) throw new Error();

        const token = service.generateToken(user.name, id);
        res.cookie('token', token, { httpOnly: true });

        res.status(201).json({ message: 'successfull! you got a token!'});
    } catch(err) {
        console.log('fail registeration!');
    }
});

router.post('/login', async (
    req: Request<any, any, authDTO>,
    res: Response
) => {
    try {
        const found: User|undefined = data.profiles.find(u => u.name === req.body.name);
        if (!found) throw new Error('not Exsists!');
        if (!service.verifyPassword(req.body, found)) throw new Error('wrong password!');

        const token = service.generateToken(found.name, found.id!);
        res.cookie('token', token, { httpOnly: true });

        res.status(201).json({ message: 'successfull! you got a token!'});
        
    } catch(err) {
        console.log('fail login!');
    }
});

export default router