import { server } from 'bin/server';
import { db } from 'setup/database';

db.sync().then(function () {
    server.up();
});