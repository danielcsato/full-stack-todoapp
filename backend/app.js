require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const User = require('./model/user');
const Todo_model = require('./model/todo');
const auth = require('./middleware/auth');
const todo = require('./model/todo');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.post('/todo/add', auth, async (req, res) => {
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

app.get('/todos', auth, (req, res) => {
  Todo_model.find().exec((err, todos) => {
    if (err || !todos) {
      return res.status(400).json({
        error: 'Something went wrong in finding all todos',
      });
    }
    res.json(todos);
  });
});

app.delete('/:id', async (req, res) => {
  try {
    const task = await Todo_model.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

app.post('/todo/:id', (req, res) => {
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

app.post('/register', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!(email && password && first_name && last_name)) {
      res.status(400).send('All input is required');
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send('User Already Exist. Please Login');
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
      expiresIn: '2h',
    });

    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send('All input is required');
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
        expiresIn: '2h',
      });
      user.token = token;
      res.status(200).json(user);
    }
    res.status(400).send('Invalid Credentials');
  } catch (err) {
    console.log(err);
  }
});

app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'This route does not exists',
    },
  });
});

module.exports = app;
