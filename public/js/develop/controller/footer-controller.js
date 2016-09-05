define([
    'angular',
    'js/core/app'
], (angular) => {
    let FooterController = ($scope) => {
        $scope.pussy = 'Main';
    };

    FooterController.$inject = ['$scope'];
    angular.module('app').controller('FooterController', FooterController);
});