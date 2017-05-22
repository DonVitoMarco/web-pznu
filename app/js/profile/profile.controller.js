(function () {
    'use strict';

    angular.module('app')
        .controller('ProfileController', ['$scope', 'profileService', 'sessionService', ProfileCtrl]);

    function ProfileCtrl($scope, profileService, sessionService) {

        var vm = this;
        vm.username = '';
        vm.projects = [];

        init();

        function init() {
            // vm.username = sessionService.getUser().username;
            vm.username = 'marek';
            console.log(vm.username);

            getAllProjects();
        }

        function getAllProjects() {
            profileService.getAllProjects()
                .then(function (data) {
                    vm.projects = data;
                    return {};
                })
                .catch(function (data) {
                    return $q.reject({});
                })
        }


    }

})();