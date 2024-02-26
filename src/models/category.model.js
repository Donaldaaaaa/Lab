// Donalda Zhuga | 301367408 | 02-25-2024
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
