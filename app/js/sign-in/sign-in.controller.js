(function () {
    'use strict';

    angular.module('app')
        .controller('SignInCtrl', ['$scope', '$timeout', 'signInService', 'routeService', 'sessionService', SignInCtrl]);

    function SignInCtrl($scope, $timeout, signInService, routeService, sessionService) {

        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.message = '';
        vm.isVisibleError = false;

        vm.signIn = function () {
            var isLogged = signInService.signIn(vm.username, vm.password);
            if (isLogged) {
                sessionService.setParam('username', vm.username);
                routeService.goToState('panel.board');
            } else {
                vm.message = 'INVALID PASSWORD OR LOGIN';
                vm.isVisibleError = true;
                $timeout(function () {
                    vm.isVisibleError = false;
                }, 2000);
            }
        }

    }

})();
