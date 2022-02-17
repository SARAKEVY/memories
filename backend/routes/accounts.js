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
    const { error } = validateAccount(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        let new_account = new Account (req.body);
        const salt = await bcrypt.genSalt(10);
        new_account.accountPassword = await bcrypt.hash(new_account.accountPassword, salt);
        await new_account.save();
        res.send(_.pick(new_account, ['accountName', '_id']));
        
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
    const account = await Account.findByIdAndDelete(req.params.id)

    try {
        res.send('accountDelete')
    }
    catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router