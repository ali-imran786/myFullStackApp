'use strict';

angular.module('myApp')
  .controller('myAppCtrl', [
    function() {
      var self = this;

      self.isLoggedIn = false;

      self.name = "Jiminy Crocket";

     }])
     .controller('movieController', ['$http', 'myMovieService',
       function($http, myMovieService) {
         var self = this;

        //  self.movie = {};

         self.submit = function(){
            console.log (self.movie);
            $http.post('/api/addmovie', self.movie)
            .then(function(response){

            });
          };

          self.getMovieList = function(start, pgSize){
            return MOVIE_List.splice(start, pgSize);//slice

          };

          self.MOVIE_List = myMovieService.getMovieList();

          // self.test = myMovieService.testObject;
          // self.test2 = myMovieService.testObject2;

          

        }

       ]);
