const express = require('express');
const router = express.Router();
const _ = require('lodash');
router.use(express.json());
const { Location, validateLocation} = require('../models/location');


router.get('/', async (req, res) => {
    const location = await Location.find({});

    try {
        res.send(Location);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/:id', async (req, res) => {
    const location = await Location.findById(req.params.id).exec();

    try {
        res.json(location)
    }
    catch (error) {
        res.status(500).send(error);
    }
})


router.post('/', async (req, res) => {

    console.log('hi location' ,req.body)
    const { error } =validateLocation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        let new_location = new Location({
            name: req.body.name,
            description: req.body.description
        });

        const { error } = validateLocation(new_location);
        console.log(error);
        if (error) return res.status(400).send(error.details[0].message);

        await new_location.save();
        res.send(new_location)
      }catch (e) {
        console.log(e);
        res.status(500).send(e.massege);
    }

});



router.put('/:id', async (req, res) => {
    const locationUpdate = req.body;
    const location = await Location.findByIdAndUpdate((req.params.id), locationUpdate).exec();

    try {
        res.send('location is Update')
    }
    catch (error) {
        res.status(500).send(error);
    }

})

router.delete('/:id', async (req, res) => {
    const location = await Location.findByIdAndDelete(req.params.id)

    try {
        res.send('location is Delete')
    }
    catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router