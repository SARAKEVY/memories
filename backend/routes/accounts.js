const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
router.use(express.json());
const _ = require('lodash');
const { Account, validateAccount } = require('../models/account');


router.get('/', async (req, res) => {
    const accounts = await Account.find();

    try {
        res.send(accounts);
    } catch (error) {
        res.status(500).send(error);
    }
});



router.get('/:id', async (req, res) => {
    console.log('6');
    const account = await Account.findById(req.params.id).exec();
    console.log(account);
    try {
        res.send(account);
        
    }
    catch (error) {
        res.status(500).send(error);
    }
})


router.get('/edit/:id', async (req, res) => {
    const account = await Account.findById(req.params.id).exec();
    console.log(account);
    try {
        res.send(account);
        
    }
    catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    console.log('hi')
    const { error } = validateAccount(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        let new_account = new Account (req.body);
        const salt = await bcrypt.genSalt(10);
        new_account.accountPassword = await bcrypt.hash(new_account.accountPassword, salt);
        await new_account.save();
        const data = (_.pick(new_account, ['accountDescription','accountName','accountTarget', 'accountType','managerEmail','managerName', '_id']));
        res.json(({accountToken: new_account.generateAuthAccountToken(), data: data}));
         
        //res.send(_.pick(new_account, ['accountDescription','accountName','accountTarget', 'accountType','managerEmail','managerName', '_id']));
       
    }
    catch (e) {
        console.log(e);
        res.status(500).send(e.massege);
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

});



router.delete('/:id', async (req, res) => {
    const account = await Account.findOneAndRemove({_id:req.params.id})
    if( ! account ) return res.status(404).send('Account does not exist');
    try {
        res.send('Account Delete');
    }
    catch (ex) {
        res.status(500).send(ex);
    }
})


module.exports = router