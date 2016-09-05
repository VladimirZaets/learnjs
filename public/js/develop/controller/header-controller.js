define([
    'angular',
    'js/core/app'
], (angular) => {
    let HeaderController = ($scope) => {
        $scope.pussy = 'Main';
    };

    HeaderController.$inject = ['$scope'];
    angular.module('app').controller('HeaderController', HeaderController);
});