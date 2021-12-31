const express = require('express');
const router = express.Router();
router.use(express.json());
const {Account, validateAccount } = require('../models/account');


router.get('/', async (req, res) => {
    const accounts = await Account.find();

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





router.post('/', async (req, res) => {
    console.log('hi')
    const { error} = validateAccount(req.body);
    if ( error ) return res.status(400).send(error.details[0].massage);
    try{
        let account = new Account({ 
            acName:req.body.acName,
            acType:req.body.acType,
            acTarget:req.body.acTarget,
            asDescription:req.body.asDescription,
            acManagerName:req.body.acManagerName,
            acManagerEmail:req.body.acManagerEmail,
            asManagerPassword:req.body.acManagerPassword,
            acUsers:req.body.acUsers,
            acTags:req.body.acTags,
            acProperties:req.body.acProperties
        });
        await Account.save();
        res.send(account)
    }
    catch(e){
        console.log( e);
    }
});

/* router.post('/', async (req, res) => {
    const { error } = validateAccount(req.body);
    if ( error) return res.status(400).send(error.datails[0].message);
    const newAccount = req.body
    const updateaccount = await Account.insertMany(newAccount)

    try {
        res.send("success:",newAccount);        
    }
    catch (error) {
        res.status(500).send(error);
    }
}) */


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