const express = require('express');
const router = express.Router();
router.use(express.json());
const accountModel = require('../models/account');


router.get('/', async (req, res) => {
    const accounts = await accountModel.find();

    try {
        res.send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/:id', async (req, res) => {
    const account = await Account.findById(req.params.id).exec();
  
    try {
        res.json(account)
    }
    catch (error) {
        res.status(500).send(error);
    }
})

/* router.post('/', async (req, res) => {
    console.log('hi')
    const { error} = validateAccount(req.body);
    if ( error ) return res.status(400).send(error.details[0].message);
    try{
        let account = new Account({ 
            name:req.body.name,
            type:req.body.type,
            target:req.body.target,
            description:req.body.description,
            managerName:req.body.managerName,
            managerEmail:req.body.managerEmail,
            managerPassword:req.body.managerPassword,
            users:req.body.users,
            tags:req.body.tags,
            properties:req.body.properties
        });
        await Account.save();
        res.send(account)
    }
    catch(e){
        console.log( e);
    }
});
 */
router.post('/', async (req, res) => {
    
    
    const newAccount = req.body
    const updateaccount = await accountModel.insertMany(newAccount)

    try {
        res.send("success:",newAccount);        
    }
    catch (error) {
        res.status(500).send(error);
    }
});


router.put('/:id', async (req, res) => {
    const accountUpdate = req.body;
    const account = await Account.findByIdAndUpdate((req.params.id), accountUpdate).exec();

    try {
        res.send('accountUpdate')
    }
    catch (error) {
        res.status(500).send(error);
    }

})

router.delete('/:id', async (req, res) => {
    const account = await Account.findByIdAndDelete(req.params.id)
  
    try {
        res.send('accountDelete')
    }
    catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router