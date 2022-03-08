import { Router } from 'express';
import GithubRouter from './github.routes';
import MailRouter from './mail.router';

const Routes = Router();

Routes.use('/api', GithubRouter);
Routes.use('/api', MailRouter);

export = Routes;
