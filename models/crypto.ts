const crypto = require('crypto');

class Crypto {
    static salt = "c@T";

    static getSHA1(input) {
        return crypto.createHash('sha1').update(input).digest('hex');
    }
}

export {Crypto as crypto}