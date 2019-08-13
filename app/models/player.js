const mongoose = require('mongoose');
var Schema       = mongoose.Schema;

const PlayerSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Player', PlayerSchema);