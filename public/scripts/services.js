angular.module('myApp')
  .factory('myMovieService', ['$http',
    function($http) {
      return {
        getTeams: function() {
          return $http.get('/api/gpstest1');
        },

        getMovieList: function() {

          return [
                    {"Id" : 1, "movie_name" : "The Martian"},
                    {"Id" : 2, "movie_name" : "Prometheus"},
                    {"Id" : 3, "movie_name" : "Star Wars - The Force Awakens"},
                    {"Id" : 4, "movie_name" : "Star Trek Into Darkness"},
                    {"Id" : 5, "movie_name" : "Predator"},
                    {"Id" : 6, "movie_name" : "Predators"},
                    {"Id" : 7, "movie_name" : "Interstellar"}
                  ];
        },

        name: "name_in_service"

        // testObject: [{"name" : "Jim"}, {"name" : "Kirk"}],
        // testObject2: [{"name" : "William"}, {"name" : "Shatner"}]


        // getTeamDetails: function(code) {
          // return $http.get('/api/gpstest2/' + code);
        // }
      }
  }]);
