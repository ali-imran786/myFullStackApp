'use strict';

angular.module('myApp')
  .controller('myAppCtrl', [
    function() {
      var self = this;

      self.isLoggedIn = false;

      self.name = "Jiminy Crocket";

     }])
     .controller('filmController', ['$http', 'myFilmService',
       function($http, myFilmService) {
         var self = this;

        //  self.film = {};

         self.submit = function(){
            console.log (self.film);
            $http.post('/api/addfilm', self.film)
            .then(function(response){

            });
          };

          self.getFilmList = function(start, pgSize){
            return FILM_List.splice(start, pgSize);//slice

          };

          /* Moved to Service
          var FILM_1 = {"Id" : "0", "film_name" : "Interstellar"};
          var FILM_2 = {"Id" : "1", "film_name" : "The Martian"};
          var FILM_3 = {"Id" : "2", "film_name" : "Prometheus"};
          var FILM_4 = {"Id" : "3", "film_name" : "Star Wars - The Force Awakens"};
          var FILM_5 = {"Id" : "4", "film_name" : "Star Trek Into Darkness"};

          var FILM_List = [FILM_1, FILM_2, FILM_3, FILM_4, FILM_5];
          self.FILM_List = FILM_List;
          */
          self.FILM_List = myFilmService.getFilmList();

          // self.test = myFilmService.testObject;
          // self.test2 = myFilmService.testObject2;

          self.blnAddNewFilm = false;




        }

       ]);
