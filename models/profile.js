var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var petSchema = new Schema({
  name: String,
  species: String,
  alive: Boolean
});

var profileSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  pets: [petSchema]
});

var Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
