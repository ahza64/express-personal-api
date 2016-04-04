// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_campsite = {description: "Sharp rocks. Middle of nowhere."};

db.Campsite.create(new_campsite, function(err, campsite){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new campsite", campsite._id);
  // process.exit(); // we're all done! Exit the program.
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
  //  proccess.exit();
 });


/////////////////////////inspirational quotes

var newQuotes = [
  {
    name: "Osho",
    image: "http://tapoban.com/wp-content/uploads/2011/07/osho.jpg",
    quote: "If you love a flower, dont pick it up. Because if you pick it up it dies and it ceases to be what you love. So if you love a flower, let it be. Love is not about possession. Love is about appreciation."
  },
  {
    name: "Ghandi",
    image: "http://images.indianexpress.com/2014/12/gandhi1.jpg",
    quote: "An eye for an eye will leave the world blind"
  },
  {
    name: "Justin",
    image: "http://i.imgur.com/mgJaG5ds.jpg",
    quote: "Seeking justice, is just another name for revenge"
  },
  {
    name: "Tyler Durden",
    image: "http://orig00.deviantart.net/b2ac/f/2015/142/0/4/tyler_durden_by_zhenfeng91-d78zlv2.jpg",
    quote: "You're not your fucking Kakis"
  }
];

db.Quote.remove({}, function(err, removed){
  console.log("removed all quotes db");
  db.Quote.create(newQuotes, function(err, quote){
    if (err){
      return console.log("quotes data error " + err);
    }
    console.log("Created new quote", quote._id);
    proccess.exit();
  });
});
