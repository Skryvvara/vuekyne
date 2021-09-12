import { Router, Response, Request, NextFunction } from 'express';
import { GithubRepoController } from '../controllers/githubRepo.controller';

const githubRepoController = new GithubRepoController();
const GithubRouter = Router();

GithubRouter.get('/repos', githubRepoController.getAllGithubRepos);

export = GithubRouter;
