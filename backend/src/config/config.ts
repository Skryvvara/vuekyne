import { AxiosRequestConfig } from 'axios';

export abstract class AppConfig {
    public static NODE_ENV: string = AppConfig.getEnv<string>("NODE_ENV");
    public static PORT: number = AppConfig.getEnv<number>("PORT");
    public static MAIL_HOST: string = AppConfig.getEnv<string>("MAIL_HOST");
    public static MAIL_TO: string = AppConfig.getEnv<string>("MAIL_TO");
    public static MAIL_PORT: number = AppConfig.getEnv<number>("MAIL_PORT");
    public static MAIL_SECURE: boolean = AppConfig.getEnv<boolean>("MAIL_SECURE");
    public static MAIL_USER: string = AppConfig.getEnv<string>("MAIL_USER");
    public static MAIL_PASS: string = AppConfig.getEnv<string>("MAIL_PASS");
    public static GITHUB_TOKEN: string = AppConfig.getEnv<string>("GITHUB_TOKEN");
    public static GITHUB_CACHE_TTL: number = AppConfig.getEnv<number>("GITHUB_CACHE_TTL");
    public static GITHUB_AUTH_HEADER: AxiosRequestConfig = (AppConfig.GITHUB_TOKEN)
                                                                ? { headers: {"Authorization": "token "+this.GITHUB_TOKEN} }
                                                                : undefined;

    public static getEnv<T>(key: string): T {
        try {
            const value: T = <T><unknown>process.env[key];
            return value;
        } catch(error: any) {
            console.error(error);
            throw error;
        }
    }
}