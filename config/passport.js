/**
 * Created by Ali Imran on Jan/16/16.
 */
'use strict';

var passport = require('passport');

module.exports = function (USER) {

	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(user, done) {
	  done(null, user);
	});

	//Load the configuration file for the local strategy
	require('./strategies/local')(USER);
};