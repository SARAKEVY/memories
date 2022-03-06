const express = require('express');
const router = express.Router();
const _ = require('lodash');
router.use(express.json());
const { User, validate} = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    const users = await User.find({});

    try {
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/:id', async (req, res) => {
    console.log(req.params.id);
    const user = await User.findById(req.params.id).exec();
    try {
       res.send(user.userAccounts);
       console.log(user.userAccounts);
    }
    catch (error) {
        res.status(500).send(error);
    }
})

router.post('/', async (req, res) => {
    console.log('hi', req.body);
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send({ "errorMassege": "user exists" });

    user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send(_.pick(user, ['_id', 'name', 'last', 'email']));

});

router.post('/join', async (req, res) => {
    console.log(req);
    const accountId = req.body.accountId;
    const userId= req.body.userId;

    let addAccount = await User.findOne({ _id: userId});
    if (addAccount.AccountId === accountId ) {
     res.status(400).send( "You are already logged in to this account" );
    }
    await User.findOneAndUpdate({_id: userId}, {$push: {userAccounts: req.body.data.data}});
})


router.put('/:id', async (req, res) => {
    const userUpdate = req.body;
    const user = await User.findByIdAndUpdate((req.params.id), userUpdate).exec();

    try {
        res.send('user is Update')
    }
    catch (error) {
        res.status(500).send(error);
    }

})

router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)

    try {
        res.send('user is Delete')
    }
    catch (error) {
        res.status(500).send(error);
    }
})



module.exports = router;