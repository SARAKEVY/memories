const express = require('express');
const router = express.Router();
const _ = require('lodash');
router.use(express.json());
const userModel = require('../models/user');
const {User, validate} = require('../models/user');
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
    const user = await userModel.findById(req.params.id).exec();
  
    try {
        res.json(user)
    }
    catch (error) {
        res.status(500).send(error);
    }
})

 router.post('/', async (req, res) => {
     console.log('hi');
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email});
    if (user) return res.status(400).send({"errorMassege":"user exists"});
    
    user = new User (req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send(_.pick(user, ['_id', 'name', 'last', 'email']));

    }); 


/* router.post('/', async (req, res) => {
    const { error } = validate(req.body)

    const newUser = req.body
    const updateUser = await userModel.insertMany(newUser)

    try {
        res.send(newUser);
    }
    catch (error) {
        res.status(500).send(error);
    }
}); */


router.put('/:id', async (req, res) => {
    const userUpdate = req.body;
    const user = await userModel.findByIdAndUpdate((req.params.id), userUpdate).exec();

    try {
        res.send('user is Update')
    }
    catch (error) {
        res.status(500).send(error);
    }

})

router.delete('/:id', async (req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id)
  
    try {
        res.send('user is Delete')
    }
    catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router