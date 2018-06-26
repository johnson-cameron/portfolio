"use strict";

const navComp = {
  template:`
  <nav>
    <div class="navdiv">
      <img id="logo" src="images/sundrenchedlogo.png">
      <h2 class="name">Cameron Johnson</h2>
    </div>
    <button ng-click="$ctrl.toContact();">Say Hi</button>
  </nav>
  `,
  controller: ["$location", function($location) {
    const vm = this;
    vm.toContact = () => {
      $location.path("/contact")
    };
  }]
};


angular
  .module("app")
  .component("navComp", navComp);