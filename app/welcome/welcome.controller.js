angular
  .module('bewijzenmap.welcome', ['bewijzenmap'])
  .controller('WelcomeController', WelcomeController);

WelcomeController.$inject = [];

function WelcomeController() {
  welcomeView      = this;
  welcomeView.text = 'Hello World';

}