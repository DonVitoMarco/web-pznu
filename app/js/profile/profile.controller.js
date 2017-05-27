(function () {
    'use strict';

    angular.module('app')
        .controller('ProfileController', ['$scope', '$q', '$sce', 'profileService', 'sessionService', 'routeService', ProfileCtrl]);

    function ProfileCtrl($scope, $q, $sce, profileService, sessionService, routeService) {

        var vm = this;
        vm.username = '';
        vm.projects = [];
        vm.project = {};
        vm.filter = '';
        vm.search = '';
        vm.showMore = showMore;
        vm.filterProjects = filterProjects;
        vm.logout = logout;

        init();

        function init() {
            vm.username = sessionService.getParam('username');
            vm.filter = 'ALL';

            getAllProjects();
        }

        function getAllProjects() {
            profileService.getAllProjects()
                .then(function (data) {
                    return data;
                })
                .then(function (filter) {
                    vm.projects = [];
                    if (vm.filter !== 'ALL') {
                        for (var i = 0; i < filter.length; i++) {
                            if (filter[i].category === vm.filter) {
                                vm.projects.push(filter[i]);
                            }
                        }
                    } else {
                        vm.projects = filter;
                    }
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

        $scope.shareHtml = $sce.trustAsHtml(
            '<i class="fa fa-facebook-square fa-2x share" aria-hidden="true"></i> ' +
            '<i class="fa fa-google-plus-square fa-2x share" aria-hidden="true"></i> '
        );

        $scope.notificationsHtml = $sce.trustAsHtml(
            '<hr>' +
            '<div class="notification-info">' +
                '<i class="fa fa-commenting-o" aria-hidden="true"></i> Marek add new comments' +
            '</div>' +
            '<hr>' +
            '<div class="notification-info">' +
                '<i class="fa fa-plus-square-o" aria-hidden="true"></i> You add new project' +
            '</div>' +
            '<hr>'
        );

        function filterProjects(filter) {
            vm.filter = filter;
            getAllProjects();
        }

        function logout() {
            sessionService.removeParam('username');
            routeService.goToState('pages.home');
        }

    }

})();