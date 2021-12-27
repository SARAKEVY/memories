const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    min: 8,
    max: 250,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
  },
  phone: {
    type: String,
    minlength: 2,
    maxlength: 10,
    required: true,
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(255).required(),
    lastName: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(2).max(255).email().required(),
    password: new PasswordComplexity({
      min: 8,
      max: 25,
      lowerCase: 1,
      upperCase: 1,
      numeric: 1,
    }),
    phone: Joi.string().min(2).max(10).required(),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
