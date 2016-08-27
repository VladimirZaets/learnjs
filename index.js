var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', function (req, res) {
        res.send(req.url);
    }
);

module.exports = app;
