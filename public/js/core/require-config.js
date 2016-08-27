require.config({
    baseUrl: 'js',
    map: {
        '*': {
            core: 'core'
        }
    },
    paths: {
        'angular': 'libs/angular/angular',
        'angular-route': 'libs/angular-route/angular-route.min',
        'bootstrap': 'core/bootstrap'
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
    deps: ['core/bootstrap']
});