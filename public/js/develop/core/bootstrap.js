define([
    'angular',
    'angular-route',
    'js/core/app',
    'js/core/routes/routes'
], (angular, angularRouter, app, routes) => {
    app.config(
        [
            '$routeProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            routes
        ]);

    angular.bootstrap(document, ['app']);

    return app;
});