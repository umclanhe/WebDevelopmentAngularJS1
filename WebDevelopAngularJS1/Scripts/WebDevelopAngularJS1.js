var WebDevelopAngularJS1 = angular.module('WebDevelopAngularJS1', ['ui.router', 'ui.bootstrap']);

WebDevelopAngularJS1.controller('LandingPageController', LandingPageController);
WebDevelopAngularJS1.controller('LoginController', LoginController);
WebDevelopAngularJS1.controller('RegisterController', RegisterController);

WebDevelopAngularJS1.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
WebDevelopAngularJS1.factory('LoginFactory', LoginFactory);
WebDevelopAngularJS1.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $stateProvider
        .state('stateOne', {
            url: '/stateOne?donuts',
            views: {
                "containerOne": {
                    templateUrl: '/routesDemo/one'
                },
                "containerTwo": {
                    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                },

                "nestedView@stateOne": {
                    templateUrl: '/routesDemo/four'
                }
            }
        })
        .state('stateTwo', {
            url: '/stateTwo',
            views: {
                "containerOne": {
                    templateUrl: '/routesDemo/one'
                },
                "containerTwo": {
                    templateUrl: '/routesDemo/three'
                }
            }
        })
        .state('stateThree', {
            url: '/stateThree?donuts',
            views: {
                "containerOne": {
                    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                },
                "containerTwo": {
                    templateUrl: '/routesDemo/three'
                }
            }
        })
        .state('loginRegister', {
            url: '/loginRegister?returnUrl',
            views: {
                "containerOne": {
                    templateUrl: '/Account/Login',
                    controller: LoginController
                },
                "containerTwo": {
                    templateUrl: '/Account/Register',
                    controller: RegisterController
                }
            }
        });


/*    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: 'Account/Login',
            controller: LoginController
        })
       .when('/register', {
        templateUrl: '/Account/Register',
        controller: RegisterController
    });   */

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}

configFunction.$inject = ['$stateProvider','$httpProvider','$locationProvider'];

WebDevelopAngularJS1.config(configFunction);