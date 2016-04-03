// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_campsite = {description: "Sharp rocks. Middle of nowhere."};

db.Campsite.create(new_campsite, function(err, campsite){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new campsite", campsite._id);
  process.exit(); // we're all done! Exit the program.
});



/////////////////////building profile

var new_profile = [
  {
  name: "Justin Pettit",
  github_link: "https://github.com/ahza64",
  github_profile_image: "https://avatars2.githubusercontent.com/u/12857225?v=3&s=460",
  current_city: "San Francisco",
  pets: [
    {
      name: "Susian",
      species: "Rubber Duck",
      alive: false
    },
    {
      name: "Theodore, Mr.Nibbs, Dr.Nibbenstien",
      species: "Gato Prince",
      alive: true
    },
    {
      name: "Jack, Jackers",
      species: "Boston Dog",
      alive: true
    }
  ]
  }
];
 db.Profile.create(new_profile, function(err, profile){
   if (err){
     return console.log("Error: " + err);
   }
   console.log("Created new profile", profile._id);
   proccess.exit();
 });


/////////////////////////inspirational quotes

var newQuotes = [
  {
    name: "Justin",
    //date: "",
    quote: "Seeking justice, is just another name for revenge"
  },
  {
    name: "Ghandi",
    //date: "",
    quote: "an eye for an eye will leave the world blind"
  },
  {
    name: "Tyler Durden",
    quote: "You're not your fucking Kakis"
  }
];

db.Quotes.remove({}, function(err, removed){
  console.log("removed all quotes db");
  db.Quotes.create(newQuotes, function(err, quote){
    if (err){
      return console.log("quotes data error " + err);
    }
    console.log("Created new quote", quote._id);
    proccess.exit();
  });
});
