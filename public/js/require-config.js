require.config({
    baseUrl: '.',
    map: {
        '*': {
            js: 'js/develop'
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
    deps: [
        'js/core/bootstrap',
        'js/controller/header-controller',
        'js/controller/footer-controller'
    ]
});