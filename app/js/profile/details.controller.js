(function () {
    'use strict';

    angular.module('app')
        .controller('DetailsController', ['$scope', '$q', 'sessionService', 'routeService', 'profileService', DetailsCtrl]);

    function DetailsCtrl($scope, $q, sessionService, routeService, profileService) {

        var vm = this;
        vm.project = {};

        init();

        function init() {
            var name = sessionService.getParam('project');
            profileService.getProjectByName(name)
                .then(function (response) {
                    vm.project = response;
                })
                .catch(function (response) {
                    return $q.reject(response);
                })
        }

    }

})();