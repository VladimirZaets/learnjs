class MenuController {
    constructor($scope, $http) {      
            this.$onInit = function () {
            $http({
                method: 'GET',
                url: '/configurations/menu.json'
            }).then(function successCallback(response) {
                this.options = response.data;
            }.bind(this));
        }.bind(this);
    }
}

MenuController.$inject = ['$scope', '$http'];

export {MenuController};