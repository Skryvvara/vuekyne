import { Router } from 'express';
import { GithubRepoController } from '../controllers/githubRepository.controller';

const GithubRouter = Router();

GithubRouter.get('/repositories', GithubRepoController.getAllGithubRepos);

export = GithubRouter;
