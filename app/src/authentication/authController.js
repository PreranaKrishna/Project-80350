(function(){
	'use strict';
	angular.module('authentication')
	.controller('regController',regController)
	.controller('menuController',menuController);


	regController.$inject = ['$scope'];
	function regController($scope){
		$scope.test = function(){
			alert("test");
		}
	}

	function menuController(){
		var self = this;
		self.rates = [
			{
				item : 'Plastic items',
				price : '25.0',
				description : 'Bottles, containers'
			},
			{
				item : 'Glass items',
				price : '25.0',
				description : 'Bottles, containers'
			},
			{
				item : 'Electronic applainces',
				price : '25.0',
				description : 'Old refridgerators, microwave'
			},
			{
				item : 'Paper',
				price : '25.0',
				description : 'Newspapers'
			},
			{
				item : 'Books',
				price : '25.0',
				description : 'Textbooks, old books'
			},
			{
				item : 'Wooden items',
				price : '25.0',
				description : 'Furnitures, Plywood'
			},
			{
				item : 'Metal items',
				price : '25.0',
				description : 'Copper wires, Steel utensils, Old pipes'
			}
		]
	}

})();