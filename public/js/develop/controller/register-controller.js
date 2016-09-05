define([
    'angular',
], (angular) => {
    let RegisterController = ($scope) => {
        $scope.hello = 'Register';
    };

    RegisterController.$inject = ['$scope'];
    angular.module('app').controller('RegisterController', RegisterController);
});