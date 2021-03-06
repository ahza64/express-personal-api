// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/


// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

 app.get('/api/profile', function findProfile(req, res){
   db.Profile.find(function(err, profile){
     console.log(profile);
     res.json(profile);
   });
 });

 app.get('/api/currentCity', function findCityImIn(req, res){
   db.City.find(function(err, citytaco){
     res.json(citytaco);
   });
 });

 app.get('/api/quotes', function findQuote(req, res){
   db.Quote.find(function(err, quotetaco){
     res.json(quotetaco);
   });
 });

 app.post('/api/quotes', function postQuote(req, res){
   var newQuote = new db.Quote(req.body);
   newQuote.save(function(err, quote){
     if (err){
       return console.log("quote save error "+ err);
     }else{
       console.log(quote);
       res.json(quote);
     }
   });
 });

 //app.put('/api/quotes/:id', function putQuote());

 //app.delete('/api/quotes/:id', function putQuote());
 app.delete('/api/quotes/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('quotes delete', req.params);
  var quoteId = req.params.id;
  // find the index of the book we want to remove
  db.Quote.findOneAndRemove({ _id: quoteId }, function (err, deletedQuote) {
    res.json(deletedQuote);
  });
});

app.get('/api', function api_index(req, res) {
  // TODO: Document all api endpoints below
  res.json({
    document_endpoints: true,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/ahza64/express-personal-api/README.md",
    base_url: "http://pumpkin-tart-45951.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, 
      // {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"}, // CHANGE ME
      // {method: "GET", path: "/api/currentCity", description: "Where I live"},
      {method: "GET", path: "/api/quotes", description: "get all quotes"},
      {method: "POST", path: "/api/quotes", description: "add a quote"},
      //{method: "PUT", path: "/api/quotes/:id", description: "update quote info"},
      {method: "DELETE", path: "/api/quotes/:id", description: "delete a quote"}
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
