define([
    'angular'
], (angular) => {
    let module = angular.module,
        appModule = module('app');

    angular.module = (name, requires, inject, configFn) => {
        let instanceModule = module(name, requires, configFn);

        if (inject) {
            appModule.requires.push(name);
        }

        return instanceModule;
    };
});