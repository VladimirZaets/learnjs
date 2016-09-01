import express  = require('express');
import path  = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', (req:any, res:any) => {res.send(req.url)});

export { app };
