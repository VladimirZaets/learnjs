var app = require('index'),
    http = require('http'),
    config = require('config'),
    port = config.get('port'),
    server;

server = http.createServer(app);
server.listen(port);

//TODO: set error listener "server.on('error', %new Error%)"
