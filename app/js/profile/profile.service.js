(function () {
    'use strict';

    angular.module('app')
        .service('profileService', profileService);

    profileService.$inject = ['$state', '$q', '$http'];

    function profileService($state, $q, $http) {

        this.getAllProjects = function () {
            return $http.get('data/projects.json')
                .then(function (response) {
                    return response.data;
                })
                .catch(function (response) {
                    return $q.reject(response);
                })
        }

    }

})();
