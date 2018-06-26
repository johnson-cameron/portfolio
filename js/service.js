"use strict";

function PortfolioService($http, $location) {
  const vm = this;

  return {
  };
}
PortfolioService.$inject = ["$http", "$location"];

angular
  .module("app")
  .factory("PortfolioService", PortfolioService);