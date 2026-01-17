const express = require('express');

const router = express.Router();
const contactsController = require('../controllers/contacts');

// GET all contacts
router.get('/', contactsController.getAllContacts);

// Get a specific contact by ID
router.get('/:id', contactsController.getContactById);

module.exports = router;
