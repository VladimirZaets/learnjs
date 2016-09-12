define([
    'angular',
    'js/module',
    'js/core/service/router-wrapper',
    'js/account/router'
], (angular, appModule, router, routerConfig) => {
    let moduleName = 'account',
        module = angular.module(moduleName, ['app', 'core'], true);

    module.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$controllerProvider',
         ($stateProvider, $urlRouterProvider, $controllerProvider) => {
            router(moduleName, routerConfig)($stateProvider, $urlRouterProvider, $controllerProvider);
         }
    ]);
});
