angular
	.module('bewijzenmap.config', ['bewijzenmap'])
	.config(configApp);

	configApp.$inject = ['$stateProvider', '$urlRouterProvider'];

function configApp($stateProvider, $urlRouterProvider) {
	$stateProvider

	/* abstract state for whole application */
		.state('app', {
			name: 'app',
			abstract: true,
			url: ''
	  })

		.state('app.welcome', {
			name: 'welcome',
			url: '/welcome',
			views: {
				'content@': {
					templateUrl: 	'app/welcome/welcome.view.html',
	  			controller: 	'WelcomeController',
	  			controllerAs: 'welcomeView'
				}
			}
		});

		$urlRouterProvider.otherwise('/welcome');

  console.debug('Configuration completed');
}