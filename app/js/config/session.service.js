(function () {
    'use strict';

    angular.module('app')
        .service('sessionService', sessionService);

    sessionService.$inject = ['$state'];

    function sessionService($state) {

        var vm = this;

        var logged = false;
        var user = null;

        this.setUser = function (userToSave) {
            user = userToSave;
            logged = true;
        };

        this.getUser = function () {
            return user;
        };

        this.isLogged = function () {
            return logged;
        };

    }

})();
