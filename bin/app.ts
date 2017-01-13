const express = require('express');
const path = require('path');
import { router } from 'api/router';
import { models } from 'setup';

const app = express();

app.set('models', models);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);
app.use('/', (req:any, res:any) => {res.render('index')});

export { app };
