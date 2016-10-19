let module = angular.module('core', ['ui.router', 'ngRoute']);

angular.module('core').config([
    '$stateProvider',
    '$urlRouterProvider',
    '$controllerProvider',
    ($stateProvider, $urlRouterProvider, $controllerProvider) => {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './sdds-home.html'
            })
    }
]);

export {module as coreModule};