import { Controller } from "./controller";
import { Request, Response, NextFunction } from 'express';
import { GithubRepository } from "../models/githubRepo.model";
import { Cache, CacheContainer } from "node-ts-cache";
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import axios from "axios";

const repoCache = new CacheContainer(new MemoryStorage())

export class GithubRepoController extends Controller {

    @Cache(repoCache, {ttl: 600})
    protected async fetchRepos(url: string): Promise<GithubRepository[]> {
        let result = await axios.get(url)
        const repos: GithubRepository[] = [];

        result.data.forEach((repo: any) => {
            repos.push(repo);
        })

        return repos;
    }

    public getAllGithubRepos = async(req: Request, res: Response) => {
        const data = await this.fetchRepos('https://api.github.com/users/xDarkyne/repos');

        res.json(data);
    }

}
