const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


// Call controller function
router.get('/', homeController.getHome);


module.exports = router;