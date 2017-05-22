(function () {
    'use strict';

    angular.module('app')
        .service('routeService', routeService);

    routeService.$inject = ['$state'];

    function routeService($state) {

        var me = this;

        this.currentView = currentView;
        this.goToState = goToState;
        this.landingContents = landingContents;
        this.userContents = userContents;

        function currentView() {
            var view = $state.current.name;
            if(view.indexOf('/') === 0) {
                view = view.substr(1);
            }
            return view;
        }

        function goToState(state) {
            $state.go(state);
        }

        function isLandingPage() {
            var view = currentView();
            return ['home', 'pages.what-is', 'pages.contact', 'pages.sign-in'].indexOf(view) >= 0;
        }

        function landingContents() {
            var view = currentView();
            if(!isLandingPage()) {

            }
            return 'views/' + view.replace('.', '/') + '.html';
        }

        function isUserPage() {
            var view = currentView();
            return ['panel.board', 'panel.main']
        }

        function userContents() {
            var view = currentView();
            if(!isUserPage()) {

            }
            return 'views/' + view.replace('.', '/') + '.html';
        }

    }

})();