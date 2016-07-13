var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
  admin: Boolean,
  timestamps: true
}));
