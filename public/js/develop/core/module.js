define([
    'angular',
    'js/module',
    'js/core/service/router-wrapper',
    'js/core/router',
], (angular, appModule, router, routerConfig) => {
    let moduleName = 'core',
        module = angular.module(moduleName, ['ui.router', 'ngRoute'], true);

    module.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$controllerProvider',
        ($stateProvider, $urlRouterProvider, $controllerProvider) => {
            router(moduleName, routerConfig)($stateProvider, $urlRouterProvider, $controllerProvider);
        }
    ]);
});