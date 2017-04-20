(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false,
            });

        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            })

            .state('contact', {
              url: '/contact',
              templateUrl: '/templates/contact.html'
            })

            .state('resume', {
              url: '/resume',
              templateUrl: '/templates/resume.html'
            });
    }

    angular
        .module('portfolio', ['ui.router'])
        .config(config);
})();
