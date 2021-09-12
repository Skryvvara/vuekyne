import app from "./server";
import AppConfig from "./config/config";

const server = app.listen(AppConfig.PORT);
