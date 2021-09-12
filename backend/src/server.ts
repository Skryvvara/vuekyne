import Express, { json, urlencoded } from 'express';
import compression from 'compression';
import Routes from './routes/masterRouter.router';

import setPoweredByHeaderMiddleware from './middlewares/setPoweredByHeader.middleware';

const app = Express();
app.use(json());
app.use(urlencoded({
    extended: true
}));
app.use(compression({
    threshold: 0
}));

app.use(setPoweredByHeaderMiddleware);
app.use(Routes);

export = app;
