import { Router, Response, Request, NextFunction } from 'express';
import { MaiLController } from '../controllers/mail.controller';

const MailRouter = Router();

MailRouter.post('/sendmail', MaiLController.sendMailAsync);

export = MailRouter;
