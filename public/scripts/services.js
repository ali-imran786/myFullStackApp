angular.module('myApp')
  .factory('myFilmService', ['$http',
    function($http) {
      return {
        getTeams: function() {
          return $http.get('/api/gpstest1');
        },

        getFilmList: function() {

          return [
                    {"Id" : 1, "film_name" : "The Martian"},
                    {"Id" : 2, "film_name" : "Prometheus"},
                    {"Id" : 3, "film_name" : "Star Wars - The Force Awakens"},
                    {"Id" : 4, "film_name" : "Star Trek Into Darkness"},
                    {"Id" : 5, "film_name" : "Predator"},
                    {"Id" : 6, "film_name" : "Predators"},
                    {"Id" : 7, "film_name" : "Interstellar"}
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
