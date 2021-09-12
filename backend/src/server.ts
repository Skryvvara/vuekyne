import Express, { json, urlencoded } from 'express';
import compression from 'compression';
import Routes from './routes/masterRouter.router';

const app = Express();
app.use(json());
app.use(urlencoded({
    extended: true
}));
app.use(compression({
    threshold: 0
}));

app.use(Routes);

export = app;
