define([], function() {
    'use strict';

    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: '/template/index.html',
                dependencies: [
                    '/js/controller/index-controller.js'
                ]
            }
        }
    };
});