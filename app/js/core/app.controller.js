(function () {
    'use strict';

    angular.module('app')
        .controller('AppCtrl', ['$scope', '$rootScope', 'routeService', 'sessionService', AppCtrl]);

    function AppCtrl($scope, $rootScope, routeService, sessionService) {

        var vm = this;
        vm.routeService = routeService;

        vm.isLogged = function () {
            return sessionService.getParam('username') !== null;
        }

    }

})();