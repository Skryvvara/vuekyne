import { AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';

dotenv.config({
    path: '../../.env'
});

class AppConfig {
    NODE_ENV: string
    PORT: number
    GITHUB_TOKEN: string
    GITHUB_CACHE_TTL: number
    GITHUB_AUTH_HEADER: Object

    constructor() {
        this.NODE_ENV = process.env.NODE_ENV || "dev";
        this.PORT = +process.env.PORT || 3000;
        this.GITHUB_TOKEN = process.env.GITHUB_TOKEN;
        this.GITHUB_CACHE_TTL = +process.env.GITHUB_CACHE_TTL || 3600;
        this.GITHUB_AUTH_HEADER = {
            headers: {
                'Authorization': "token " + this.GITHUB_TOKEN
            }
        }
    }
}

export = new AppConfig()