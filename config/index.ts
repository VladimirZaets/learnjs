const nconf = require('nconf');

import path = require('path');

nconf.argv()
nconf.env()
    .file({
        file: path.join(__dirname, 'config.json')
    });
    
export { nconf as config }

