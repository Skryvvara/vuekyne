import Server from "./server";
import { AppConfig } from "./config/config";
import dotenv from 'dotenv';
dotenv.config();

console.log(process.cwd());

const server = new Server(AppConfig.PORT);
server.startServer()
