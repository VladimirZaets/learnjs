define([
    'angular',
    'angular-route',
    'angular-ui-route',
    'js/module',
    'js/core/service/module-loader',
    'js/core/decorator/angular-module',
], (angular, angularRouter, angularUiRouter, appModule, moduleLoader) => {
    moduleLoader.then(() => angular.bootstrap(document, ['app']));
});