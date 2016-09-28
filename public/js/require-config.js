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
        'angular-translate': 'node_modules/angular-translate/dist/angular-translate',
        'angular-translate-loader-static-files': 'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files',
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
        },
        'angular-translate': {
            deps: ['angular'],
            exports: 'angular-translate'
        },
        'angular-translate-loader-static-files': {
            deps: ['angular-translate'],
            exports: 'angular-translate-loader-static-files'
        }
    },
    deps: [
        'js/core/bootstrap',
        'js/core/controller/header-controller',
        'js/core/controller/footer-controller'
    ]
});