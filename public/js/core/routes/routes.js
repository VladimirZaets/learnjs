define([
    'core/app',
    'core/routes/routes-config',
    'core/routes/dependency-loader'
], function(app, config, dependencyLoader){
    'use strict';

    return function(
        $routeProvider,
        $locationProvider,
        $controllerProvider,
        $compileProvider,
        $filterProvider,
        $provide
    ) {
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;

        if (config.routes !== undefined) {
            angular.forEach(config.routes, function(route, path) {
                $routeProvider.when(
                    path,
                    {
                        templateUrl:route.templateUrl,
                        resolve: dependencyLoader(route.dependencies)
                    });
            });
        }

        if(config.defaultRoutePaths !== undefined) {
            $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
        }
    }
});