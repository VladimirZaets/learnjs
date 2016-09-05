define([], () => (
    {
        defaultRoutePath: '/',
        mainDependencies: [],
        routes: {
            '/': {
                    templateUrl: '/template/index.html',
                    dependencies: [
                        'js/controller/index-controller.js'
                    ]
                },
            '/register': {
                    templateUrl: '/template/register.html',
                    dependencies: [
                        'js/controller/register-controller.js'
                    ]
                },
            '/login': {
                templateUrl: '/template/login.html',
                dependencies: [
                    'js/controller/login-controller.js'
                ]
            }
        }
    })
);
