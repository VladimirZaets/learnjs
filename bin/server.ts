import { app } from 'index';
import { config } from 'config/index';
import http = require('http');

var configServer = config.get('server'),
port = configServer.port;

http.createServer(app).listen(port);
//TODO: set error listener "server.on('error', %new Error%)"
