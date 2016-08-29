var app = require('index'),
    http = require('http'),
    config = require('config').get('server'),
    port = config.port,
    server;

server = http.createServer(app);
server.listen(port);

//TODO: set error listener "server.on('error', %new Error%)"
