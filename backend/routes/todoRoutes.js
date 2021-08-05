const express = require('express');
const router = express.Router();
const Todo_model = require('../model/todo');
const auth = require('../middleware/auth');

router.post('/todo/add', auth, async (req, res) => {
  try {
    const { done, id, todo } = req.body;
    const newTodo = await Todo_model.create({
      todo,
      done,
      id,
    });

    res.status(201).json(newTodo);
  } catch (err) {
    console.log(err);
  }
});

router.get('/todos', auth, (req, res) => {
  Todo_model.find().exec((err, todos) => {
    if (err || !todos) {
      return res.status(400).json({
        error: 'Something went wrong in finding all todos',
      });
    }
    res.json(todos);
  });
});

router.delete('/:id', async (req, res) => {
  try {
    const task = await Todo_model.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.post('/todo/:id', (req, res) => {
  Todo_model.findById(req.params.id, (err, todo) => {
    if (!todo) res.status(404).send('Couldnt find todo');
    else {
      todo.done = !todo.done;
      todo
        .save()
        .then((todo) => {
          res.json('Todo updated');
        })
        .catch((err) => {
          res.status(400).send('Failed');
        });
    }
  });
});

module.exports = router;
