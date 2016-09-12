define([
    'angular',
    'js/module'
], (angular, appModule) => {
    let FooterController = ($scope) => {
        $scope.pussy = 'Main';
    };

    FooterController.$inject = ['$scope'];
    appModule.controller('FooterController', FooterController);
});