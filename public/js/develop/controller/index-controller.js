define([
    'angular'
], function(angular) {
    angular.module('app').controller('IndexController', IndexController);

    IndexController.$inject = ['$scope'];
    function IndexController($scope) {
        $scope.hello = 'Hello world'
    }
});