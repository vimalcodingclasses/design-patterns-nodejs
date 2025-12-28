import { Request, Response } from 'express';
import { appMediator } from './AppMediator';
import { User } from './events';

export class UserController {

    static async register(req: Request, res: Response) {
        const { email, name } = req.body;

        const newUser: User = {
            id: 'u_123',
            email,
            name
        };

        appMediator.emit('user:registered', newUser);
    }
}