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

        function currentView() {
            var view = $state.current.name;
            if(view.indexOf('/') === 0) {
                view = view.substr(1);
            }
            return view;
        }

        function goToState(state) {
            console.log("go to state : ", state);
            $state.go(state);
        }

        function isLandingPage() {
            var view = currentView();
            return ['home', 'pages.what-is', 'pages.pricing', 'pages.contact'].indexOf(view) >= 0;
        }

        function landingContents() {
            var view = currentView();
            if(!isLandingPage()) {

            }
            // return 'views/pages/home.html';
            return 'views/' + view.replace('.', '/') + '.html';
        }

    }

})();