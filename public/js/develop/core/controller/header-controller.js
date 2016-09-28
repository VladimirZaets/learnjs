define([
    'angular',
    'js/module'
], (angular) => {
    let appModule = angular.module('app'),
        HeaderController = ($scope) => {
            $scope.pussy = 'Main';
        };

    HeaderController.$inject = ['$scope'];
    appModule.controller('HeaderController', HeaderController);
});