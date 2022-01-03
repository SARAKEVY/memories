const Joi = require("joi");
const mongoose = require("mongoose");
const PasswordComplexity = require("joi-password-complexity");

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
    unique: true,
  }, 
  managerPassword: {
   type: String,
    required: true,
    min: 8,
    max: 25,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
  },
  /* users: {
    type: Array,
    required: true,
  }, */
  
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
    description: Joi.string().min(2).max(5000).required(),
    managerName: Joi.string().max(2).max(255).required(),
    managerEmail:Joi.string().min(11).max(255).email().required(),
    managerPassword: new PasswordComplexity({min:8 ,max:25, lowerCase: 1, upperCase: 1, numeric: 1,}),
    /* users: Joi.array().required(),
     */
  });

  return schema.validate(account);
}

exports.Account = Account;
exports.validateAccount = validateAccount;

