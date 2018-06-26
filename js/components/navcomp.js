"use strict";

const navComp = {
  template:`
  <nav>
    <div class="navdiv">
    <img id="logo" src="../../images/Sundrenchedlogo.png" ng-click="$ctrl.toWL();">
    <h1>Cameron Johnson</h1>
    </div>
    <button ng-click="$ctrl.toContact();">Say Hi</button>
  </nav>
  `,
  controller: ["PortfolioService", "$location", function(PortfolioService, $location) {
    const vm = this;
    vm.search = () => {
      PortfolioService.toSearch();
    };
    vm.toWL = () => {
      PortfolioService.toWL();
    };
    vm.toContact = () => {
      PortfolioService.toContact();
      // $location.path("/contact-comp")
    };
  }]
};


angular
  .module("app")
  .component("navComp", navComp);