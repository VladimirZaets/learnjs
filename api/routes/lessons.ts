const setRoutes = function (router) {
    /*router.use(function(req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });*/

    router.route('/lessons')
        .get();
    }

export = setRoutes;