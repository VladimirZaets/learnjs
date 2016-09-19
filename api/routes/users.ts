const setRoutes = function(router){
    router.route('/users')
        .get((req:any, res:any) => {
            res.send('users');
    });
}

export = setRoutes;