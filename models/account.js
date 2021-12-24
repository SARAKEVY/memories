const Joi = require("joi");
const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  type: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  target: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1000,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 3000,
  },
  manager: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  users: {
    type: Array,
  },
  tags: {
    type: Array,
  },
  properties: {
    type: Array,
    required: true,
    minlength: 1,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Account = mongoose.model("Account", accountSchema);

function validateAccount(account) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    type: Joi.string().min(2).max(255).required(),
    target: Joi.string().min(2).max(1000),
    description: Joi.string().min(2).max(3000).required(),
    manager: Joi.string().max(2).max(255).required(),
    users: Joi.array().required(),
    tags: Joi.array().required(),
    properties: Joi.array().min(1).required(),
  });

  return schema.validate(account);
}

exports.Account = Account;
exports.validateAccount = validateAccount;
