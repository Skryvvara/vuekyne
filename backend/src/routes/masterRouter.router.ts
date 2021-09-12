import { Router } from 'express';
import GithubRouter from './github.router';

const Routes = Router();

Routes.use('/api', GithubRouter);

export = Routes;