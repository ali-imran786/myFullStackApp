//var Cinema = require("./cinema_list").Cinema;

angular.module('myApp')
  .factory('myMovieService', ['$http', '$sce',
    function($http, $sce) {
      return {
        getTeams: function() {
          return $http.get('/api/gpstest1');
        },

        getMovieList: function() {

          function getTrustedURL(in_url){
            return ($sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyA5Lw5VNLbj1TMCxXBgM-EBEuGJM_6HpBo&q=" + in_url));
          }

          Cinema = [
            {
              "name" : "DHA Cinema" ,
              "gps"  : getTrustedURL("31.47566081585371,74.40432921051979")
            },
            {
              "name" : "Cine Star Imax" ,
              "gps"  : getTrustedURL("31.450609,74.310974")
            },
            {
              "name" : "Crown Cinema Hall" ,
              "gps"  : getTrustedURL("31.562953,74.345075")
            },
            {
              "name" : "Regal Cinema" ,
              "gps"  : getTrustedURL("31.560853,74.318973")
            },
            {
              "name" : "Plaza Cinema" ,
              "gps"  : getTrustedURL("31.558268,74.323245")
            },
            {
              "name" : "Bahria Town Cine Gold" ,
              "gps"  : getTrustedURL("31.388599,74.191254")
            },
            {
              "name" : "Gulistan Cinema" ,
              "gps"  : getTrustedURL("31.564314,74.331387")
            },
            {
              "name" : "Cine Star - Taj Cinema" ,
              "gps"  : getTrustedURL("31.563270,74.345027")
            }


        ];

          return [
                    {"Id" : 0, "movie_name" : "--- No Selection ---",
                      "cinema_name": Cinema[0].name, "cinema_gps" : Cinema[0].gps},
                    {"Id" : 1, "movie_name" : "The Martian",
                      "cinema_name": Cinema[1].name, "cinema_gps" : Cinema[1].gps},
                    {"Id" : 2, "movie_name" : "Prometheus",
                      "cinema_name": Cinema[2].name, "cinema_gps" : Cinema[2].gps},
                    {"Id" : 3, "movie_name" : "Star Wars - The Force Awakens",
                      "cinema_name": Cinema[3].name, "cinema_gps" : Cinema[3].gps},
                    {"Id" : 4, "movie_name" : "Star Trek Into Darkness",
                      "cinema_name": Cinema[4].name, "cinema_gps" : Cinema[4].gps},
                    {"Id" : 5, "movie_name" : "Predator", "cinema_name": Cinema[5].name, "cinema_gps" : Cinema[5].gps},
                    {"Id" : 6, "movie_name" : "Predators",
                      "cinema_name": Cinema[6].name, "cinema_gps" : Cinema[6].gps},
                    {"Id" : 7, "movie_name" : "Interstellar",
                      "cinema_name": Cinema[7].name, "cinema_gps" : Cinema[7].gps}
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
