define([
    'angular',
    'angular-route',
    'angular-ui-route',
    'angular-translate',
    'angular-translate-loader-static-files',
    'js/module',
    'js/core/service/module-loader',
    'js/core/decorator/angular-module',
], (angular, angularRouter, angularUiRouter, angularTranslate, angularTranslateFileLoader, appModule, moduleLoader) => {
    moduleLoader.then(() => angular.bootstrap(document, ['app']));
});