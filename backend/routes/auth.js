const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');

router.post ('/', async (req, res ) => {
  console.log(req.body);
  try{
    const { error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message); 

    let user = await User.findOne({ email: req.body.email});
    if ( ! user ) return res.status(400).send('email or password not incorrect');
console.log('y');
    const validaPassword = await bcrypt.compare(req.body.password, user.password);
    if (! validaPassword ) return res.status(400).send('email or password not incorrect');
console.log('r');
    res.json({token: user.generateAuthToken()}); 
    
  }
   catch(ex) {
    console.log(ex);
    res.status(500).send();
   }
  
})



function validate(req) {

    const schema = Joi.object({
      email: Joi.string().min(6).max(255).required().email(),
      password: Joi.string().min(6).max(1024).required()
    });
  
    return schema.validate(req);
  }


  module.exports = router; 


