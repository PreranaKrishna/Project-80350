(function(){
  'use strict';

angular.module('directives',[])
.directive('sideNav',sideNav)
.directive('header',header);

function sideNav(){
	return {
		restrict: 'E',
		templateUrl : 'templates/side-nav.html',
		controller : function($scope){
			$scope.menus = [
			    {
			      link : 'dashboard',
			      title: 'Dashboard',
			      icon: 'dashboard'
			    },
			    // {
			    //   link : 'group',
			    //   title: 'Friends',
			    //   icon: 'group'
			    // },
			    {
			      link : 'message',
			      title: 'Messages',
			      icon: 'message'
			    },
			    {
			      link : 'profile',
			      title: 'Profile',
			      icon: 'person'
			    },
			    {
			      link : 'my-order',
			      title: 'My Order',
			      icon: 'order'
			    },
			    {
			      link : 'rate',
			      title: 'Rate',
			      icon: 'star'
			    },
			    {
			      link : 'place-order',
			      title: 'Place Order',
			      icon: 'place-order'
			    },
			    {
			      link : 'refer-friend',
			      title: 'Refer a Friend',
			      icon: 'group'
			}];
		},
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}

header.$inject = ['$mdSidenav', '$mdBottomSheet','$q'];
function header($mdSidenav,$mdBottomSheet,$q){
	return{
		restrict : 'E',
		templateUrl : 'templates/header.html',
		controller : function($scope){
			$scope.toggleList = function(){
			  var pending = $mdBottomSheet.hide() || $q.when(true);
		      pending.then(function(){
		        $mdSidenav('left').toggle();
		      });
			}
		},
		link: function(scope,elem,attrs){

		}
	}
}


})();