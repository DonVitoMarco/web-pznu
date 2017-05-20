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
                    .state('pages.pricing', {
                        url: '/pricing',
                        templateUrl: 'views/content.html'
                    })
                    .state('pages.contact', {
                        url: '/contact',
                        templateUrl: 'views/content.html'
                    })
                    .state('pages.sign-in', {
                        url: '/sign-in',
                        templateUrl: 'views/content.html'
                    })

            }]
        );

})();
