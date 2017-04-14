(function () {
  function LandingCtrl() {
    this.heroTitle = "David's Portfolio";
  }

  angular
    .module('davidPortfolio')
    .controller('LandingCtrl', LandingCtrl);
})();
