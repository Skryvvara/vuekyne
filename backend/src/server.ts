import Express, { Application, json, urlencoded } from 'express';
import { Server as HttpServer } from 'http';
import compression from 'compression';
import Routes from './routes/masterRouter.routes';

import { Middleware } from './middlewares/middleware';
import { SetHeaderMiddleware } from './middlewares/setHeaders.middleware';

class Server {
    public port: number;
    public app: Application;
    private server: HttpServer;
    private middlewares: Middleware[];

    constructor(port: number = 3000) {
        this.app = Express();
        this.port = port;

        this.middlewares = [
            new SetHeaderMiddleware,
        ];
        this.setupMiddlewares();

        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
        this.app.use(compression({ threshold: 0 }));

        this.app.use(Routes);
    }

    public startServer(callback?: Function) {
        let port = this.port;
        callback = callback || function() {
            console.log(`App running on port ${port}`);
        }

        this.server = this.app.listen(port, callback());
    }

    public stopServer() {
        if (this.server.listening) {
            this.server.close();
        }
    }

    public setupMiddlewares() {
        for(const middleware of this.middlewares) {
            this.app.use(middleware.defaultFunction)
        }
    }

    public isListening(): boolean {
        return this.server.listening;
    }
}

export = Server;
