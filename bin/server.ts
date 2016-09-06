import { app } from 'index';
import { config } from 'config/index';
import http = require('http');

var configServer = config.get('server'),
    port = configServer.port,
    initServer = function () {
        http.createServer(app).listen(port);
    },
    server = {up: initServer};

export { server as server };
//TODO: set error listener "server.on('error', %new Error%)"
