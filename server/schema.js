const { mongoose, Schema } = require('mongoose');

const exerciseSchema = new Schema ({
  "_id": {
    "$oid": Number
  },
  "title": String,
  "practice": String,
  "MET": String,
  "measure": String,
  "default-value": String,
  "target": {
    "primary": Array,
    "secondary": Array
  }
});

const userSchema = new Schema ({
  "_id": {
    "$oid": Number
  },
  "username": String,
  "password": String,
  "e-mail": String,
  "weight": Number,
  "height": Number,
  // "routine": {}
});

const Exercise = mongoose.model('exercise', exerciseSchema);
const User = mongoose.model('user', userSchema);

module.exports = { Exercise, User };
