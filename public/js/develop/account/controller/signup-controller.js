define([
    'angular',
], (angular) => {
    let SignupController = ($scope, $translate, $rootScope) => {
        $scope.pussy = 'Pussy';
        $rootScope.$on('$translateChangeSuccess', function () {
            console.log(arguments);
        });
        $scope.changeLanguage = function(key) {
            console.log($translate)
            $translate.use(key)

        }
    };

    SignupController.$inject = ['$scope', '$translate', '$rootScope'];
    angular.module('account').controller('SignupController', SignupController);

});