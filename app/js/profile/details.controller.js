(function () {
    'use strict';

    angular.module('app')
        .controller('DetailsController', ['$scope', '$q', 'sessionService', 'routeService', 'profileService', DetailsCtrl]);

    function DetailsCtrl($scope, $q, sessionService, routeService, profileService) {

        var vm = this;
        vm.project = {};
        vm.newComment = '';
        vm.create = create;

        init();

        function init() {
            var name = sessionService.getParam('project');
            getProjectByName(name);
        }

        function getProjectByName(name) {
            profileService.getProjectByName(name)
                .then(function (response) {
                    vm.project = response;
                })
                .catch(function (response) {
                    return $q.reject(response);
                })
        }

        function create() {
            var username = sessionService.getParam('username');
            var request = {
                user: username,
                userComment: vm.newComment,
                projectName: vm.project.name
            };

            profileService.addComment(request)
                .then(function (response) {
                    var name = sessionService.getParam('project');
                    getProjectByName(name);
                    return {};
                })
                .catch(function (response) {
                    return $q.reject(response);
                })
        }

    }

})();