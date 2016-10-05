const passport = require('passport'),
import { localStrategy } from 'auth/strategies/local';

const initAuthentication = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    localStrategy();
}

export { initAuthentication } 