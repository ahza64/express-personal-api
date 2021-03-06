var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

module.exports.Campsite = require("./campsite.js");
module.exports.City = require("./currentCity.js");
module.exports.Profile = require("./profile.js");
module.exports.Quote = require("./quotes.js");
