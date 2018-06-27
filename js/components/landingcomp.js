"use strict";

const landingComp = {
  template:`
  <nav>
    <div class="navdiv">
      <img id="logo" src="images/sundrenchedlogo.png">
      <h2 class="name">Cameron Johnson</h2>
    </div>
    <button ng-click="$ctrl.toContact();">Say Hi</button>
  </nav>
  <section id="profilesect">
    <div id="profiledesc">
      <p>My name is Cameron Johnson, I graduated from DePauw University with a degree in Computer science. </p>
      <p>I have also taken a Front-end Development Bootcamp through Grand Circus in Detroit. </p>
      <p>I have always loved design so I began Sundrenched Designs to do some product design.</p>
      <p>I have since moved into the development world and want to take in all I can to become better at those two areas. </p>
      <p>I want to build elegant applications with a simple, straitforward user experience.</p>
    </div>
    <div id="imgdiv">
      <img id="profileimg" src="images/profileimg.jpg" ng-click="$ctrl.toWL();">
    </div>
  </section>
  <section class="infosect">
    <div class="infodiv" id="infoleft">
      <img src="" alt="">
      <h2>Designer</h2>
      <p>I value a simple, clean design with thoughtful inteactions.</p>
      <h4>Things I enjoy designing</h4>
      <p>UX, UI, Web, Mobile, Apps, Logos</p>
      <h4>Design Tools</h4>
      <ul>
        <li>Illustrator</li>
        <li>Balsamiq Mockups</li>
        <li>Pen & Paper</li>
      </ul>
    </div>
    <div class="infodiv" id="inforight"><img src="" alt="">
      <h2>Front-end Developer</h2>
      <p>I enjoy bringing ideas to life in the browser.</p>
      <h4>Languages I speak:</h4>
      <p>HTML5, CSS3, Sass, Angularjs, Jquery, JavaScript</p>
      <h4>Dev Tools</h4>
      <ul>
        <li>VS Code</li>
        <li>Github</li>
        <li>Terminal</li>
      </ul>
    </div>
  </section>
  <portfolio-comp></portfolio-comp>
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
    
    vm.toContact = () => {
      $location.path("/contact-comp");
      
    };
    vm.sendInfo = (contact) => {
      console.log(contact);
    };
    
  }]
}


angular
  .module("app")
  .component("landingComp", landingComp);