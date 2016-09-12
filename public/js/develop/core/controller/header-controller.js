define([
    'angular',
    'js/module'
], (angular, appModule) => {
    let HeaderController = ($scope) => {
        $scope.pussy = 'Main';
    };

    HeaderController.$inject = ['$scope'];
    appModule.controller('HeaderController', HeaderController);
});