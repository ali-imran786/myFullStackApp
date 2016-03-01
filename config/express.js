/**
 * Created by Ali Imran on Jan/16/16.
 */
'use strict';

var express = require('express'),
  http = require('http'),
  passport = require('passport'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  // LocalStrategy = require('passport-local').Strategy,
  serverStatic = require('serve-static');


module.exports = function() {

    console.log("Loading express.js\n");

      var app = express();
      app.use(morgan());
      app.use(compress());
      app.use(bodyParser());

      app.use(methodOverride());
      app.use(cookieParser());

      app.use(session({
        secret : 'ali-imransFullStackSampleApp',
        cookie: {httpOnly: true, secure: false, maxAge: 86400000},
        store: new session.MemoryStore()
      }));


      // Set the application view engine and 'views' folder
      app.set('views', __dirname + '/app/views');
      app.set('view engine', 'ejs');


      app.use(passport.initialize());
      app.use(passport.session());


      // app.use('/', serverStatic(__dirname + '/app'));
      // app.use(express.static('../app'));



      //Load the routing files
      require('../app/routes/login.server.routes')(app); //#q1
      require('../app/routes/film.server.routes')(app); //#q1

      // app.use(express.static(__dirname + '/public'));
      app.use(express.static('public'));




      return app;
};
