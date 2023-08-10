const mongoose = require("mongoose");

const userInfoSchema = mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  image: {
    type: String,
  },
  highlights: [
    mongoose.Schema({
      key: {
        type: String,
      },
      value: {
        type: String,
      },
    }),
  ],
});

const skillsSchema = mongoose.Schema({
  key: {
    type: String,
  },
  level: [
    mongoose.Schema({
      key: {
        type: String,
      },
      value: [
        mongoose.Schema({
          skill: {
            type: String,
          },
        }),
      ],
    }),
  ],
});

const identityInfoSchema = mongoose.Schema({
  key: {
    type: String,
  },
  value: {
    type: String,
  },
});

const contactInfoSchema = mongoose.Schema({
  key: {
    type: String,
  },
  value: {
    type: String,
  },
});

module.exports = {
  userInfoSchema,
  skillsSchema,
  identityInfoSchema,
  contactInfoSchema,
};
