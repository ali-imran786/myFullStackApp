/**
 * Created by Ali Imran on Jan/16/16.
 */
'use strict';
var passport = require('passport');
var	LocalStrategy = require('passport-local').Strategy;

module.exports = function(USER) {
	passport.use(new LocalStrategy(function(username, password, done) {
	  if (USER.username === username) {
	    if (password === USER.password) {
	      done(null, USER);
	    } else {
	      done(null, false, {msg: 'Incorrect password'});
	    }
	  } else {
	    done(null, false, {msg: 'Could not find user with username ' + username});
	  }
	}));
};