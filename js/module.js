"use strict";

angular
  .module("app", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/landing", {
        template: "<landing-comp></landing-comp>"
      })
      .when("/contact-comp", {
        template: "<contact-comp></contact-comp>"
      })
      .otherwise({redirectTo: "/landing"});
  });
 