require.config({
    baseUrl: '.',
    map: {
        '*': {
            js: 'js/develop',
            jsConf: '/js/develop',
        }
    },
    paths: {
        'angular': 'node_modules/angular/angular',
        'text': 'node_modules/requirejs-plugins/lib/text',
        'json': 'node_modules/requirejs-plugins/src/json',
        'angular-route': 'node_modules/angular-route/angular-route.min',
        'angular-ui-route': 'node_modules/angular-ui-router/release/angular-ui-router.min',
        'bootstrap': 'js/core/bootstrap',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'angular-ui-route': {
            deps: ['angular', 'angular-route'],
            exports: 'angular-ui-route'
        }
    },
    deps: [
        'js/core/bootstrap',
        'js/core/controller/header-controller',
        'js/core/controller/footer-controller'
    ]
});