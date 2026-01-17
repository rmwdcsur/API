const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  favoriteColor: String,
  birthday: String
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;