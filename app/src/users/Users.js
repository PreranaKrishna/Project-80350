(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('users', [])
  .config(config);

config.$inject = ['$routeProvider'];
function config($routeProvider){
	$routeProvider
		.when('/', {
			title: '',
			templateUrl: '',
			controller: ''
		});
	}
})();
