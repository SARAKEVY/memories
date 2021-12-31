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
    maxlength:15
  },
  acUsers: {
    type: Array,
    required: true,
  },
  acTags: {
    type: Array,
    required: true,
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
    acName: Joi.string().min(2).max(255).required(),
    acType: Joi.string().min(2).max(255).required(),
    acTarget: Joi.string().min(2).max(1000),
    acDescription: Joi.string().min(2).required(),
    acManagerName: Joi.string().max(2).max(255).required(),
    acManagerEmail:Joi.string().min(11).max(255).email().required(),
    acManagerPassword: Joi.string().min(8).max(15).required(),
    acUsers: Joi.array().required(),
    acTags: Joi.array().required(),
    acProperties: Joi.array().min(1).required(),
  });

  return schema.validate(account);
}

exports.Account = Account;
exports.validateAccount = validateAccount;
