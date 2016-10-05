const passport = require('passport');

let User,
    setRoutes = function (router) {
    router.route('/signup')
        .post((req:any, res:any) => {
            User = require('models/user');
            new User(req.body).create().then(
                function (createdUser) {
                    req.login(createdUser.dataValues, function () {
                        res.send('signup ok');
                    //res.redirect('http://qq.qq');
                    });
                }
            );
        });

    router.route('/login')
        .post(passport.authenticate('local', {
                failureRedirect: '/'
            }), function (req:any, res:any) {
                res.send('login ok');
            }
        );

    router.route('/logout')
        .get(function (req:any, res:any) {
            req.logout();
            res.send('logout ok');
        });

    router.route('/profile')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get();
    }

export = setRoutes;