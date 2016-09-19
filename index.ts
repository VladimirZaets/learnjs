import express  = require('express');
import path  = require('path');
import { router } from 'api/router';
import { models } from 'setup';

let app = express();

app.set('models', models);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);
app.use('/', (req:any, res:any) => {res.send(req.url)});

export { app };
