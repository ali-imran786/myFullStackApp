//Written by Ali Imran.
angular.module('myApp').config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'views/movies.html',
      // controller: 'TeamListCtrl as teamListCtrl'
    })

    .when('/live_gps_updates', {
      templateUrl: 'views/live_gps_updates.html'
    })

    .when('/login', {
      template: 'views/login.html'
    })/*
    .when('/team/:code', {
      templateUrl: 'views/team_details.html',
      controller:'TeamDetailsCtrl as teamDetailsCtrl',
      resolve: {
        auth: ['$q', '$location', 'UserService',
          function($q, $location, UserService) {
             return UserService.session().then(
               function(success) {},
               function(err) {
                  $location.path('/login');
                  $location.replace();
                  return $q.reject(err);
             });
        }]
      }
    })*/;
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }]);
