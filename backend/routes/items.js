const express = require('express');
const router = express.Router();
//const multer = require('multer');
//const uuid = require('uuid').v4;
const _ = require('lodash');
router.use(express.json());
const { Item, validateItem } = require('../models/item');

//const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    
    const item = await Item.find({});

    try {
        res.send(item);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get('/:accountId', async (req, res) => {
    const items = await Item.find({accountId:req.params.accountId}).exec();

    try {
        res.json(items)
    }
    catch (error) {
        res.status(500).send(error);
    }
})

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//     cb(null,'uploads');
// },

//     fileName:(req,file,cb)=>{
//         const {orginalName} = file;
//         cb(null,orginalName);
//     }

// })

// const uploadImage = multer({storage:storage});

router.post('/', async (req, res) => {
    console.log('itemService-backend ',req.body);  
try{
    let newItem = new Item({
      fileUrl: req.body.fileUrl,
      //file:myFile.selectedFile,
     // fileName:req.body.myFile,
      figures: req.body.figures,
      title: req.body.title,
      description: req.body.description,
      locations: req.body.locations,
      takenDate:req.body.takenDate,
      accountId:req.body.accountId,
    });
    
   await newItem.save();
   //res.send(newItem);
   return res.status(200).send(newItem)
   
}catch (e) {
    console.log(e);
    res.status(500).send(e.massege);
}
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