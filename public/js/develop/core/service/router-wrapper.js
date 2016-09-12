define([
    'angular',
    'js/core/service/loader'
], (angular, loader) => (module, router) => ($stateProvider, $urlRouterProvider, $controllerProvider) => {
        angular.module(module).controller = $controllerProvider.register;
        $urlRouterProvider.otherwise('/');

        for (let route in router) {
            let config = router[route],
                template = {
                    url: config.url || null,
                    resolve: loader(config.controllerUrl) || null,
                    controller: config.controller || null
                };

            config.hasOwnProperty('template') ?
                template.template = config.template :
                template.templateUrl = config.templateUrl || null;

            $stateProvider.state(route, template);
        }
    }
);