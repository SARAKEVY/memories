const express = require('express');
const router = express.Router();
const { Account } = require('../models/account');
const Joi = require('joi');
const bcrypt = require('bcrypt');

router.post ('/', async (req, res ) => {
  console.log(req.body);
  try{
    const { error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message); 

    let account = await Account.findOne({ managerEmail: req.body.managerEmail});
    if ( ! account ) return res.status(400).send('email or password not incorrect');

    const validaPassword = await bcrypt.compare(req.body.accountPassword, account.accountPassword);
    if (! validaPassword ) return res.status(400).send('email or password not incorrect');

    res.json({token: account.generateAuthAccountToken()}); 
    
  }
   catch(ex) {
    console.log(ex);
    res.status(500).send();
   }
  
})

router.post('/auth', async (req, res) => {
  console.log(req.body.accountId);
  try{
   
    let addUser = await Account.findOne({_id: req.body.accountId});
   
    res.json({token: addUser.generateAuthAccountToken()}); 
  
}
 catch(ex) {
  console.log(ex);
  res.status(500).send();
 }


  
})

function validate(req) {

    const schema = Joi.object({
      managerEmail: Joi.string().min(6).max(255).required().email(),
      accountPassword: Joi.string().min(6).max(1024).required()
    });
  
    return schema.validate(req);
  }


  module.exports = router; 