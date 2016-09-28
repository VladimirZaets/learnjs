define([
    'angular'
], (angular) => {
    let moduleName = 'app',
        module = angular.module(moduleName, ['pascalprecht.translate']);

    module.config([
        '$translateProvider',
        ($translateProvider) => {
            $translateProvider.useStaticFilesLoader({
                prefix: '/js/develop/loc-',
                suffix: '.json'
            });

            console.log($translateProvider)

            $translateProvider.preferredLanguage('en');
        }
    ]);
});