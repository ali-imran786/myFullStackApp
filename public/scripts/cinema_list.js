'use strict';

/*
var DVD_1 = {"name" : "Interstellar"};
var DVD_2 = {"name" : "The Martian"};
var DVD_3 = {"name" : "Prometheus"};
var DVD_4 = {"name" : "Star Wars - The Force Awakens"};
var DVD_5 = {"name" : "Star Trek Into Darkness"};

var DVD_List = [DVD_1, DVD_2, DVD_3, DVD_4, DVD_5];
*/

// module.exports = DVD_List;

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

module.exports = Cinema;
