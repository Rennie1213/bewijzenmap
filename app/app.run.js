angular
	.module('bewijzenmap.run', [
		'bewijzenmap',
		'ui.router',
		'bewijzenmap.welcome'
	])
	.run(runApp);

function runApp() {
	console.debug('App started');
}