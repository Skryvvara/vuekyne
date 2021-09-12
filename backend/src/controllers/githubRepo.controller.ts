import { Controller } from "./controller";
import { Request, Response, NextFunction } from 'express';
import { GithubRepository } from "../models/githubRepo.model";
import { Cache, CacheContainer } from "node-ts-cache";
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import AppConfig from '../config/config';
import axios from "axios";

const repoCache = new CacheContainer(new MemoryStorage());
const langCache = new CacheContainer(new MemoryStorage());

export class GithubRepoController extends Controller {

    @Cache(langCache, {ttl: 3600})
    protected static async fetchLanguages(url: string): Promise<string[]> {
        let result = await axios.get(url, AppConfig.getGithubAuthHeader());
        let data = Object.keys(result.data);
        return data;
    }

    @Cache(repoCache, {ttl: 3600})
    protected static async fetchRepos(url: string): Promise<GithubRepository[]> {
        const repos = await axios.get<GithubRepository[]>(url, AppConfig.getGithubAuthHeader()).then(res => res.data);

        for(const repo of repos) {
            repo.languages = await this.fetchLanguages(repo.languages_url);
        }

        return repos;
    }

    public static getAllGithubRepos = async(req: Request, res: Response) => {
        const data = await this.fetchRepos('https://api.github.com/users/xDarkyne/repos');

        res.json(data);
    }

}
