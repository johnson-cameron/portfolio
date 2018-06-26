"use strict";

const portfolioComp = {
  template:`
  <h1>My Recent Work</h1>

  <section class="portfoliosect">
    <div class="portdiv">
      <h2>PokeSquad</h2>
      <img class="projectimg" src="../../images/pokesquad.png" alt="" ng-click="$ctrl.toPoke();">
      <p class="portp">A fun way to help decide what pokemon you should start your journy with by taking a compatability quiz.</p>
    </div>
    <div class="portdiv">
      <h2>Divvy</h2>
      <img class="projectimg" src="../../images/divvy.png" alt="" ng-click="$ctrl.toDivvy();">
      <p class="portp">A budgeting application to keep track of weekly budget and spending habits.</p>
    </div>
    <div class="portdiv">
      <h2>Cool Flix</h2>
      <img class="projectimg" src="../../images/coolflix.png" alt="" ng-click="$ctrl.toMovie();">
      <p class="portp">A movie searching platform to find movies by genre, rating, and title. Gives extra information on movies.</p>
    </div>
  </section>
  `,
  controller: ["$window", function($window) {
    const vm = this;
    vm.toPoke = () => {
      $window.open('https://johnson-cameron.github.io/pokesquad/');
    };
    vm.toDivvy = () => {
      $window.open('https://johnson-cameron.github.io/Divvy/');
    };
    vm.toMovie = () => {
      $window.open('https://johnson-cameron.github.io/moviedb/');
    };
  }]
};


angular
  .module("app")
  .component("portfolioComp", portfolioComp);