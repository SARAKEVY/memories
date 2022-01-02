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
    maxlength: 30,
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
    maxlength:5000,
  },
  managerName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  managerEmail: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 255,
  }, 
  managerPassword: {
   type: String,
    required: true,
    minlength: 8,
    maxlength:15
  },
  users: {
    type: Array,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
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
    description: Joi.string().min(2).required(),
    managerName: Joi.string().max(2).max(255).required(),
    managerEmail:Joi.string().min(11).max(255).email().required(),
    managerPassword: Joi.string().min(8).max(15).required(),
    users: Joi.array().required(),
    tags: Joi.array().required(),
    properties: Joi.array().min(1).required(),
  });

  return schema.validate(account);
}

//exports.Account = Account;
exports.validate = validateAccount;
module.exports = Account;
