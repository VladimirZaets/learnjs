const http = require('http');
import { app } from 'index';
import { config } from 'config/index';

const configServer = config.get('server');
const port = configServer.port;

http.createServer(app).listen(port);
//TODO: set error listener "server.on('error', %new Error%)"
