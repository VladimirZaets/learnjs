define([
    'js/core/app',
    'js/core/routes/routes-config',
    'js/core/routes/dependency-loader',
    'angular'
], (app, config, dependencyLoader, angular) =>
    (
        $routeProvider,
        $locationProvider,
        $controllerProvider,
        $compileProvider,
        $filterProvider,
        $provide
    ) => {
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;

        if (config.routes !== undefined) {
            angular.forEach(config.routes, (route, path) => {
                route.dependencies = route.dependencies.concat(config.mainDependencies);
                $routeProvider.when(
                    path,
                    {
                        templateUrl:route.templateUrl,
                        resolve: dependencyLoader(route.dependencies)
                    });
            });
        }

        if (config.defaultRoutePaths !== undefined) {
            $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
        }
    }
);