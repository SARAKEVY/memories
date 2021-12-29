const Joi = require("joi");
const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  acName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  acType: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  acTarget: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1000,
  },
  acDescription: {
    type: String,
    required: true,
    minlength: 2,
    maxlength:5000,
  },
  acManagerName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  acManagerEmail: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 255,
  },
  acManagerPassword: {
    type: String,
    required: true,
    minlength: 8,
    maxlength:10
  },
  acUsers: {
    type: Array,
  },
  acTags: {
    type: Array,
  },
  acProperties: {
    type: Array,
    required: true,
    minlength: 1,
  },
  acCreatedDate: {
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
    description: Joi.string().min(2).required(),
    manager: Joi.string().max(2).max(255).required(),
    users: Joi.array().required(),
    tags: Joi.array().required(),
    properties: Joi.array().min(1).required(),
  });

  return schema.validate(account);
}

exports.Account = Account;
exports.validateAccount = validateAccount;
