const Joi = require("joi");
const mongoose = require("mongoose");
const PasswordComplexity = require("joi-password-complexity");
const jwt = require('jsonwebtoken');
const config = require ('config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 11,
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
  googleId:{
    type: String,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id: this._id, name:this.name}, config.get('jwtKey'));
  return token;
} 


const User = mongoose.model("User", userSchema);

function validateUser(user) {
   const schema = Joi.object({
     name: Joi.string().min(2).max(255).required(),
     email: Joi.string().min(11).max(255).email().required(),
     googleId: Joi.string(),
     password: new PasswordComplexity({
       min: 8,
       max:50,
       lowerCase: 1,
       upperCase: 1,
       numeric: 1,
     })
  });

   return schema.validate(user);
}

 exports.User = User;
 exports.validate = validateUser;
 
