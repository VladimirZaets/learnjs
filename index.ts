const express  = require('express');
const path  = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

import { initAuthentication } from 'auth/passport';
import { router } from 'api/router';
import { models } from 'setup';

const app = express();

app.set('models', models);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: 'c@T', name: 'connect.sid.learnjs'}));

initAuthentication(app);

app.use('/api', router);
app.use('/', (req:any, res:any) => {res.redirect('/#' + req.url)});

export { app };
