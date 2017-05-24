(function () {
    'use strict';

    angular.module('app')
        .controller('ProfileController', ['$scope', '$q', 'profileService', 'sessionService', 'routeService', ProfileCtrl]);

    function ProfileCtrl($scope, $q, profileService, sessionService, routeService) {

        var vm = this;
        vm.username = '';
        vm.projects = [];
        vm.project = {};
        vm.showMore = showMore;

        init();

        function init() {
            vm.username = sessionService.getParam('username');
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

        function showMore(name) {
            sessionService.setParam('project', name);
            routeService.goToState('panel.details');
        }

    }

})();