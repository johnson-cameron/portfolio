"use strict";

const landingComp = {
  template:`
  <section id="profilesect">
    <div id="profiledesc">
    <p>My name is Cameron Johnson, I graduated from DePauw University with a degree in Computer science. </p>
    <p>I have also taken a Front-end Development Bootcamp through Grand Circus in Detroit. </p>
    <p>I have always loved design so I began Sundrenched Designs to do some product design.</p>
    <p>I have since moved into the development world and want to take in all I can to become better at those two areas. </p>
    <p>I want to build elegant applications with a simple, straitforward user experience.</p>
    </div>
    <div>
      <img id="profileimg" src="../../images/IMG_3151.jpg" ng-click="$ctrl.toWL();">
    </div>
  </section>
  <portfolio-comp></portfolio-comp>
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
  .component("landingComp", landingComp);