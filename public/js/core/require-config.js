require.config({
    baseUrl: '.',
    map: {
        '*': {
            core: 'js/core'
        }
    },
    paths: {
        'angular': 'node_modules/angular/angular',
        'angular-route': 'node_modules/angular-route/angular-route.min',
        'bootstrap': 'js/core/bootstrap'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        }
    },
    deps: ['js/core/bootstrap']
});