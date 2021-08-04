const mongoose = require('mongoose');
const Todoschema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model('Todo', Todoschema);
