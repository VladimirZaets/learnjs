define([
    'angular',
    'angular-route',
    'core/app',
    'core/routes/routes'
], function(angular, angularRouter, app, routes) {
    'use strict';

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