const express  = require('express'),
path  = require('path'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
session = require('express-session');
import { initAuthentication } from 'auth/passport';
import { router } from 'api/router';
import { models } from 'setup';

let app = express();

app.set('models', models);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: 'c@T', name: 'connect.sid.learnjs'}));

initAuthentication(app);

app.use('/api', router);
app.use('/', (req:any, res:any) => {res.send(req.url)});

export { app };
