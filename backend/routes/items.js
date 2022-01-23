const express = require('express');
const router = express.Router();
const _ = require('lodash');
router.use(express.json());
const { Item, validateItem } = require('../models/item');

const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    const items = await Item.find({});

    try {
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/:id', async (req, res) => {
    const item = await Item.findById(req.params.id).exec();

    try {
        res.json(item)
    }
    catch (error) {
        res.status(500).send(error);
    }
})

router.post('/', async (req, res) => {
    const { error } = validateItem(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // let item = await Item.findOne({ email: req.body.email});
    // if (item) return res.status(400).send('משתמש רשום');

    item = new Item(req.body);
    const salt = await bcrypt.genSalt(10);
    await item.save();
    res.send(_.pick(item, ['tags', 'title', 'description',]));

});



router.put('/:id', async (req, res) => {
    const itemUpdate = req.body;
    const item = await Item.findByIdAndUpdate((req.params.id), itemUpdate).exec();

    try {
        res.send('item is Update')
    }
    catch (error) {
        res.status(500).send(error);
    }

})

router.delete('/:id', async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id)

    try {
        res.send('item is Delete')
    }
    catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router