define([
    'angular',
    'json!jsConf/module-config.json'
], (angular, json) => {

    let dep = ['ng'],
        $q = angular.injector(dep).get('$q'),
        promises = [],
        routeLoader = (url) => {
            let deffered = $q.defer();

            require([url], () => deffered.resolve());

            return deffered.promise;
        };

    for (let module in json) {
        promises.push(routeLoader(json[module] + '/module'));
    }

    return $q.all(promises);
});
