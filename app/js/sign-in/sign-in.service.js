(function () {
    'use strict';

    angular.module('app')
        .service('signInService', signInService);

    signInService.$inject = ['$state', 'sessionService'];

    function signInService($state, sessionService) {

        this.signIn = function singIn(username, password) {
            for(var i = 0; i < mockUsers.length; i++) {
                if(mockUsers[i].username === username && mockUsers[i].password === password) {
                    sessionService.setUser(mockUsers[i]);
                }
            }
            return sessionService.isLogged();
        };

        var mockUsers = [
            {
                username: 'marek',
                password: 'marek'
            },
            {
                username: 'admin',
                password: 'admin'
            }
        ]

    }

})();
