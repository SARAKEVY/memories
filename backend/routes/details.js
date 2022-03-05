const express = require('express');
const router = express.Router();
//const _ = require('lodash');
router.use(express.json());
const { Detail, validateDetail} = require('../models/detail');


router.get('/', async (req, res) => {
    const detail = await Detail.find({});
    try {
        res.send(detail);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/:id', async (req, res) => {
    const detail = await Detail.findById(req.params.id).exec();

    try {
        res.json(detail)
    }
    catch (error) {
        res.status(500).send(error);
    }
})


router.post('/', async (req, res) => {

    console.log('hi detail' ,req.body)
    const { error } =validateDetail(req.body);
    console.log('error',error);
    if (error) return res.status(400).send(error.details[0].message);
    console.log('error',error);
    try {
        let new_detail = new Detail({
            itemId:req.body.itemId,
            textDetail: req.body.textDetail,
            ownerDetailId: req.body.ownerDetailId,
            ownerDetailName: req.body.ownerDetailName,
        });
        
        await new_detail.save();
        res.send(new_detail)
      }catch (e) {
        console.log(e);
        res.status(500).send(e.massege);
    }

});



router.put('/:id', async (req, res) => {
    const locationUpdate = req.body;
    const detail = await Detail.findByIdAndUpdate((req.params.id), locationUpdate).exec();

    try {
        res.send('detail is Update')
    }
    catch (error) {
        res.status(500).send(error);
    }

})

router.delete('/:id', async (req, res) => {
    const detail = await Detail.findByIdAndDelete(req.params.id)

    try {
        res.send('detail is Delete')
    }
    catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router