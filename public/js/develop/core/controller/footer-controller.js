define([
    'angular',
    'js/module'
], (angular) => {
    let appModule = angular.module('app'),
        FooterController = ($scope) => {
            $scope.pussy = 'Main';
        };

    FooterController.$inject = ['$scope'];
    appModule.controller('FooterController', FooterController);
});