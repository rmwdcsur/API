const mongodb = require('../DB/mongoDB');
const Contact = require('../models/contact');


// GET all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific contact by ID
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

module.exports = {
  getAllContacts,
  getContactById
};