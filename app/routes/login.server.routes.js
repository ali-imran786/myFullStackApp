/**
 * Created by Ali Imran on Jan/16/16.
 */

'use strict';

var passport = require('passport');
// var FIFA = require('../../fifa').FIFA;



module.exports = function(app){


	  console.log("Loading login.server.routes.js");


	  var isLoggedIn = function(req, res, next) {
	    if (req.isAuthenticated()) {
	      next();
	    } else {
	      res.send({
	        msg: 'Please login to access this information'
	      }, 400);
	    }
	  };

      app.get('/api/team', function(req, res) {
      	console.log("got here api team...");
        res.send(FIFA.TEAMS_LIST);
      });


      app.post('/api/login', function(req, res, next) {

        passport.authenticate('local', function(err, user) {
          if (err) {return next(err); }
          if (!user) { return res.send({loginStatus: false, msg: 'Unable to login'}, 400); }
          req.logIn(user, function(err) {
            if (err) { return res.send({msg: 'Error logging in', err: err}, 500); }
            return res.send({loginStatus: true, user: user});
          });
        })(req, res, next);

      });

      app.get('/api/session', isLoggedIn, function(req, res) {
        res.send({
          loginStatus: true,
          user: req.user
        });
      });

      app.get('/api/team/:code', isLoggedIn, function(req, res) {
        var code = req.params.code;
        res.send(FIFA.TEAM_DETAILS[code]);
      });

      app.get('/api/logout', function(req, res) {
        req.logout();
        res.redirect('/#/login');
      });




};
