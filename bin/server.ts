import { app } from '../index';
import { nconf as config } from '../config/index';
import http = require('http');

var configServer = config.get('server'),
    port = configServer.port,
    server;

server = http.createServer(app);
server.listen(port);

//TODO: set error listener "server.on('error', %new Error%)"
