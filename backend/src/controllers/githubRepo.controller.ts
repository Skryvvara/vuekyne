import { Controller } from "./controller";
import { Request, Response } from 'express';
import { GithubRepository } from "../models/githubRepo.model";
import { Cache, CacheContainer } from "node-ts-cache";
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import AppConfig from '../config/config';
import axios, { AxiosResponse } from "axios";

const repoCache = new CacheContainer(new MemoryStorage());
const langCache = new CacheContainer(new MemoryStorage());

export class GithubRepoController extends Controller {

    @Cache(langCache, {ttl: AppConfig.GITHUB_CACHE_TTL})
    protected static async getRepositoryLanguages(url: string): Promise<string[]> {
        let result = await axios.get(url, AppConfig.GITHUB_AUTH_HEADER).then((res: AxiosResponse) => res.data);
        let data = Object.keys(result);
        return data;
    }

    @Cache(repoCache, {ttl: AppConfig.GITHUB_CACHE_TTL})
    protected static async getRepositories(url: string): Promise<GithubRepository[]> {
        const repositories = await axios.get<GithubRepository[]>(url, AppConfig.GITHUB_AUTH_HEADER).then(res => res.data);

        await Promise.all(repositories.map(async(repository) => {
            repository.languages = await this.getRepositoryLanguages(repository.languages_url);
        }));

        return repositories;
    }

    public static getAllGithubRepos = async(req: Request, res: Response) => {
        const data = await this.getRepositories('https://api.github.com/users/xDarkyne/repos');

        res.json(data);
    }

}
