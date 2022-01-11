const express = require('express');
const router = express.Router();
const _ = require('lodash');
router.use(express.json());
const itemModel = require('../models/item');
const {Item, validate} = require('../models/item');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    const items = await itemModel.find({});

    try {
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/:id', async (req, res) => {
    const item = await itemModel.findById(req.params.id).exec();
  
    try {
        res.json(item)
    }
    catch (error) {
        res.status(500).send(error);
    }
})

 router.post('/', async (req, res) => {
     console.log('hi');
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let item = await Item.findOne({ email: req.body.email});
    if (item) return res.status(400).send('משתמש רשום');
    
    item = new Item (req.body);
    const salt = await bcrypt.genSalt(10);
    item.password = await bcrypt.hash(item.password, salt);
    await item.save();
    res.send(_.pick(item, ['_id', 'name', 'last', 'email']));

    }); 


/* router.post('/', async (req, res) => {
    const { error } = validate(req.body)

    const newitem = req.body
    const updateitem = await itemModel.insertMany(newitem)

    try {
        res.send(newitem);
    }
    catch (error) {
        res.status(500).send(error);
    }
}); */


router.put('/:id', async (req, res) => {
    const itemUpdate = req.body;
    const item = await itemModel.findByIdAndUpdate((req.params.id), itemUpdate).exec();

    try {
        res.send('item is Update')
    }
    catch (error) {
        res.status(500).send(error);
    }

})

router.delete('/:id', async (req, res) => {
    const item = await itemModel.findByIdAndDelete(req.params.id)
  
    try {
        res.send('item is Delete')
    }
    catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router