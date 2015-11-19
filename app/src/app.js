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
          controller : 'registration'
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
            .accentPalette('pink');
          $mdThemingProvider.theme('input', 'default')
                .primaryPalette('grey')
  }

  run.$inject = ['$rootScope','$location','$route'];
  function run($rootScope,$location,$route){

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
  }
})();