import { Middleware } from './middleware';
import { Request, Response, NextFunction } from 'express';

export class SetHeaderMiddleware extends Middleware {
    public defaultFunction(req: Request, res: Response, next: NextFunction) {
        res.removeHeader('X-Powered-By');
        next();
    }
}