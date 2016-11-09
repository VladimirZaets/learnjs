class MenuController {
    constructor($scope, $http) {      
            this.$onInit = function () {
            $http({
                method: 'GET',
                url: '/configurations/menu.json'
            }).then(function successCallback(response) {
                this.options = response.data;
            }.bind(this));
        /*this.options = [
            {"caption": "home", "state": "home"},
            {"caption": "account", "state": "account", options: [
                {"caption": "settings", "state": "account-settings"},
                {"caption": "statistics", "state": "account-statistics"}
            ]}
        ];*/
        }.bind(this);
    }
}

MenuController.$inject = ['$scope', '$http'];

export {MenuController};