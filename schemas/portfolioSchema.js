const mongoose = require("mongoose");
const userInfoSchema = mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
});
const identityInfoSchema = mongoose.Schema({
  key: {
    type: String,
  },
  value: {
    type: String,
  },
});

module.exports = { userInfoSchema, identityInfoSchema };
