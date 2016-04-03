var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var quoteSchema = new Schema({
  name: String,
  //date: String,
  quote: String
});

var Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
