(function () {
    'use strict';

    angular.module('app')
        .service('sessionService', sessionService);

    sessionService.$inject = ['$state'];

    function sessionService($state) {

        this.getParam = function (paramName) {
            return localStorage.getItem(paramName);
        };

        this.setParam = function (paramName, value) {
            localStorage.setItem(paramName, value);
        };

    }

})();
