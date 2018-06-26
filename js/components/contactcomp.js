"use strict";

const contactComp = {
  template:`
  <nav>
    <img id="logo" src="images/Sundrenchedlogo.png" ng-click="$ctrl.toLanding();">
    <button ng-click="$ctrl.toLanding();">X</button>
  </nav>
  <div class="contdiv">
    <h3>Please reach out with any thoughts, ideas, or questions you may have!</h3>
    <form class=contactform>
      <div class="contactdiv"><img class="contactimg" src="images/phone.png" alt="">(313)-443-0476</div>
      <div class="contactdiv"><img class="contactimg" src="images/email.png" alt="">johnson.cameron.m@gmail.com</div>
      <div class="contactdiv"><img class="contactimg" src="images/github.png" alt="">Find me on Github</div>
      <div class="contactdiv"><img class="contactimg" src="images/linkedin.png" alt="">Find me on LinkedIn</div>
    </form>
  </div>
  `,
  controller: ["$location", function($location) {
    const vm = this;
    let contact = vm.newContact;
    vm.toLanding = () => {
      $location.path("/landing");
    };
    vm.sendInfo = () => {
      console.log( vm.newContact);
     
    };
  }]
};


angular
  .module("app")
  .component("contactComp", contactComp);