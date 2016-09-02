import path = require('path');
const nconf = require('nconf');

nconf.argv()
nconf.env()
    .file({
        file: path.join(__dirname, 'config.json')
    });
export { nconf as config }

