const multer = require('multer');
const express = require('express');
const router = express.Router();
router.use(express.json());


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'uploads')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).single('file')

router.post('/upload',function(req, res) {
     console.log('upload ????????',req.body)
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

});

module.exports = router ;

