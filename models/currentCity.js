var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var citySchema = new Schema({
  name: String
});

var City = mongoose.model('City', citySchema);
module.exports = City;
