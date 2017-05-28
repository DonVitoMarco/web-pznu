(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {

                $locationProvider
                    .hashPrefix('');

                $urlRouterProvider
                    .when('', '/home')
                    .when('/', '/home')
                    .otherwise('/404');

                $stateProvider
                    .state('home', {
                        url: 'pages/home',
                        templateUrl: 'views/content.html'
                    });

                // pages for public access with navigation header and footer
                $stateProvider
                    .state('pages', {
                        abstract: true
                    })
                    .state('pages.home', {
                        url: '/home',
                        templateUrl: 'views/content.html'
                    })
                    .state('pages.what-is', {
                        url: '/what-is',
                        templateUrl: 'views/content.html'
                    })
                    .state('pages.contact', {
                        url: '/contact',
                        templateUrl: 'views/content.html'
                    })
                    .state('pages.sign-in', {
                        url: '/sign-in',
                        templateUrl: 'views/content.html'
                    });

                // pages for user access only
                $stateProvider
                    .state('panel', {
                        abstract: true
                    })
                    .state('panel.panel', {
                        url: '/panel',
                        templateUrl: 'views/panel/panel.html'
                    })
                    .state('panel.board', {
                        url: '/board',
                        templateUrl: 'views/panel/main.html'
                    })
                    .state('panel.details', {
                        url: '/details',
                        templateUrl: 'views/panel/main.html'
                    })
                    .state('panel.add', {
                        url: '/add',
                        templateUrl: 'views/panel/main.html'
                    })
                    .state('panel.analytics', {
                        url: '/analytics',
                        templateUrl: 'views/panel/main.html'
                    })
                    .state('panel.settings', {
                        url: '/settings',
                        templateUrl: 'views/panel/main.html'
                    })

            }]
        );

})();
