var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var quoteSchema = new Schema({
  name: String,
  image: String,
  quote: String
});

var Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
