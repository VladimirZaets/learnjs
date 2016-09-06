import express  = require('express');
import path  = require('path');
import { router } from 'api/router/router';

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);
app.use('/', (req:any, res:any) => {res.send(req.url)});

export { app };
