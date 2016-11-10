let module = angular.module('core', ['layout', 'auth', 'ui.router', 'ngRoute']);

angular.module('core').config([
    '$stateProvider',
    '$urlRouterProvider',
    '$controllerProvider',
    ($stateProvider, $urlRouterProvider, $controllerProvider) => {
        $urlRouterProvider.otherwise('/index/home');

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'templates/modules/core/index.html'
            })
            .state('index.home', {
                url: '/home',
                views: {
                    "Content": {
                        template: '<div>home sweet home</div>'
                    }
                }
            })
            .state('index.account-settings', {
                url: '/account-settings',
                views: {
                    "Content": {
                        templateUrl: 'templates/modules/account/account-settings.html'
                    }
                }
            })
            .state('index.account-statistics', {
                url: '/account-statistics',
                views: {
                    "Content": {
                        templateUrl: 'templates/modules/account/account-statistics.html'
                    }
                }
            })
            .state('index.signup', {
                url: '/signup',
                views: {
                    "Content": {
                        template: '<ljs-signup></ljs-signup>'
                    }
                }
            });
    }
]);

export {module as coreModule};