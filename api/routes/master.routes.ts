import { Router } from 'express';
import GithubRouter from './github.routes';

const Routes = Router();

Routes.use('/v1', GithubRouter);

export = Routes;
