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
        };
        
        this.getProjectByName = function (name) {
            return $http.get('data/projects.json')
                .then(function (response) {
                    var data = response.data;
                    for(var i = 0; i < data.length; i++) {
                        if (data[i].name === name) {
                            return data[i];
                        }
                    }
                    return null;
                })
                .catch(function (response) {
                    return $q.reject(response);
                })
        };

        this.addProject = function (request) {
            return $http.post('http://localhost:8080/pznu-rest/startup/project', request)
                .then(function (response) {
                    console.log(response);
                    return {};
                })
                .catch(function (response) {
                    return $q.reject(response);
                })
        }

    }

})();
