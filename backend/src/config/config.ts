import { AxiosRequestConfig } from 'axios';

export abstract class AppConfig {
    public static NODE_ENV: string = this.getEnv<string>("NODE_ENV");
    public static PORT: number = this.getEnv<number>("PORT");
    public static GITHUB_TOKEN: string = this.getEnv<string>("GITHUB_TOKEN");
    public static GITHUB_CACHE_TTL: number = this.getEnv<number>("GITHUB_CACHE_TTL");
    public static GITHUB_AUTH_HEADER: AxiosRequestConfig = (this.GITHUB_TOKEN) 
                                                                ? { headers: {"Authorization": "token "+this.GITHUB_TOKEN} }
                                                                : undefined;

    private static getEnv<T>(key: string): T {
        try {
            const value: T = <T><unknown>process.env[key];
            return value;
        } catch(error: any) {
            console.error(error);
            throw error;
        }
    }
}