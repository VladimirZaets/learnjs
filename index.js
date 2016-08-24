var express = require('express'),
    app = express();

app.use('/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    }
);

module.exports = app;
