(function () {
    'use strict';

    angular.module('app')
        .controller('SignInCtrl', ['$scope', 'signInService', 'routeService', SignInCtrl]);

    function SignInCtrl($scope, signInService, routeService) {

        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.signIn = function () {
            var isLogged = signInService.signIn(vm.username, vm.password);
            if (isLogged) {
                routeService.goToState('panel.board');
            }
        }

    }

})();
