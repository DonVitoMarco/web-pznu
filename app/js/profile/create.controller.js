(function () {
    'use strict';

    angular.module('app')
        .controller('AddController', ['$scope', '$timeout', '$q', 'sessionService', 'profileService', AddCtrl]);

    function AddCtrl($scope, $timeout, $q, sessionService, profileService) {

        var vm = this;
        vm.categories = ['TECH', 'DESG'];
        vm.category = vm.categories[0];

        vm.title = '';
        vm.shortdesc = '';
        vm.longdesc = '';

        vm.message = '';
        vm.isVisibleSucces = false;

        vm.create = create;

        function create() {
            var username = sessionService.getParam('username');
            var request = {
                name: vm.title,
                category: vm.category,
                author: username,
                shortDesc: vm.shortdesc,
                longDesc: vm.longdesc
            };
            profileService.addProject(request)
                .then(function () {
                    vm.title = '';
                    vm.shortdesc = '';
                    vm.longdesc = '';

                    vm.message = 'PROJECT ADDED SUCCESSFULLY';
                    vm.isVisibleSucces = true;
                    $timeout(function () {
                        vm.isVisibleSucces = false;
                    }, 2000);

                })
                .catch(function (response) {
                    return $q.reject(response);
                })
        }

    }

})();