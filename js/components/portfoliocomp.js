"use strict";

const portfolioComp = {
  template:`
  <h1>Portfolio</h1>
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
  .component("portfolioComp", portfolioComp);