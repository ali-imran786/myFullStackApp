'use strict';

var app = angular.module('myApp');
app.directive('showHtml', [
    function() {
        return{
            template: "Hello from directive."
        };
    }]);

app.directive('showHtml2', ['myMovieService',
    function(myMovieService){
        return{
          // templateUrl: '../views/dirtv.html',
          // template: "hello there -> {{myctrl.name}}",
          link: function($scope, $element, $attrs) {
            $scope.sayHello = function(name) {
              return 'Hello ' + myMovieService.name;
            };
          }

        };
    }]);
