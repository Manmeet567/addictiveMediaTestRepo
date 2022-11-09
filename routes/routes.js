const express = require('express')
const inputPage = require('../controllers/inputPage');
const handlingData = require('../controllers/postingData');
const {listingPage, sortByName} = require('../controllers/listingPage');
const showResume = require('../controllers/showResume');
const deleteData = require('../controllers/deleteData');
const multer = require('multer');

const router = express.Router()

router.get('/',inputPage)


// using multer for handling file uploads
const storage = multer.memoryStorage();

const upload = multer({storage:storage});

router.post('/incomingData',upload.single('resume') ,handlingData);

router.get('/listingPage', listingPage);
router.get('/listingPage/sortByName', sortByName);

router.get('/resume/:id',showResume)

router.get('/delete/:id',deleteData)

module.exports = router;