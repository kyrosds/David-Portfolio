(function () {
  function LandingCtrl() {
    this.portfolioTitle = "David's Portfolio";
  }

  angular
    .module('davidPortfolio')
    .controller('LandingCtrl', LandingCtrl);
})();
