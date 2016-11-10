const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const localStrategy = function () {
    passport.use('local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, function (username, password, done)  {
        const User = require('models/user');
        
        new User({
            username: username,
            password: password
        }).login().then(function(currentUser) {
            if (currentUser && currentUser[0]) {
                done(null, currentUser[0].dataValues);
            } else {
                done(null, false);
            }
        });
    }));
};

export { localStrategy }