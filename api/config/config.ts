import { AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';

export class Config {
  NODE_ENV: string = "";
  PORT: number = 0;
  GITHUB_TOKEN: string = "";
  GITHUB_CACHE_TTL: number = 0;
  GITHUB_AUTH_HEADER: AxiosRequestConfig = {};

  constructor(path: string = '../.env') {
    this.flushEnv(path);
  }
  
  public flushEnv(path: string) {
    dotenv.config({
      path: path
    });

    this.setValues();
  }

  private setValues() {
    this.NODE_ENV = process.env.NODE_ENV || "development";
    this.PORT = Number(process.env.PORT!) || 3000;
    this.GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
    this.GITHUB_CACHE_TTL = Number(process.env.GITHUB_CACHE_TTL) || 3600;
    this.GITHUB_AUTH_HEADER = {
      headers: { }
    }

    if (this.GITHUB_TOKEN) {
      this.GITHUB_AUTH_HEADER.headers = {
        'Authorization': "token " + this.GITHUB_TOKEN
      }
    }
  }
}

export default new Config()