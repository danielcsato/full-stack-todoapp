const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('todo', todoSchema);
