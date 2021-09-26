import { Router, Response, Request, NextFunction } from 'express';
import { GithubRepoController } from '../controllers/githubRepo.controller';

const GithubRouter = Router();

GithubRouter.get('/repos', GithubRepoController.getAllGithubRepos);

export = GithubRouter;
