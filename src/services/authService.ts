import jwt, { Jwt } from "jsonwebtoken"
import { hash } from "bcrypt"
import 'dotenv/config'
import { authDTO } from "../models/DTOmodels/interfaces"
import User from "../models/profileModel"

const hashingTimes = 5;

class service {
    static generateToken(name: string, id: string){
        return jwt.sign({
            id  : id,
            name: name
        },
        `${process.env.SECRET_KEY}`,
        { expiresIn: '1h' }
    )
    }

    static async verifyPassword(user: authDTO, found: User): Promise<boolean> {
        const hashed = await hash(user.password, hashingTimes);
        if (hashed === found.hash) return true;
        return false;
    }


    static async dtoToUser(auth: authDTO): Promise<User> {
        return new User(undefined, auth.name, await hash(auth.password, hashingTimes))
    }
}

export default service