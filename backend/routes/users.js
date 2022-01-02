const express = require('express');
const router = express.Router();
router.use(express.json());
const userModel = require('../models/user');


router.get('/', async (req, res) => {
    const users = await userModel.find();

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
    const newUser = req.body
    const updateUser = await userModel.insertMany(newUser)

    try {
        res.send(newUser);
    }
    catch (error) {
        res.status(500).send(error);
    }
})


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