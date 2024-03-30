const express = require('express');
const router = express.Router();
const PDF = require('../models/pdfmodel');
const EPDF = require('../models/extractpdfmodel')
const multer = require('multer')
const pdfController = require('../controllers/pdfcontrollers');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() 
    cb(null,uniqueSuffix + file.originalname  )
  }
})

const upload = multer({ storage: storage })

router.post('/upload', upload.single('file'), pdfController.uploadpdf);
router.post('/upload/:id', pdfController.loadpdf);
router.post('/extract', pdfController.extractpdf);
router.post('/download/:id',pdfController.pdfdownload);

module.exports = router;