(function(){
  'use strict';
  angular.module('gujiriApp',[
    'ngMaterial',
    'ngMdIcons',
    'directives',
    'ngRoute',
    'ngResource',
    'users',
    'authentication'
    ])
  .config(config)
  .run(run);

  config.$inject = ['$mdThemingProvider','$mdIconProvider','$routeProvider','$httpProvider'];
  function config($mdThemingProvider,$mdIconProvider,$routeProvider,$httpProvider){
      $routeProvider
        .when('/',{
          title : 'Register',
          templateUrl : 'src/authentication/view/register.html',
          controller : 'regController'
        })
        .when('/menu',{
          title : 'Menu',
          templateUrl : 'src/authentication/view/menu.html',
          controller : 'menuController',
          controllerAs : 'menu'
        })
        .otherwise({
          redirectTo : '/'
        });

      $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128)
        .icon("menu"       , "./assets/svg/menu.svg"        , 24)
        .icon("share"      , "./assets/svg/share.svg"       , 24)
        .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
        .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
        .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
        .icon("facebook"    , "./assets/svg/facebook.svg"     , 512)
        .icon("phone"      , "./assets/svg/phone.svg"       , 512);

         var customBlueMap =    $mdThemingProvider.extendPalette('light-green', {
          'contrastDefaultColor': 'light',
          'contrastDarkColors': ['50'],
          '50': 'ffffff'
        });

         $mdThemingProvider.definePalette('customBlue', customBlueMap);
          $mdThemingProvider.theme('default')
            .primaryPalette('customBlue', {
              'default': '500',
              'hue-1': '50'
            })
            .accentPalette('pink',{
              'default': '500',
              'hue-1': '500',
              'hue-2': '600'
            });
          $mdThemingProvider.theme('input', 'default')
                .primaryPalette('grey')
  }

  run.$inject = ['$rootScope','$location','$route','$mdBottomSheet','$log','$mdSidenav'];
  function run($rootScope,$location,$route,$mdBottomSheet,$log,$mdSidenav){

    $rootScope.menus = [
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
            icon: 'account_circle'
          },
          {
            link : 'my-order',
            title: 'My Orders',
            icon: 'shopping_cart'
          },
          {
            link : 'rate',
            title: 'Rate',
            icon: 'star'
          },
          {
            link : 'place-order',
            title: 'Place Order',
            icon: 'add_shopping_cart'
          },
          {
            link : 'refer-friend',
            title: 'Refer a Friend',
            icon: 'group'
      }];

      $rootScope.sideNav = function(pagetitle){
        switch(pagetitle) {
            case 'refer-friend':
                contactOption();
                break;
            case 'rate':
                 alert("rate");
                break;
            case 'place-order':
                $location.path('/menu');
                break;
            default:
                
        }
      }

      function contactOption(){
           $mdSidenav('left').close();
          // $scope.showContactOptions = function($event) {
            return $mdBottomSheet.show({
              parent: angular.element(document.getElementById('content')),
              templateUrl: './templates/contact-options.html',
              controller: [ '$mdBottomSheet', ContactPanelController],
              //controllerAs: "cp",
              bindToController : true,
              //targetEvent: $event
            }).then(function(clickedItem) {
              clickedItem && $log.debug( clickedItem.name + ' clicked!');
            });

            /**
             * Bottom Sheet controller for the Avatar Actions
             */
            function ContactPanelController( $mdBottomSheet ) {
              this.actions = [
                { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
                { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
                { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
                { name: 'facebook'     , icon: 'facebook'    , icon_url: 'assets/svg/facebook-box.svg'},
                { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
              ];
              this.submitContact = function(action) {
                $mdBottomSheet.hide(action);
              };
            }
        // }
    }
  }
})();