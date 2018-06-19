"use strict";

const navComp = {
  template:`
  <nav>
  <img id="logo" src="../../images/Sundrenchedlogo.png" ng-click="$ctrl.toWL();">
  <button>Say Hi</button>
  </nav>
  `,
  controller: ["PortfolioService", function(PortfolioService) {
    const vm = this;
    vm.search = () => {
      PortfolioService.toSearch();
    };
    vm.toWL = () => {
      PortfolioService.toWL();
    };
  }]
}


angular
  .module("app")
  .component("navComp", navComp);