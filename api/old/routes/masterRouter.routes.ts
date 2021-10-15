import { Router } from 'express';
import GithubRouter from './github.routes';

const Routes = Router();

Routes.use('/api', GithubRouter);

export = Routes;
