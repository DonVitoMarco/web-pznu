(function () {
    'use strict';

    angular.module('app')
        .controller('SignInCtrl', ['$scope', 'signInService', 'routeService', 'sessionService', SignInCtrl]);

    function SignInCtrl($scope, signInService, routeService, sessionService) {

        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.signIn = function () {
            var isLogged = signInService.signIn(vm.username, vm.password);
            if (isLogged) {
                sessionService.setParam('username', vm.username);
                routeService.goToState('panel.board');
            }
        }

    }

})();
