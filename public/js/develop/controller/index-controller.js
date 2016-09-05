define([
    'angular',
], (angular) => {
    let IndexController = ($scope) => {
        $scope.hello = 'Hello world'
    };

    IndexController.$inject = ['$scope'];
    angular.module('app').controller('IndexController', IndexController);
});