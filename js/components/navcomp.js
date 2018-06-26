"use strict";

const navComp = {
  template:`
  <nav>
    <div class="navdiv">
    <img id="logo" src="./images/sundrenchedlogo.png">
    <h1>Cameron Johnson</h1>
    </div>
    <button ng-click="$ctrl.toContact();">Say Hi</button>
  </nav>
  `,
  controller: ["PortfolioService", "$location", function(PortfolioService, $location) {
    const vm = this;
    vm.toContact = () => {
      PortfolioService.toContact();
      $location.path("/contact-comp")
    };
  }]
};


angular
  .module("app")
  .component("navComp", navComp);