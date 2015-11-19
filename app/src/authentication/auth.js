(function(){
	'use strict'
	angular.module('authentication', [])
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