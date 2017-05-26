(function () {
    'use strict';

    angular.module('app')
        .controller('AddController', ['$scope', '$q', 'sessionService', 'routeService', 'profileService', AddCtrl]);

    function AddCtrl($scope, $q, sessionService, routeService, profileService) {

        var vm = this;
        vm.categories = ['TECH', 'DESG'];
        vm.category = vm.categories[0];

    }

})();