(function () {
    'use strict';

    angular.module('app')
        .controller('AppCtrl', ['$scope', 'routeService', AppCtrl]);
    
    function AppCtrl($scope, routeService) {

        var vm = this;
        vm.routeService = routeService;

    }
    
})();