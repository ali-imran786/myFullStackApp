/**
 * Created by Ali Imran on Jan/16/16.
 */
'use strict';


var USER = {username: 'admin', password: 'admin'};

var app = require('./config/express')();
var passport = require('./config/passport')(USER);

  var port = process.env.PORT || 7000;

app.listen(port);

console.log('Please go to http://localhost:' + port);
