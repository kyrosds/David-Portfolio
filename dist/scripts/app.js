(function () {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
          enabled: true,
          requiredBase: false
      });

      $stateProvider
        .state('landing', {
          url: '/',
          controller: 'LandingCtrl as landing',
          templateUrl: '/templates/landing.html'
        });
  }

  angular
    .module('davidPortfolio', ['ui-router'])
    .config(config);
})();
