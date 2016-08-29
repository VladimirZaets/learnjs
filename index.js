var express = require('express'),
    path = require('path'),
    dataTypes = require('sequelize'),
    db = require('setup/database'),
    app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', function (req, res) {
        res.send(req.url);
    }
);

module.exports = app;
