(function(){
  'use strict';
  angular.module('gujiriApp',[
    'ngMaterial',
    'ngRoute',
    'ngResource',
    'users'
    ])
  .config(config)
  .run(run);

  config.$inject = ['$mdThemingProvider','$mdIconProvider','$routeProvider','$httpProvider'];
  function config($mdThemingProvider,$mdIconProvider,$routeProvider,$httpProvider){
      $routeProvider
        .when('/',{
          title : 'Users',
          templateUrl : 'src/users/view/contactSheet.html',
          controller : 'UserController'
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

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
  }

  run.$inject = ['$rootScope','$location','$route'];
  function run($rootScope,$location,$route){
    $rootScope.$on('$routeChangeSuccess', function() {
          $rootScope.pageTitle = $route.current.title;
      });
  }
})();