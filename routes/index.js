const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


// Call controller function
router.get('/', homeController.getHome);

//call nathalia controller function
const nathaliaController = require('../controllers/nathaliaController');
router.get('/nathalia', nathaliaController.getNathalia);


module.exports = router;