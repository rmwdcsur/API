const express = require("express");

const router = express.Router();
const contactsController = require("../controllers/contacts");

// GET all contacts
router.get("/", contactsController.getAllContacts);

// Get a specific contact by ID
router.get("/:id", contactsController.getContactById);

// Insert new contact
router.post("/", contactsController.insertContact);

// Update existing contact
router.put("/:id", contactsController.updateContact);

// Delete contact based on ID
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
