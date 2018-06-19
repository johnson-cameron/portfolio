"use strict";

angular
  .module("app", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/landing-comp", {
        template: "<landing-comp></landing-comp>"
      })
      .when("/contact-comp", {
        template: "<contact-comp></contact-comp>"
      })
      .when("/portfolio-comp", {
        template: "<portfolio-comp></portfolio-comp>"
      })
      .otherwise({redirectTo: "/landing-comp"});
  });
 