(function(){
	'use strict';
	angular.module('authentication')
	.controller('registration',registration);

	registration.$inject = ['$scope'];
	function registration($scope){
		$scope.test = function(){
			alert("test");
		}
	}

})();