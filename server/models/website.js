var mongoose = require("mongoose");

var WebsiteScheme = new mongoose.Schema({
  name: {type: String, index: true}, 
  content: {type: String},
  active: {type: Boolean}
});

var Website = mongoose.model('Website', WebsiteScheme);

module.exports = {
  Website: Website
}