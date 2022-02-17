const Joi = require("joi");
const mongoose = require("mongoose");
const PasswordComplexity = require("joi-password-complexity");
const jwt = require('jsonwebtoken');
const config = require ('config');
const { user } = require('../models/user');

const accountSchema = new mongoose.Schema({
  accountName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
   accountType: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  accountTarget: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1000,
  },
  accountDescription: {
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
  accountPassword: {
   type: String,
    required: true,
    min: 8,
    max: 25,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
  },
  participants:{
    type:Array,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  /* user_id: {type: mongoose.Schema.Types.ObjectId, ref : 'User'} */
});


accountSchema.methods.generateAuthAccountToken = function(){
  const token = jwt.sign({_id: this.id, accountName: this.accountName, managerEmail:this.managerEmail}, config.get ('jwtAccountKey'));
  return token;
} 

const Account = mongoose.model("Account", accountSchema);

function validateAccount(account) {
  const schema = Joi.object({
    accountName: Joi.string().min(2).max(255).required(),
    accountType: Joi.string().min(2).max(255).required(),
    accountTarget: Joi.string().min(2).max(1000),
    accountDescription: Joi.string().min(2).max(5000).required(),
    managerName: Joi.string().max(2).max(255).required(),
    managerEmail:Joi.string().min(11).max(255).email().required(),
    participants:Joi.array(),
    accountPassword: new PasswordComplexity({min:8 ,max:25, lowerCase: 1, upperCase: 1, numeric: 1,}),
    /* users: Joi.array().required(),
     */
  });

  return schema.validate(account);
}

exports.Account = Account;
exports.validateAccount = validateAccount;

