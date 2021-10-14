import Server from "./server";
import AppConfig from "./config/config";

const server = new Server(AppConfig.PORT);
server.startServer()
