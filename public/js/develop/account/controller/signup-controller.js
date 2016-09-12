define([
    'angular',
], (angular) => {
    let SignupController = ($scope) => {
        $scope.pussy = 'Pussy';
    };

    SignupController.$inject = ['$scope'];
    angular.module('account').controller('SignupController', SignupController);

});