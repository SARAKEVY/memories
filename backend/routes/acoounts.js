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
    const account = await accountModel.findById(req.params.id).exec();
  
    try {
        res.json(account)
    }
    catch (error) {
        res.status(500).send(error);
    }
})


router.post('/', async (req, res) => {
    const newAccount = req.body
    const updateaccount = await accountModel.insertMany(newAccount)

    try {
        res.send(newAccount);
    }
    catch (error) {
        res.status(500).send(error);
    }
})


router.put('/:id', async (req, res) => {
    const accountUpdate = req.body;
    const account = await accountModel.findByIdAndUpdate((req.params.id), accountUpdate).exec();

    try {
        res.send('accountUpdate')
    }
    catch (error) {
        res.status(500).send(error);
    }

})

router.delete('/:id', async (req, res) => {
    const account = await accountModel.findByIdAndDelete(req.params.id)
  
    try {
        res.send('accountDelete')
    }
    catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router






/* const express = require('express');
const router = express.Router();
const { Account, validateAccount} = require('../models/account');

router.post('/', async (req, res) => {
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
            acProperties:req.body.acProperties
        });
        await Account.save();
        res.send(account)
    }
    catch(e){
        console.log( e);
    }
});

module.exports = router; */