/**
 * Created by Ali Imran on Jan/16/16.
 */

'use strict';

var passport = require('passport');
// var FIFA = require('../../fifa').FIFA;



module.exports = function(app){


	  console.log("Loading film.server.routes.js");


	  var isLoggedIn = function(req, res, next) {
	    if (req.isAuthenticated()) {
	      next();
	    } else {
	      res.send({
	        msg: 'Please login to access this information'
	      }, 400);
	    }
	  };

      app.get('/api/film', function(req, res) {
      	console.log("got here api/film...");
        // res.send(FIFA.TEAMS_LIST);
      });


      app.post('/api/addfilm', function(req, res, next) {

        return res.send(req.body);

      });

}
